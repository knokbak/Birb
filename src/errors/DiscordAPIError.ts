/*
 * Copyright (c) 2021, knokbak and contributors.
 *
 * The Birb.JS Project: https://birb.js.org
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import BirbJSError from './BirbJSError';

export default class DiscordAPIError extends BirbJSError {
    
    constructor (message: string) {
        super('DiscordAPIError', message, 'https://birb.js.org/errors/DiscordAPIError');
    }

}
