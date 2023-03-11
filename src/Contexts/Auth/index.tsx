import { ReactNode, createContext, useState, useEffect, useRef } from 'react';
import { AuthTypes, User } from '../../Types/UserTypes';
import { useApi } from '../../Hooks/useApi';
import { toast } from 'react-toastify';
import { io } from "socket.io-client";

export const AuthContext = createContext<AuthTypes>(null!);

const AuthProvider = ({children}:{children:ReactNode}) => {
    const api = useApi();
    const [user, setUser] = useState<User | null>(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    const socket: React.MutableRefObject<any> = useRef();
    
    const signIn = async (login: string, password: string) => {

        try {
            const data = await api.signIgn(login, password)

            if(data.user) {
                setUser(data.user)
                stUserInStorageData(data.user)
                toast.success(`Seja bem-vindo(a), ${data.user.name} ${data.user.middleName}`)
                return true;
            }

            return false

        } catch (error:any) {
            toast.error(error.response.data.msg); // GET ERROR USER NOT FOUND
            return false;
        }

    }

    const stUserInStorageData = (auth: string) => {
        const storage = localStorage.setItem("auth-user", JSON.stringify(auth));
        return storage;
    }

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("auth-user");
    }

    useEffect(() => {
        const isUuserLogged = localStorage.getItem("auth-user");

        if(isUuserLogged) {
            const foundUser = JSON.parse(isUuserLogged);
            setUser(foundUser);
        }

    }, [])

    useEffect(() => {
      socket.current = io("http://localhost:3333");
      socket.current.emit("new-user-add", user?._id);
      socket.current.on("get-users", (users: any) => setOnlineUsers(users));
    }, [user]);

    // Cheack users online

    return (
        <AuthContext.Provider value={{user, signIn, signOut, onlineUsers, socket}}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;