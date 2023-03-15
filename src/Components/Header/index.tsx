import React, { useState, useEffect } from 'react';

import * as C from './styles';
import { useSidebar } from '../../Contexts/SidebarContext';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/Auth';
const Header: React.FC = () => {

    const { wrapperSidebar, setWrapperSidebar, wrapperSettings } = useSidebar()
    const { user } = useContext(AuthContext)
    const [userImageUri, setUserImageUri] = useState("");
    const addDefaultSrc = (ev: any) => {
        setUserImageUri(
          `https://ui-avatars.com/api/?name=${user?.name}+${user?.middleName}`
        );
      };

    useEffect(() => {

        if (userImageUri && userImageUri === `https://ui-avatars.com/api/?name=Patrick+Anjos`) {
            setUserImageUri(`https://ui-avatars.com/api/?name=Patrick+Anjos`)
        }
        setUserImageUri(`${user?.avatar}`)

    }, [])

    return (
        <C.Container wrapperSidebar={wrapperSidebar}>
           <C.LeftContainer>
            <MenuIcon onClick={() => setWrapperSidebar(!wrapperSidebar)}/>
           </C.LeftContainer>
            <C.RightContainer>
                <C.NotifyArea><NotificationsIcon/></C.NotifyArea>
                <C.ContentNameAndAvatar onClick={wrapperSettings}>
                    <C.NameArea>
                        <h2>{user?.name} {user?.middleName}</h2>
                        <h6>{user?.role}</h6>
                    </C.NameArea>
                    <C.AvatarArea>
                        <img src={userImageUri} alt="avatar" onError={addDefaultSrc}/>
                    </C.AvatarArea>
                </C.ContentNameAndAvatar>
            </C.RightContainer>
        </C.Container>
      );
}

export default Header;