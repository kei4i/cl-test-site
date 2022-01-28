export async function onRequest(context) {
    const {
        env, // same as existing Worker API
    } = context;

    // const {AIRTABLE_API_KEY, BASE_ID, VACANCY_TABLE} = new Response(env);
    const VACANCY_TABLE = await PAGES.get('VACANCY_TABLE1');
    const BASE_ID = await PAGES.get('BASE_ID1');
    const AIRTABLE_API_KEY = await PAGES.get('AIRTABLE_API_KEY1');

    const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${VACANCY_TABLE}?maxRecords=99&view=Grid%20view`, {
        headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
    })
    const data = await res.json();
    const info = JSON.stringify(data);
    return new Response(info);
}



// const res = await fetch('https://api.airtable.com/v0/app2oHOQICP1Dve1H/vacancies?maxRecords=3&view=Grid%20view', {

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