const userModel = require('../model/user')
module.exports.doAddUser = async (payload) => {
    const checkUserExists = await userModel.findOne({

        $or: [
            { phoneNumber: payload.phoneNumber },
            { cardId: payload.cardId }
        ]

    })
    if (checkUserExists) return { status: 400, message: "user already exists" }

    const user = await userModel.create(payload)
    return { status: 200, message: "user added successfully ", data: user }

}