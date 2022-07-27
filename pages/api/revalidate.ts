import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
    message: string
}

const secret = process.env.SANITY_WEBHOOK_SECRET

interface LinkTransformerType {
    [key: string]: (slug: { [key: string]: string }) => string[]
}

const LinkTransformer: LinkTransformerType = {
    team: () => ["/"],
    faq: () => ["/"],
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (secret === undefined || secret === null) {
        console.warn("Secret is undefined!")
    }

    if (req.method !== "POST") {
        console.error("Must be a POST request")
        return res.status(401).json({ message: "Must be a POST request" })
    }

    if (req.headers["tmp-token"] !== secret) {
        res.status(401).json({ message: "Invalid signature" })

        console.debug("Request headers:", req.headers)
        console.debug("Request body:", req.body)

        console.error("Invalid signature on request (using tmp token)...")
        return
    }

    try {
        const { type, slug } = req.body

        if (LinkTransformer[type] === undefined) {
            // No such type exists
            console.error("No such type exists...")
            console.debug("Type:", type)

            return res.json({ message: "No managed type" })
        } else {
            const links = LinkTransformer[type](req.body)

            // Revalidate all request linkeds
            await Promise.all(
                links.map(async link => {
                    console.debug(`Revalidated ${link}...`)
                    await res.revalidate(link)
                })
            )

            console.debug("Finished revalidation!")
            return res.json({ message: `Revalidated "${type}" with slug "${slug}"` })
        }
    } catch (err) {
        console.error("Error when revalidating: ", err)
        return res.status(500).send({ message: "Error revalidating" })
    }
}