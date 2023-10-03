const validateToken = require("./validateToken.middleware");
const mdwLogging = require("./logging.middleware");
const authCheck = require('./authCheck.middleware');
const authIsUser = require('./authIsUser.middleware');
const authIsAdmin = require('./authIsAdmin.middleware');

module.exports = {
  validateToken,
  mdwLogging,
  authCheck,
  authIsUser,
  authIsAdmin
};
