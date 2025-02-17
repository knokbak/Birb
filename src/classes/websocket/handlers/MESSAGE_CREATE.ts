/*
 * Copyright (c) 2021, knokbak and contributors.
 *
 * The Birb.JS Project: https://birb.js.org
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Message from "../../Message";
import Websocket from "../Websocket";

export default async function MESSAGE_CREATE (ws: Websocket, data: any): Promise<void> {
    ws.client.debug(`received message create: ${data.id}`);

    let message = (await (new Message(ws.client, data))['waitForAuthor']())['set']();
    ws.client.emit('message', message);
}
