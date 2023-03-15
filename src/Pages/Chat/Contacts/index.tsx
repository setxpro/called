import { useEffect, useState, memo, useContext } from 'react';
import * as C from './styles'
import axios from 'axios';
import { User } from '../../../Types/UserTypes';
import { AuthContext } from '../../../Contexts/Auth';

interface Props {
    createChat: (id: string) => Promise<void>;
    search: string;
}

const Contact = ( { createChat, search } : Props) => {
    const { user } = useContext(AuthContext)
    const [contacts, setContacts] = useState<User[]>([]);
    
    useEffect(() => {
        (async() => {
            const { data } = await axios.get('http://localhost:3333/api/user/find-all-users')
            setContacts(data.users)
        })()
    }, [])
    
    const filterContacts = contacts.filter(contact => contact.login.startsWith(search))

    return (
        <>
            {filterContacts.map((contact, index) => {
                if (search)
                    if (contact._id !== user?._id)
                return (
                    <C.Container key={index} onClick={() => createChat(contact._id)}>
                    <C.ContentAvatarArea>
                        <img src={contact.avatar} alt="avatar"/>
                    </C.ContentAvatarArea>
                    <C.NameArea>
                        <h3>{contact.name} {contact.middleName}</h3>
                        <span>Iniciar uma nova conversa</span>
                    </C.NameArea>
                    </C.Container>
                )
            })}
        </>
    );
}

export default memo(Contact);