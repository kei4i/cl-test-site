export const onRequest = async context => {
    // Contents of context object
    const {
        env, // same as existing Worker API
    } = context;

    const {AIRTABLE_API_KEY, BASE_ID, VACANCY_TABLE} = new Response(env);
    const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${VACANCY_TABLE}?maxRecords=99&view=Grid%20view`, {
        headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
    })
    return await response.json();
};
