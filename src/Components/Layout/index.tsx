import { ReactNode } from 'react';

import * as C from './styles';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { SidebarProvider, useSidebar } from '../../Contexts/SidebarContext';
import SideRightSettings from '../SideRightSettings';

const Layout = ({children}: {children:ReactNode}) => {

    const { wrapperSidebar } = useSidebar()

  return (
    <C.Container>
        <SidebarProvider>
            <Header/>
            <Sidebar/>
            <C.ContentPages wrapperSidebar={wrapperSidebar}>
              {children}
            </C.ContentPages>
            <SideRightSettings/>
        </SidebarProvider>
    </C.Container>
  );
}

export default Layout;