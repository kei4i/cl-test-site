import {jsonResponse} from "../../utils/jsonResponse";

export const onRequestPost: PagesFunction<{ PAGES: KVNamespace }> = async ({request, env}) => {
        const { accessAud } = await request.json();
        const { apiToken, accountId } = (await env.PAGES.get(
            "AIRTABLE_API_KEY1",
            "BASE_ID1"
        )) as Setup;

        return jsonResponse(apiToken);
};
