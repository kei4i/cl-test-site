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
    data.tableData = PAGES.get(`AIRTABLE_API_KEY1`, {
        type: "json"
    });
    data.careerData = PAGES.get(`TEST_DATA`, {
        type: "json"
    });
    data.variables = PAGES;
}
