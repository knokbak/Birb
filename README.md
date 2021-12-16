[![huntr](https://cdn.huntr.dev/huntr_security_badge_mono.svg)](https://huntr.dev)
[![Known Vulnerabilities](https://snyk.io/test/github/BirbJS/Birb/badge.svg)](https://snyk.io/test/github/BirbJS/Birb)

[![NPM](https://nodei.co/npm/birb.png)](https://nodei.co/npm/birb/)

## About
Birb.js is a simple, yet powerful [Discord API](https://discord.dev) wrapper for [Node.js](https://nodejs.org).  
With just a few lines of code, you can get a Discord bot connected to the API.  
**Birb.js is still in development. It is highly recommended you DO NOT use it until it’s ready.**

## Links
[Documentation](https://birb.js.org/)    
[GitHub](https://github.com/BirbJS/Birb)    
[NPM](https://npmjs.com/package/birb)
[Discord API Server](https://discord.gg/invite/discord-developers)

## Installation
**Node.js v14.0.0+ is required.**
```sh-session
npm install birb
yarn add birb
pnpm add birb
```

### Optional Addons
Birb.js comes with a few optional addons made by our team.  
Please view their documentation for more information on how to use them.  
**None of these libraries are installed by default** and all of them are completely optional.

- [@birbjs/framework](https://birb.js.org/addons/framework) is a framework to make the development of Discord bots easier and more efficient. It includes an in-built command handler, permission system, event manager and built-in slash command support (`npm install @birbjs/framework`)
- [@birbjs/sharding](https://birb.js.org/addons/sharding) is a sharding utility that makes it easier to shard your Discord bot (`npm install @birbjs/sharding`)
- [@birbjs/cluster](https://birb.js.org/addons/cluster) is a clustering utility that is built for larger Discord bots who need to split shards across multiple seperate servers (`npm install @birbjs/cluster`)
- [@birbjs/devtools](https://birb.js.org/addons/devtools) is a debugging tool for Birb.js developers, contributors and maintainers. (`npm install @birbjs/devtools --save-dev`)

### Optional Dependencies
These dependencies aren't required, but will allow Birb.js to do things more efficiently.

- [erlpack](https://npmjs.com/package/erlpack) for faster (de)serialization of websocket data (`npm install erlpack`)
- [zlib-sync](https://npmjs.com/package/zlib-sync) for websocket compression (`npm install zlib-sync`)
- [bufferutil](https://npmjs.com/package/bufferutil) quicker (un)masking of websocket data and packets (`npm install bufferutil`)
- [utf-8-validate](https://npmjs.com/package/utf-8-validate) more efficient websocket data validation (`npm install utf-8-validate`)

**Most of these dependencies require [node-gyp](https://github.com/nodejs/node-gyp) which some users may struggle to install (mostly due to very unhelpful errors).**

If you're on Windows, run `npm install windows-build-tools --global` in an **administrator** command prompt.  
If you're on Ubuntu, run `sudo apt install build-tools`.  

*Remember that these are optional dependencies. If you're struggling, feel free to ignore them. Birb.js will only use them if they are available.**

## Example
```js
const { Client, Intents } = require("birb");
const client = new Client({
    intents: new Intents(Intents.FLAGS.ALL),
});

client.listen("ready", () => {
    console.log("Connected to Discord!");
});

client.connect("your-bot-token-here");
```

## Credits

### Main Contributors
[@knokbak](https://github.com/knokbak)*PL, [@axisiscool](https://github.com/axisiscool)

### Dependencies
[ws](https://npmjs.com/package/ws), [petitio](https://npmjs.com/package/petitio), [crypit](https://npmjs.com/package/crypit), [@sapphire/snowflake](https://npmjs.com/package/@sapphire/snowflake), [erlpack](https://npmjs.com/package/erlpack), [bufferutil](https://npmjs.com/package/bufferutil), [utf-8-validate](https://npmjs.com/package/utf-8-validate), [zlib-sync](https://npmjs.com/package/zlib-sync)

### Dev Dependencies
[typescript](https://npmjs.com/package/typescript), [copyfiles](https://npmjs.com/package/copyfiles), [@types/node](https://npmjs.com/package/@types/node), [@types/ws](https://npmjs.com/package/@types/ws)

## Licensing
Birb.js is currently licensed under the [Mozilla Public License 2.0](https://github.com/BirbJS/Birb/blob/main/LICENSE). You're free to use it as a library in both personal and commercial projects, free-of-charge.
