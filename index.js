/*
    Copyright (C) 2021, knokbak and contributors

    https://github.com/knokbak/Birb

    This Source Code Form is subject to the terms of the
    Mozilla Public License, v. 2.0. If a copy of the MPL
    was not distributed with this file, You can obtain one
    at https://mozilla.org/MPL/2.0/.

    This Source Code Form is “Incompatible With Secondary
    Licenses”, as defined by the Mozilla Public License, v.
    2.0.
*/

const Client = require('./classes/Client');
const Intents = require('./classes/Intents');
let client = new Client({
    intents: new Intents(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES),
});
client.login(require('./config.json').token);

(async () => {
    let guild = await client.fetchGuild('867454041084526653');
    console.log(guild);
})();
