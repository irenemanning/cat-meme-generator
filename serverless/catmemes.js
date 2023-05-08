const fetch = require("node-fetch");

exports.handler = async (event, context) => {
    const url = "https://cat-memes-by-irene.netlify.app/";
    try {
        const memeStream = await fetch(url, {
            headers: {
                Accept: "application/json"
            }
        });
        const jsonMeme = await memeStream.json()
        return {
            statusCode: 200,
            body: JSON.stringify(jsonMeme)
        };
    } catch (err) {
        return { statusCode: 422, body: err.stack }
    }
}
