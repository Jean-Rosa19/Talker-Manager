function emailValidation(req, res, next) {
    const { email } = req.body;

    const validaEmail = /\S+@\S+\.\S+/;

    if (!email) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }

    if (!validaEmail.test(email)) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }

    return next();    
}   

module.exports = emailValidation;