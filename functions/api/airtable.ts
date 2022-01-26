// async function handleRequest(request) {
//     // ...previous code
//
//     const defaultData = {
//         todos: [
//             {
//                 id: 1,
//                 name: 'Finish the Cloudflare Workers blog post',
//                 completed: false
//             }
//         ]
//     }
//     PAGES.put("data", JSON.stringify(defaultData))
// }

export function getVariable() {
    let data = {
        tableData: null,
        careerData: null,
        variables: null,
    };
    data.tableData = AIRTABLE_API_KEY;
    data.careerData = AIRTABLE_BASE_ID;
    data.variables = AIRTABLE_TABLE_NAME_TEXT;
}
