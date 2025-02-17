/*
 * Copyright (c) 2021, knokbak and contributors.
 *
 * The Birb.JS Project: https://birb.js.org
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Client from './Client';
import PermissionOverwrite from './PermissionOverwrite';
import Role from './Role';

export default class RolePermissionOverwrite extends PermissionOverwrite {

    role: Role = null!;

    constructor (client: Client, role: Role, allow: number = 0, deny: number = 0) {
        super(client, allow, deny);
        this.role = role;
    }

}
