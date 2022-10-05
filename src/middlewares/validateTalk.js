function validateTalk(talkValue, res, value) {
    if (talkValue === undefined) {
      return res.status(400).json({ message: `O campo "${value}" é obrigatório` });
    }
  }
  
  module.exports = (req, res, next) => {
    const { talk } = req.body;
  
    return (
      validateTalk(talk, res, 'talk')
      || validateTalk(talk.watchedAt, res, 'watchedAt')
      || validateTalk(talk.rate, res, 'rate')
      || next()
    );
  };