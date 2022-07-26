import {
    createClient,
    createPreviewSubscriptionHook,
} from "next-sanity";
// import ReactTooltip from "react-tooltip";

import { config } from "./config";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

if (!config.projectId) {
    throw Error(
        "The Project ID is not set. Check your environment variables."
    );
}

export const urlFor = (source: SanityImageSource) => imageUrlBuilder(client).image(source);

/*
export const imageBuilder = source =>
createImageUrlBuilder(config).image(source);
*/

export const usePreviewSubscription =
createPreviewSubscriptionHook(config);

/*
// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
...config,
// Serializers passed to @sanity/block-content-to-react
// (https://github.com/sanity-io/block-content-to-react)
serializers: {
    types: {
        code: props => (
            <pre data-language={props.node.language}>
                <code>{props.node.code}</code>
            </pre>
        )
    },
}
});
*/

export const client = createClient(config);

export const previewClient = createClient({
    ...config,
    useCdn: false
});

export const getClient = (usePreview: boolean) =>
    usePreview ? previewClient : client;
export default client;