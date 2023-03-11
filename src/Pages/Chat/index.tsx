import { useContext, useState, useEffect } from 'react';
import * as C from './styles';
import { AuthContext } from '../../Contexts/Auth';
import { ChatType } from '../../Types/ChatType';
import SearchIcon from '@mui/icons-material/Search';
import ChatListItem from './ChatListItem';
import { useApi } from '../../Hooks/useApi';
import ChatBox from './ChatBox';

const Chat = () => {
  const api = useApi();
  const { socket, onlineUsers, user } = useContext(AuthContext)
  const [chats, setChats] = useState<ChatType[]>([]);
  const [currentChat, setCurrentChat] = useState<ChatType>(null!);
  const [sendMessage, setSendMessage] = useState<any>(null!);
  const [receivedMessage, setReceivedMessage] = useState<any>(null!);

  const [selectedChat, setSelectedChat] = useState(false);

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
            <div className='area-input'><input type="text" name="search" placeholder="Search..." /> <SearchIcon/></div>
          </C.LeftTop>
          <C.LeftChatsArea>
            {chats.map((chat, index) => (
              <div onClick={() => [setCurrentChat(chat), setSelectedChat(!selectedChat)]} key={index}>
                <ChatListItem data={chat} currentUserId={user?._id as string} online={checkOnlineStatus(chat)}/>
              </div>
            ))}
          </C.LeftChatsArea>
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