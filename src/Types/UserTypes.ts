export type User = {
    _id: string;
    name: string;
    middleName: string;
    email: string;
    login: string;
    password: string;
    assignments: string;
    phone: string;
    role: string;
    avatar: string;
    token: string;
    isApproved: boolean;
}

export type AuthTypes = {
    user: User | null;
    signIn: (login: string, password: string) => Promise<boolean>;
    signOut: () => void;
    onlineUsers: never[];
    socket: React.MutableRefObject<any>;
    setLoadChat: React.Dispatch<React.SetStateAction<boolean>>;
    loadChat: boolean;
}