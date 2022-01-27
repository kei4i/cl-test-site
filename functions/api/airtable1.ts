export async function onRequest(context) {
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
}

export const getTable = onRequest;


// export async function onRequest(context) {
//     // Contents of context object
//     const {
//         request, // same as existing Worker API
//         env, // same as existing Worker API
//         next, // used for middleware or to fetch assets
//         data, // arbitrary space for passing data between middlewares
//     } = context;
//    console.log('context',context.url)
//     return new Response(env.AIRTABLE_API_KEY);
// }
