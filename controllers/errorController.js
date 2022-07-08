module.exports = (err, req, res, next) => {
  // global error controller, returns the specific error, according to type.
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
