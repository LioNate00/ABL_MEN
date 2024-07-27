const rateLimit = require('express-rate-limit');

// Apply rate limiting to all requests
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 requests per `window` (here, per minute)
  message: 'Too many requests from this IP, please try again after a minute'
});

app.use(limiter);
