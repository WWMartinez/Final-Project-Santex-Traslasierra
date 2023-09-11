const jwt = require('jsonwebtoken');

const validateToken = (req: any, res: any, next: any) => {
  const headerToken = req.headers['authorization']

  if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
    // tiene Token
    try {
      const bearerToken = headerToken.slice(7);
      jwt.verify(bearerToken, process.env.SECRET_KEY || 'contraseña123');
      next();
    } catch (err) { 
      res.status(401).json({    
        msg: 'Token no valido'
      })
    }
  } else {
    res.status(401).json({
      msg: 'Acceeso denegado'
    })
  };
};

export default validateToken;
