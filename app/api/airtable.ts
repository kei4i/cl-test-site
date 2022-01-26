export type Film = {
    id: string;
    title: string;
    original_title: string;
    description: string;
    image: string;
    movie_banner: string;
    people: string[];
};

export type MessageEntry = {
    name: string;
    email: string;
    message: string;
};

export type VacancyEntry = {
    name: string;
    email: string;
};

export async function getTable() {
    const response = await fetch(`https://api.airtable.com/v0/${process.env.BASE_ID}/${process.env.VACANCY_TABLE}?maxRecords=99&view=Grid%20view`, {
            headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        },
    })
    const data = await response.json();
    return data;
}

export async function getVacancy(careerId: string) {
    const response = await fetch(`https://api.airtable.com/v0/${process.env.BASE_ID}/${process.env.VACANCY_TABLE}/${careerId}`, {
        headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        },
    })
    const data = await response.json();
    return data;
}


export async function sendMessage(message: MessageEntry) {
    const response = await fetch(`https://api.airtable.com/v0/${process.env.BASE_ID}/${process.env.FEEDBACK_TABLE}`, {
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
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}
