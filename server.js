require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const productRoutes = require('./routes/productRoutes')

const app = express();

app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

app.use('/', (req, res) => res.status(200).json({ message: 'Connected' }));

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log('Connected to DB');
		});
	})
	.catch((error) => console.log(error));
