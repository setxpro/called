import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";


type Props = {
    wrapperSidebar: boolean;
    setWrapperSidebar: Dispatch<SetStateAction<boolean>>;
    wrapperSidebarSettings: boolean;
    wrapperSettings: () => void;
}

export const SidebarContext = createContext({} as Props)

export const SidebarProvider = ({children}:{children: ReactNode}) => {

    const [wrapperSidebar, setWrapperSidebar] = useState(false);
    const [wrapperSidebarSettings, setWrapperSidebarSettings] = useState(false);

    const wrapperSettings = () => setWrapperSidebarSettings(!wrapperSidebarSettings);

  return <SidebarContext.Provider value={{ setWrapperSidebar, wrapperSidebar, wrapperSidebarSettings, wrapperSettings }}>{children}</SidebarContext.Provider>;
}

export const useSidebar = () => {
    const sidebar = useContext(SidebarContext);
    return sidebar;
}