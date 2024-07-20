const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courseRoutes');
const app = express();
const port = 5008;


mongoose.connect('mongodb://localhost:27017/courses_db', {

});


app.use(express.json());


app.use('/api', courseRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
