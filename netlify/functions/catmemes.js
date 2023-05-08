exports.handler = async (event, context) => {
    // const quotes = [
	// 	'I find your lack of faith disturbing.',
	// 	'Do. Or do not. There is no try.',
	// 	'A long time ago in a galaxy far, far away...',
	// ]

    const memes = [
		{
            "image": "https://nationaltoday.com/wp-content/uploads/2020/07/Kitten-640x514.jpg",
            "caption1": "run away ",
            "caption2": "from all your responsibilities",
            "id": 3
        }
	]
 
	// const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
 
	const response = JSON.stringify({ memes })
 
	return {
		statusCode: 200,
		body: response,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
		},
	}
}
