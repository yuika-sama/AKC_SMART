import jwt from 'jsonwebtoken';
const requestLimit = {
  count: 0,
  lastRequestTime: Date.now(),
};

const MAX_REQUESTS = 15;
const TIME_FRAME = 10000;

const staffRoleMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Lấy token từ header

  if (!token) {
    return res.status(401).json({ message: 'Access token is required.' });
  }

  const currentTime = Date.now();

  if (currentTime - requestLimit.lastRequestTime > TIME_FRAME) {
    requestLimit.count = 1;
    requestLimit.lastRequestTime = currentTime;
  } else {
    requestLimit.count += 1;
  }

  if (requestLimit.count > MAX_REQUESTS) {
    return res.status(429).json({ message: 'Too many requests. Please try again later.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }

    if (decoded.role !== 'staff' || decoded.role !== 'admin' || decoded.role !== 'owner') {
      return res.status(403).json({ message: 'Forbidden: You do not have permission to perform this action.' });
    }

    req.userId = decoded.id;
    next();
  });
};

export default staffRoleMiddleware;
