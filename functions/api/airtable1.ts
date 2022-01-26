export async function onRequest(context) {
    // Contents of context object
    const {
        env, // same as existing Worker API
    } = context;

    const envData = new Response(env);
    const response = await fetch(`https://api.airtable.com/v0/${envData.BASE_ID}/${envData.VACANCY_TABLE}?maxRecords=99&view=Grid%20view`, {
        headers: {
            Authorization: `Bearer ${envData.AIRTABLE_API_KEY}`,
        },
    })
    return await response.json();
}
