const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const courseRoutes = require('./routes/courseRoutes');
const app = express();
const port = 3005;

const uri = 'mongodb+srv://admin:admin@cluster0.acc1is2.mongodb.net/courses_db?retryWrites=true&w=majority&appName=Cluster0';;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((error) => console.error('Error al conectar a MongoDB Atlas:', error.message));

app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
}));

app.use(express.json());


app.use('/api', courseRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
