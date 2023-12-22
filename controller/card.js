const _services = require('../service/card')

module.exports.getCardStatus = async (req, res) => {
    const { phoneNumber, cardId } = req.query;

    if (!phoneNumber && !cardId) {
        return res.status(400).json({ error: 'Please provide phoneNumber or cardId.' });
    }

    let query;
    if (phoneNumber) {
        query = { phoneNumber };
    } else {
        query = { cardId };
    }
    const result = await _services.doGetCardStatus(query)
    if (result.status == 200)
        return res.json({ status: result.status, message: result.message, response: result.data })
    else if (result.status == 400)
        return res.json({ status: result.status, message: result.message })
    else if (result.status == 500)
        return res.json({ status: result.status, message: result.message })

}