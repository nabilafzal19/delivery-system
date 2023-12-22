const _userService = require('../service/user')
module.exports.addUser = async (req, res) => {
    const result = await _userService.doAddUser(req.body)
    if (result.status == 200)
        return res.json({ status: result.status, message: result.message, response: result.data })
    else if (result.status == 400)
        return res.json({ status: result.status, message: result.message })
    else if (result.status == 500)
        return res.json({ status: result.status, message: result.message })
}
