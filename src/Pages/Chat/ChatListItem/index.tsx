import React, { useEffect, useState } from 'react';
import * as C from './styles'

import { ChatType } from '../../../Types/ChatType';
import { User } from '../../../Types/UserTypes';
import { useApi } from '../../../Hooks/useApi';

interface Props {
    data: ChatType;
    currentUserId: string;
    online: boolean;
}

const ChatListItem = ( { online, currentUserId, data }: Props) => {

    const [userData, setUserData] = useState<User>(null!)
    const api = useApi();
    
    useEffect(() => {

        const userId = data.members.find((id) => id !== currentUserId);

        (async () => {

            try {
                const data = await api.getUser(`${userId}`)
                return setUserData(data.user);
            } catch (error) {
                console.log(error)
            }
        })()

    }, [currentUserId, data.members])

  return (
    <C.Container>
        <C.ContentAvatarArea online={online}>
            <img src={userData?.avatar} alt="avatar"/>
        </C.ContentAvatarArea>
        <C.NameArea>
            <h3>{userData?.name} {userData?.middleName}</h3>
            {online ? <span>Online</span> : <span>Offline</span>}
        </C.NameArea>
    </C.Container>
  );
}

export default ChatListItem;