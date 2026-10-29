// Unknown URL -> 404
const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
};

// Any error thrown in the app ends up here
const errorHandler = (err, req, res, next) => {
  // Mongoose validation error (missing required field) -> 400
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ success: false, message: messages.join(', ') });
  }
  // Invalid MongoDB ID format -> 404
  if (err.name === 'CastError') {
    return res.status(404).json({ success: false, message: 'Resource not found (invalid ID)' });
  }
  // Duplicate value (e.g. same email) -> 400
  if (err.code === 11000) {
    return res.status(400).json({ success: false, message: 'Duplicate value entered' });
  }
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
};

module.exports = { notFound, errorHandler };