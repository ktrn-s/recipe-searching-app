export async function handler(event) {
    const query = event.queryStringParameters?.q || "avocado";

    const APP_ID = process.env.EDAMAM_APP_ID;
    const APP_KEY = process.env.EDAMAM_APP_KEY;

    try {
        const response = await fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: `Edamam API error: ${response.statusText}` })
            };
        }

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data.hits)
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message })
        };
    }
}