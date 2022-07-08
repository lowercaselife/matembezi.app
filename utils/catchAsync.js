// Catch Async errors(replaces try,catch block)
module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};
