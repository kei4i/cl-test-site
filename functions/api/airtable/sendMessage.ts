export async function onRequestPost({request, env}) {
    const body = await request.formData();
    const message = {
      name: body.get('name') as string,
      message: body.get('message') as string,
      email: body.get('email') as string,
    }
    console.log(message);
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
    console.log('response', await response.json());
    return response.json();
}
