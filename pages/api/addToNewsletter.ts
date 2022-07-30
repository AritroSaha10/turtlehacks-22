import Airtable from "airtable";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const ip = req.headers["x-real-ip"]; // Works for Vercel

    if (req.method !== "POST") {
        console.warn("Method is not POST. Ignoring...");
        res.status(405).json({
            status: 405,
            message: "405 Method Not Allowed"
        });
        return;
    }

    if (req.body.email === undefined) {
        console.warn("Body does not include an email key. Ignoring...");
        res.status(400).json({
            status: 400,
            message: "400 Bad Request"
        });
        return;
    }

    if (process.env.AIRTABLE_API_KEY === undefined) {
        console.error("Airtable API key has not been provided. Crashing.");
        res.status(500).json({
            status: 500,
            message: "500 Internal Server Error"
        });
        return;
    }

    // Try creating a new entry 5 times. If it doesn't work on the 5th, no point in trying again.
    // This is required because Airtable is STUPID and sometimes it literally fails to create a 
    // proper SSL connection.
    for (let i = 1; i <= 5; i++) {
        try {
            const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base("appFvesKZ7EewVgR0");
            const contactInfoTable = base("Newsletter");

            console.debug("Generated references to email table. Creating new entry...");

            await contactInfoTable.create([
                {
                    fields: {
                        "Email": req.body.email,
                        "IP Address": ip,
                    }
                }
            ]);

            console.debug("New entry added to newsletter table!")

            res.json({
                status: 200
            });

            return;
        } catch (e) {
            console.error(`Error on attempt #${i}:`, e);

            // Wait for a bit before trying again
            await new Promise(function (resolve) {
                setTimeout(resolve.bind(null, null), 500);
            });
        }
    }

    res.status(500).json({ status: 500 });
}