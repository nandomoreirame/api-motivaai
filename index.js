const data = require('./data')

module.exports = (req, res) => {
  if (req.params.length > 0) {
    const _d = data[req.params[0]]
    if (_d) {
      res.send({ data: _d })
    } else {
      res.sendStatus(404)
    }
  } else {
    res.send({ data })
  }
}
