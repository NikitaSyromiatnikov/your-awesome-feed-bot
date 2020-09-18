const path = require('path');

const { Database } = require('sqlite3');
const { Config } = require('../config');

const database = new Database(path.resolve(__dirname, '..', 'data', 'bot.db'), function (error) {
    if (error) {
        throw new Error(error);
    } else {
        prepareDatabase();
    }
});

function prepareDatabase() {
    let commands = Config.database.commands;

    for (let i = 0; i < commands.length; i++) {
        database.run(commands[i], function (error) {
            if (error)
                throw new Error(error);
        });
    }
}

async function getUserChannels(user_id) {
    return new Promise(function (resolve, reject) {
        database.all(`SELECT * FROM "channels" WHERE channel_owner = :id`, {
            ':id': user_id
        }, function (error, rows) {
            if (error)
                reject(error);

            resolve(rows);
        });
    });
}

module.exports = { getUserChannels };