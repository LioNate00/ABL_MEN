// middleware/apiKey.js
const apiKey = process.env.API_KEY;

function apiKeyMiddleware(req, res, next) {
  const requestApiKey = req.header('x-api-key');
  if (requestApiKey !== apiKey) {
    return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
  }
  next();
}

module.exports = apiKeyMiddleware;
