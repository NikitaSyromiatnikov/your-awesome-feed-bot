const Config = {
    bot: {
        owner: 298784500,
        link: 'https://t.me/yourawesomefeed_bot',
        token: '1300084390:AAH4wpENJz73ExbecgBaXVgyIvk0DcdgSww',
        username: 'yourawesomefeed_bot'
    },
    database: {
        commands: [
            `CREATE TABLE IF NOT EXISTS "channels" (
                channel_owner   INTEGER, 
                channel_username    TEXT    
            )`
        ]
    }
};

module.exports = { Config };