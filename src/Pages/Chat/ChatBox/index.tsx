import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  SetStateAction,
} from "react";
import * as C from "./styles";
import MessageIcon from "@mui/icons-material/Message";
import axios from "axios";
import { ChatType } from "../../../Types/ChatType";
import { useApi } from "../../../Hooks/useApi";
import { User } from "../../../Types/UserTypes";
import { MessageType } from "../../../Types/MessageTypes";
import TimeAgo from "timeago-react";
import { AuthContext } from "../../../Contexts/Auth";

import PhotoIcon from '@mui/icons-material/Photo';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

interface Props {
  chat: ChatType;
  currentUser: string;
  setSendMessage: React.Dispatch<any>;
  receivedMessage: any;
  selectedChat: boolean;
  setSelectedChat: React.Dispatch<SetStateAction<boolean>>;
  removeMessage: (id: string) => void;
}

const ChatBox = ({
  chat,
  currentUser,
  setSendMessage,
  receivedMessage,
  selectedChat,
  setSelectedChat,
  removeMessage
}: Props) => {
  const { user } = useContext(AuthContext);
  const scroll: any = useRef();
  const api = useApi();

  const [userData, setUserData] = useState<User>(null!);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [text, setText] = useState("");

  // Image

  const [image, setImage] = useState<File | null>(null);
  const [imageSelected, setImageSelected] = useState("");

  // Convert Image to BASE64
  function readB64Img(file: File, cb: (prop: string | ArrayBuffer | null) => void) {
    var reader = new FileReader();

    reader.onloadend = (e) => {
      cb(reader.result);
    };

    reader.readAsDataURL(file);
    // Convert to base64
  }

  const convertImage = () => {
    readB64Img(image as File, (base64) => setImageSelected(`${base64}`))
  }

  // END IMAGE


  // Fetching data for header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);

    if (chat !== null) {
      (async () => {
        try {
          const data = await api.getUser(`${userId}`);
          return setUserData(data.user);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [chat, currentUser]);

  // fetchin data for messages
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const data = await api.getMessages(`${chat._id}`);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessage();
  }, [chat]);

  const handleInputKeyUp = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | any
  ) => {
    if (e.keyCode === 13) {
      handleSendClick(e);
    }
  };

  const handleSendClick = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | any
  ) => {
    e.preventDefault();

    let senderId = currentUser;
    let chatId = chat._id;

    const receiverId = chat.members.find((id) => id !== senderId);
    // send message to socket server

    // Send message  to database
    try {
      const data = await api.addMessage(senderId, text, chatId);
      setMessages([...messages, data]);
      setSendMessage({ ...messages, data, receiverId });

      console.log("Vai p/Socket", { ...messages, receiverId });
      console.log("Client ", [...messages, data]);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (image) {
      convertImage()
    }

  }, [image])

  const sendImage = async (e: React.MouseEvent<HTMLDivElement, MouseEvent> | any) => {
    e.preventDefault();
    let senderId = currentUser;
    let chatId = chat._id;

    const receiverId = chat.members.find((id) => id !== senderId);
    // send message to socket server

    // Send message  to database
    try {
      const data = await api.addMessage(senderId, `${imageSelected}`, chatId);
      setMessages([...messages, data]);
      setSendMessage({ ...messages, data, receiverId });

      setImageSelected("");
      setImage(null);
    } catch (error) {
      console.log(error);
    }
  }

  // Receive Message from parent component
  useEffect(() => {
    if (
      receivedMessage &&
      Object.values(receivedMessage).filter((x: any) => x.chatId == chat?._id)
        .length > 0
    ) {
      Object.keys(receivedMessage).forEach((x: any) => {
        if (x == "data") {
          const rc = receivedMessage[x];

          console.log("Message -> ", rc);
          setMessages([...messages, rc]);
        }
      });
    }
  }, [receivedMessage]);

  // Always scroll to last nessage
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!chat) {
    return (
      <C.ChatInactiveContainer>
        <C.IconArea>
          <MessageIcon />
        </C.IconArea>
        <C.TextArea>
          <h3>Tap on a Chat to start Conversation</h3>
        </C.TextArea>
      </C.ChatInactiveContainer>
    );
  }
  return (
    <C.Container>
      <C.RightTop>
        {selectedChat && <CloseIcon className="close-btn" onClick={() => setSelectedChat(false)}/>}
        <img src={userData?.avatar} alt="avatar" />
        <h3>
          {userData?.name} {userData?.middleName}
        </h3>
      </C.RightTop>
      <C.ChatBoxArea>
        {messages.map((message, index) => (
          <C.ChatAreaItem
            userSend={message?.senderId === currentUser}
            key={index}
            ref={scroll}
          >
            <C.ChatItem userSend={message?.senderId === currentUser}>
              <C.AreaAvatarUserChatItem>
                {userData?._id === message.senderId && (
                  <img src={userData?.avatar} alt="avatar" />
                )}
              </C.AreaAvatarUserChatItem>

              <C.AreaRightChatItem>
                <span className="message">{message?.text.startsWith("data:image") ? <img src={message.text} alt=""/> : message.text}</span>
                <span className="date">
                  <TimeAgo datetime={message?.createdAt} locale="pt_BR" />
                </span>
                <button onClick={() => removeMessage(message?._id)}>
                  DEL
                </button>
              </C.AreaRightChatItem>

              <C.AreaAvatarUserChatItem>
                {userData?._id !== message.senderId && (
                  <img src={user?.avatar} alt="avatar" />
                )}
              </C.AreaAvatarUserChatItem>
            </C.ChatItem>
          </C.ChatAreaItem>
        ))}
      </C.ChatBoxArea>
      <C.ChatInputArea>
            <input
                type="text"
                placeholder="Digite uma mensagem"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyUp={handleInputKeyUp}
              />
              <div className="area-add-image">
                <PhotoIcon className="photo"/>
                <input
                  type="file"
                  className="file"
                  name="logo"
                  accept="image/*"
                  onChange={e => {
                    let files = e.target.files;
                    if (files?.length) {
                      setImage(files[0])
                    }
                  }} 
              />
              </div>
              {image ? <button onClick={sendImage}>SEND IMAGE</button> : <button>SEND</button>}
      </C.ChatInputArea>
    </C.Container>
  );
};

export default ChatBox;
