/*
 * Copyright (c) 2021, knokbak and contributors.
 *
 * The Birb.JS Project: https://birb.js.org
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import EmbedChild from './EmbedChild';

export default class EmbedAuthor extends EmbedChild {

    name: string = null!;
    url: string | null = null;
    iconUrl: string | null = null;

    constructor (name: string, url?: string, iconUrl?: string) {
        super();
        this.name = name;
        this.url = url ?? null;
        this.iconUrl = iconUrl ?? null;
    }

    setName (name: string) {
        this.name = name;
    }

    setUrl (url: string) {
        this.url = url;
    }

    setIconUrl (iconUrl: string) {
        this.iconUrl = iconUrl;
    }

    removeUrl () {
        this.url = null;
    }

    removeIcon () {
        this.iconUrl = null;
    }

    /**
     * Format this class into an API-acceptable object.
     */
    format () {
        return {
            name: this.name,
            url: this.url,
            icon_url: this.iconUrl
        };
    }

}
