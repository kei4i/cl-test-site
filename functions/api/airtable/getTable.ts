export async function onRequest(context) {
    const {
        env, // same as existing Worker API
    } = context;

    // const res = await fetch(`https://api.airtable.com/v0/${env.BASE_ID}/${env.VACANCY_TABLE}?maxRecords=99&view=Grid%20view`, {
    const res = await fetch(`https://api.airtable.com/v0/app2oHOQICP1Dve1H/vacancies?maxRecords=99&view=Grid%20view`, {
    headers: {
            Authorization: `Bearer keyFVAbr7P6w5rzBy`,
        },
    })
    const data = await res.json();
    const info = JSON.stringify(data);
    return new Response(info);
}
