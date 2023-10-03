const jwt = require("jsonwebtoken");
const secret = require("../middleware/jwtStrategy.middleware");
const { userProvider } = require("../providers");

const authAdmin = async (req, res) => {
  const { username, password } = req.body;
  // Verificación de que los datos del usuario son correctos y devuelve un token ADMIN role
  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ username: username, role: "ADMIN" }, secret);
    res.json({ token });
  } else {
    // si != ADMIN, se llama al userProvider para validar credenciales en la DB
    const dbUser = await userProvider.validateUser(username, password);
    if (dbUser) {
      const token = jwt.sign({ username: dbUser.username, role: "USER" }, secret);
      res.json({ token });
    } else {
      res.status(401).json({ message: "Authentification fail" });
    }
  }
};

module.exports = authAdmin;
