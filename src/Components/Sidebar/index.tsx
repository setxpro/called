import React, { useContext } from 'react';

import * as C from './styles';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import GroupIcon from '@mui/icons-material/Group';
import BugReportIcon from '@mui/icons-material/BugReport';
import LogoutIcon from '@mui/icons-material/Logout';
import TableViewIcon from '@mui/icons-material/TableView';
import RuleIcon from '@mui/icons-material/Rule';
import { useSidebar } from '../../Contexts/SidebarContext';
import { Link } from 'react-router-dom';
import useRootMenu from '../../Hooks/useRootMenu';
import { AuthContext } from '../../Contexts/Auth';

const Sidebar: React.FC = () => {

    const { wrapperSidebar, setWrapperSidebar } = useSidebar()
    const { state, dispatch } = useRootMenu()
    const { signOut } = useContext(AuthContext)

    return (
        <>
            <C.Container wrapperSidebar={wrapperSidebar}>
                <C.SidebarTop wrapperSidebar={wrapperSidebar}>
                    <div/> 
                    <h2>BAGAGGIO</h2>
                    {!wrapperSidebar ? <MenuIcon onClick={() => setWrapperSidebar(!wrapperSidebar)} className='bars'/>  : <MenuOpenIcon onClick={() => setWrapperSidebar(!wrapperSidebar)}/>}
                </C.SidebarTop>
                <C.MenuArea wrapperSidebar={wrapperSidebar}>
                    <Link to="/" onClick={() => dispatch({type: 'home'})} className={state.home ? 'active' : ''}><HomeIcon/> <span>Home</span></Link>
                    <Link to="/usuarios" onClick={() => dispatch({type: 'users'})} className={state.users ? 'active' : ''}><GroupIcon/> <span>Users</span></Link>
                    <Link to="/sla" onClick={() => dispatch({type: 'sla'})} className={state.sla ? 'active' : ''}><RuleIcon/> <span>SLA</span></Link>
                    <Link to="/chat" onClick={() => dispatch({type: 'chat'})} className={state.chat ? 'active' : ''}><ForumIcon/> <span>Chat</span></Link>
                    <Link to="/chamados" onClick={() => dispatch({type: 'chamados'})} className={state.chamados ? 'active' : ''}><SpeakerNotesIcon/> <span>Chamados</span></Link>
                    <Link to="/reports" onClick={() => dispatch({type: 'reports'})} className={state.reports ? 'active' : ''}><TableViewIcon/> <span>Relatórios</span></Link>
                    <Link to="/support" onClick={() => dispatch({type: 'support'})} className={state.support ? 'active' : ''}><BugReportIcon/> <span>Repport</span></Link>
                    <Link to="#" onClick={() => signOut()}><LogoutIcon/> <span>Logout</span></Link>
                </C.MenuArea>
               
            </C.Container>
            <C.ContentBlur wrapperSidebar={wrapperSidebar} onClick={() => setWrapperSidebar(!wrapperSidebar)}>

            </C.ContentBlur>
        </>
      );
}

export default Sidebar;