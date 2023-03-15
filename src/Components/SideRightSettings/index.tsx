import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles'
import CloseIcon from '@mui/icons-material/Close';
import useRootPageSettings from '../../Hooks/useRootPageSettings';
import AlterPassword from '../../Pages/Settings/AlterPassword';
import EditUser from '../../Pages/Settings/EditUser';
import ToggleTheme from '../../Pages/Settings/ToggleTheme';
import { useSidebar } from '../../Contexts/SidebarContext';
import { useContext } from 'react';
import { GetThemeContext } from '../../Contexts/Theme';


const SideRightSettings = () => {

    const { dispatch, state } = useRootPageSettings()
    const { wrapperSettings, wrapperSidebarSettings} = useSidebar()
    
  return (
    <React.Fragment>
        <C.Container wrapper={wrapperSidebarSettings}>
        <C.TitleArea>
            <CloseIcon onClick={wrapperSettings}/>
            <h2>Configurações</h2>
            <div/>
        </C.TitleArea>
        <C.CurrentTopMenus>
            <Link to="#" onClick={() => dispatch({type: 'theme'})} className={state.theme ? 'active' : ''}>Trocar o tema</Link>
            <Link to="#" onClick={() => dispatch({type: 'avatar'})} className={state.avatar ? 'active' : ''}>Alterar imagem</Link>
            <Link to="#" onClick={() => dispatch({type: 'users'})} className={state.users ? 'active' : ''}>Alterar usuário</Link>
            <Link to="#" onClick={() => dispatch({type: 'password'})} className={state.password ? 'active' : ''}>Alterar senha</Link>
        </C.CurrentTopMenus>
        <C.ContentPages>
            {state.theme && <ToggleTheme/>}
            {state.users && <EditUser/>}
            {state.password && <AlterPassword/>}
        </C.ContentPages>
    </C.Container>
    <C.ContainerBlur wrapper={wrapperSidebarSettings} onClick={wrapperSettings}></C.ContainerBlur>
    </React.Fragment>
  );
}

export default SideRightSettings;