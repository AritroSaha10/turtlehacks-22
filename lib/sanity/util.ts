import client, { getClient, usePreviewSubscription } from "../../lib/sanity";
import { groq } from "next-sanity";

interface getAllSlugsReturn {
    paths: {
        params: {
            slug: string
        }
    }[],
    fallback: string
};

interface getDocumentPropsReturn {
    props?: {
        documentRaw: { [key: string]: any },
        preview: boolean
    },
    revalidate?: number,
    notFound?: boolean
}

interface getDocumentsPropsReturn {
    props?: {
        documentsRaw: { [key: string]: any }[],
        preview: boolean
    },
    revalidate?: number
}

/**
 * Prepare standard groq query for getting document by slug from specific collection
 */
function prepareSingleDocumentGROQ(collectionName: string) {
    return groq`
        *[_type == "${collectionName}" && slug.current == $slug][0] {
        ...
        }
    `;
}

/**
 * Prepare standard groq query for getting all documents specific collection
 */
function prepareAllDocumentGROQ(collectionName: string, sortByOrder: boolean = false) {
    return groq`
        *[_type == "${collectionName}"] ${sortByOrder ? "| order(order asc)" : ""} {
        ...
        }
    `;
}


/**
 * Gets slugs for all documents for a given collection
 * Very useful for getStaticPaths, hence the return schema
 */
async function getAllSlugs(collectionName: string, preview: boolean = false): Promise<getAllSlugsReturn> {
    const paths: string[] = await getClient(preview).fetch(
        groq`*[_type == "${collectionName}" && defined(slug.current)][].slug.current`
    );

    return {
        paths: paths.map((slug: string) => ({ params: { slug } })),
        fallback: "blocking",
    };
}

/**
 * Gets props for a specific document in a given collection
 * Very useful for getStaticProps, hence the return schema
 */
async function getDocumentProps(collectionName: string, params: { [key: string]: any, slug: string }, preview: boolean = false): Promise<getDocumentPropsReturn> {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = params;
    const documentRaw = await getClient(preview).fetch(prepareSingleDocumentGROQ(collectionName), { slug });

    if (documentRaw === null) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            documentRaw,
            preview
        },
        revalidate: 60,
    };
}

/**
 * Get all documents under a collection
 */
function getAllDocuments(collectionName: string, sortByOrder: boolean = false, preview: boolean = false): Promise<{ [key: string]: any }[]> {
    return getClient(preview).fetch(prepareAllDocumentGROQ(collectionName, sortByOrder));
}

/**
 * Gets props for all document in a given collection
 * Very useful for getStaticProps, hence the return schema
 */
async function getDocumentsProps(collectionName: string, sortByOrder: boolean = false, preview: boolean = false): Promise<getDocumentsPropsReturn> {
    return {
        props: {
            documentsRaw: await getAllDocuments(collectionName, sortByOrder, preview),
            preview
        },
        revalidate: 60,
    };
}

export { prepareSingleDocumentGROQ, prepareAllDocumentGROQ, getAllSlugs, getDocumentProps, getAllDocuments, getDocumentsProps };