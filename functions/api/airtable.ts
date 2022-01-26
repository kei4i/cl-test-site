async function handleRequest(request) {
    // ...previous code

    const defaultData = {
        todos: [
            {
                id: 1,
                name: 'Finish the Cloudflare Workers blog post',
                completed: false
            }
        ]
    }
    PAGES.put("data", JSON.stringify(defaultData))
}
