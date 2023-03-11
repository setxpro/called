import axios from "axios";


const uri = axios.create({
    baseURL: 'http://localhost:3333/api',
})


export const useApi = () => ({
    signIgn: async (login: string, password: string) => {
        const { data } = await uri.post('/auth/signin', { login, password })
        console.log(`ERROR API ${data}`)
        return data;
    },
    forgetPass: async (login: string, email: string) => {
        const { data } = await uri.post('/auth/forget-pass', { login, email })
        console.log(`ERROR API ${data}`)
        return data;
    },

    userChats: async (id: string) => {
        const { data } = await uri.get(`/chat/${id}`)
        return data;
    },
    getUser: async (id: string) => {
        const { data } = await uri.get(`/user/find-one-user/${id}`)
        return data;
    },
    getMessages: async (id: string) => {
        const { data } = await uri.get(`/message/${id}`)
        return data;
    },
    addMessage: async ( senderId: string, text: string, chatId: string ) => {
        const { data } = await uri.post('/message', { 
            senderId,
            text,
            chatId
         })
        return data;
    },
})