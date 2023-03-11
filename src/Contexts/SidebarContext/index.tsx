import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";


type Props = {
    wrapperSidebar: boolean;
    setWrapperSidebar: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext({} as Props)

export const SidebarProvider = ({children}:{children: ReactNode}) => {

    const [wrapperSidebar, setWrapperSidebar] = useState(false);

  return <SidebarContext.Provider value={{ setWrapperSidebar, wrapperSidebar }}>{children}</SidebarContext.Provider>;
}

export const useSidebar = () => {
    const sidebar = useContext(SidebarContext);
    return sidebar;
}