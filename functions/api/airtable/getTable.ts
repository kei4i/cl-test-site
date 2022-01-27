export async function onRequest(context) {
    const {
        env, // same as existing Worker API
    } = context;

    const {AIRTABLE_API_KEY, BASE_ID, VACANCY_TABLE} = new Response(env);
    const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${VACANCY_TABLE}?maxRecords=99&view=Grid%20view`, {
        headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
    })
    const data = await res.json();
    const info = JSON.stringify(data);
    return new Response(info);
}
