export async function onRequest(context) {
    const {
        env, // same as existing Worker API
    } = context;

    // const {AIRTABLE_API_KEY, BASE_ID, VACANCY_TABLE} = new Response(env);
    const res = await fetch(`https://api.airtable.com/v0/${env.BASE_ID}/${env.VACANCY_TABLE}?maxRecords=99&view=Grid%20view`, {
        headers: {
            Authorization: `Bearer ${env.AIRTABLE_API_KEY}`,
        },
    })
    const data = await res.json();
    const info = JSON.stringify(data);
    return new Response(info);
}

// export async function onRequest() {
//     const res = await fetch(
//         `https://rickandmortyapi.com/api/character/1`
//     );
//     const data = await res.json();
//     const info = JSON.stringify(data);
//     console.log('info', info);
//     return new Response(info, null, 2);
// }
// export const getTable = onRequest;
// console.log()

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
