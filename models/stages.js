const Scene = require('telegraf/scenes/base');
const Stage = require('telegraf/stage');

const Database = require('./database');

const Stages = new Stage();
const MainMenuScene = new Scene('main-menu');
const NewPostScene = new Scene('new-post');
const AddChannelScene = new Scene('add-channel');

MainMenuScene.enter(async function (ctx) {
    ctx.reply(ctx.update.message.text);
});

Stages.register(MainMenuScene, NewPostScene);

module.exports = { Stages };