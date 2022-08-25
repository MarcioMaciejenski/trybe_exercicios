const validateName = (req, res, next) => {
  const { name } = req.body;
  console.log('name', name);
   if (!name) {
    return res.status(400).json({ message: 'Campo name é obrigatório' });
   }

   if (name.length < 4) {
    return res.status(400).json({ message: 'O campo name deve conter pelo menos 4 caracteres.' });
   }
   next();
};

module.exports = validateName;
