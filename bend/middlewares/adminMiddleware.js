const jwt = require('jsonwebtoken');

const authorizedAdmin = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    
    // Check if the authorization header is provided
    if (!authHeader) {
      return res.status(401).json({ auth: false, message: 'Authorization header missing.' });
    }

    const adminToken = authHeader.split(' ')[1];

    jwt.verify(adminToken, "fsd", async (err, decodedToken) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ auth: false, message: 'UnAuthorized.' });
      }

      console.log(req.body);
      req.body.adminId = decodedToken.id; // Attach the admin ID to the request body
      next();
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ auth: false, message: 'Admin UnAuthorized.' });
  }
};

module.exports = authorizedAdmin;
