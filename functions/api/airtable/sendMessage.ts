export async function onRequestPost({request, context}) {
    const {
        env, // same as existing Worker API
    } = context;
    const body = await request.formData();
    const message = {
      name: body.get('name') as string,
      message: body.get('message') as string,
      email: body.get('email') as string,
    }
    const response = await fetch(`https://api.airtable.com/v0/${env.BASE_ID}/${env.FEEDBACK_TABLE}`, {
        method: 'POST',
        body: JSON.stringify({
            "records": [
                {
                    "fields": {
                        "name": message.name,
                        "email": message.email,
                        "message": message.message,
                    }
                },
            ]}),
        headers: {
            Authorization: `Bearer ${env.AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}
