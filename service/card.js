const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const cardStatusModel = require('../model/card');
const userModel = require('../model/user');


const updateCardStatusFromCSV = async (filename, statusType) => {
    try {
        const data = [];

        const filePath = path.join('data', filename);
        await new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (row) => {
                    data.push(row);
                })
                .on('end', () => {
                    resolve();
                })
                .on('error', (error) => {
                    reject(error);
                });
        });

        for (const entry of data) {
            const { CardID } = entry;
            await cardStatusModel.findOneAndUpdate(
                { cardId: CardID },
                { status: statusType },
                { upsert: true, new: true }
            );
        }

        console.log(`${statusType} data processed successfully.`);

    } catch (error) {
        console.error(`Error processing ${statusType} data:`, error);
    }
};

module.exports.doGetCardStatus = async (query) => {
    try {

        await updateCardStatusFromCSV('Sample Card Status Info - Pickup.csv', 'Pickup');
        await updateCardStatusFromCSV('Sample Card Status Info - Delivery exceptions.csv', 'Delivery exceptions');
        await updateCardStatusFromCSV('Sample Card Status Info - Delivered.csv', 'Delivered');
        await updateCardStatusFromCSV('Sample Card Status Info - Returned.csv', 'Returned');
        const userDetails = await userModel.findOne(query)
        const cardDetails = await cardStatusModel.findOne({ cardId: userDetails.cardId })
        if (!cardDetails) return { status: 400, message: "no card exists with this id" }
        return { status: 200, message: "successfully fetched status ", data: cardDetails.status }
    } catch (error) {
        console.log(error)
        return { status: 500, message: "Something went wrong.Try again later!", data: cardDetails.status }

    }

}