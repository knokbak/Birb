/*
 * Copyright (c) 2021, knokbak and contributors.
 *
 * The Birb.JS Project: https://birb.js.org
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import BaseUser from '../classes/BaseUser';
import Channel from '../classes/Channel';
import ClientUser from '../classes/ClientUser';
import Guild from '../classes/Guild';
import Embed from '../classes/message/embed/MessageEmbed';
import MessageAttachment from '../classes/message/MessageAttachment';
import Role from '../classes/Role';
import User from '../classes/User';

export type GuildResolvable = Guild | string;
export type RoleResolvable = Role | string;
export type ChannelResolvable = Channel | string;
export type UserResolvable = User | ClientUser | BaseUser | string;
export type EventResolvable = 'ready' | 'waitingForGuilds' | 'guildAvailable' | 'guildCreate' | 'guildUpdate' | 'message';
export type ActivityStatus = 'online' | 'idle' | 'dnd' | 'invisible';

export type MessageContent = string | Embed | {
    content?: string;
    embeds?: [ Embed ],
    tts?: boolean;
    nonce?: string;
    mentionRepliedUser?: boolean;
    attachments?: [ MessageAttachment ],
    allowedMentions?: {
        parse?: [ 'users' | 'roles' | 'everyone' ];
        users?: [ UserResolvable ];
        roles?: [ RoleResolvable ];
    }
}
