import { useContext, useState, useEffect } from 'react';
import * as C from './styles';
import { AuthContext } from '../../Contexts/Auth';
import { ChatType } from '../../Types/ChatType';
import SearchIcon from '@mui/icons-material/Search';
import ChatListItem from './ChatListItem';
import { useApi } from '../../Hooks/useApi';
import ChatBox from './ChatBox';
import Contact from './Contacts';
import axios from 'axios';

const Chat = () => {
  const api = useApi();
  const { socket, onlineUsers, user, loadChat, setLoadChat } = useContext(AuthContext)
  const [chats, setChats] = useState<ChatType[]>([]);
  const [currentChat, setCurrentChat] = useState<ChatType>(null!);
  const [sendMessage, setSendMessage] = useState<any>(null!);
  const [receivedMessage, setReceivedMessage] = useState<any>(null!);
  const [selectedChat, setSelectedChat] = useState(false);

  const [search, setSearch] = useState("");


  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) socket.current.emit("send-message", sendMessage);
  }, [sendMessage]);

  // Get the message from socket server
  useEffect(() => {
    socket.current.on("receive-message", (data: any) => {
      setReceivedMessage(data);
    });
  }, []);


  // Cheack users online
  const checkOnlineStatus = (chat: any) => {
    const chatMembers = chat.members.find(
      (member: any) => member !== user?._id
    );
    const online = onlineUsers.find((user: any) => user.userId === chatMembers);
    return online ? true : false;
  };



  const createChat = async (id: string) => {
    const { data } = await axios.post('http://localhost:3333/api/chat', {
        senderId: user?._id,
        receiverId: id,
    })
    setSearch("")
    // load
    const lChats = await api.userChats(`${user?._id}`);
    setChats(lChats);

    return data;
  }

   // Get the chat in chat section
   useEffect(() => {
    (async () => {
      try {
        const data = await api.userChats(`${user?._id}`);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user?._id]);

  const removeMessage = (id:string) => {
    socket.current.emit('remove-message', id);
  }

  return (
    <C.Container>
        <C.LeftSide selectedChat={selectedChat}>
          <C.LeftTop>
            <img src={user?.avatar} alt="avatar"/>
            <div className='area-input'><input type="text" name="search" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)}/> <SearchIcon/></div>
          </C.LeftTop>
          <C.LeftChatsArea>
          <C.TitleContacts>
              <h6>Chats</h6>
            </C.TitleContacts>
            {chats.map((chat, index) => (
                <div onClick={() => [setCurrentChat(chat), setSelectedChat(!selectedChat)]} key={index}>
                  <ChatListItem data={chat} currentUserId={user?._id as string} online={checkOnlineStatus(chat)}/>
                </div>
            ))}
          </C.LeftChatsArea>
          <C.ListContact>
            <C.TitleChatList>
              <h6>Contatos</h6>
            </C.TitleChatList>
              <Contact createChat={createChat} search={search}/>
          </C.ListContact>
        </C.LeftSide>
        <C.RightSide selectedChat={selectedChat}>
          <ChatBox
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            chat={currentChat}
            currentUser={user?._id as string}
            setSendMessage={setSendMessage}
            receivedMessage={receivedMessage}
            removeMessage={removeMessage}
          />
        </C.RightSide>
    </C.Container>
  );
}

export default Chat;