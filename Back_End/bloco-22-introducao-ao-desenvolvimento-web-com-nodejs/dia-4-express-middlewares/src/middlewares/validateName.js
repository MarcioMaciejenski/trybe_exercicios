const validateName = (req, res, next) => {
  const { name } = req.body;
   if (!name) {
    return res.status(400).json({ message: 'Campo name é obrigatório' });
   }

   if (name.lenght < 4) {
    return res.status(400).json({ message: 'O campo name deve conter mais de 4 caracteres.' });
   }
   next();
};

module.exports = validateName;
