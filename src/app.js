const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.json({ message: 'Course API is running' }));

// Routes will be added in the next steps:
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/categories', require('./routes/category.routes'));
app.use('/api/courses', require('./routes/course.routes'));

app.use(notFound);      // must come after all routes
app.use(errorHandler);  // must be last

module.exports = app;


