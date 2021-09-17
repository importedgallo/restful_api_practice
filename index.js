const express = require('express');
const PORT = 8080;
const app = express();

app.use(express.json());

app.get('/tshirt', (req, res) => {
	res.status(200).send({
		tshirt: 'tshirticon',
		size: 'large'
	})
});


app.listen(
	PORT,
	() => console.log(`it's alive on http://localhost:${PORT}`));
	
app.post('/tshirt/:id', (req, res) => {
	const { id } = req.params;
	const { logo } = req.body;

	if (!logo) {
		res.status(418).send({ message: 'we need a logo!' })
	}

	res.send({
		tshirt: `tshirticon with your ${logo} and ID of ${id}`,
		});
});
