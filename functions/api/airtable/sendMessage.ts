export async function onRequestPost(context) {
    const {
        env, // same as existing Worker API
        request
    } = context;
    const body = await request.formData();
    const message = {
      name: body.get('name') as string,
      message: body.get('message') as string,
      email: body.get('email') as string,
    }
    return await fetch(`https://api.airtable.com/v0/${env.BASE_ID}/${env.FEEDBACK_TABLE}`, {
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
            ]
        }),
        headers: {
            Authorization: `Bearer ${env.AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
        },
    });
}
