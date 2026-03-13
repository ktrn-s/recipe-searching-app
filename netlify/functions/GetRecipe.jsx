export async function handler(event) {

    const query = event.queryStringParameters.q || "avocado";

    const APP_ID = process.env.EDAMAM_APP_ID;
    const APP_KEY = process.env.EDAMAM_APP_KEY;

    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data.hits)
    };
}