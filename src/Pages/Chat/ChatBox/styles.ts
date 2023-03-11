import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const RightTop = styled.div`
  height: 70px;
  border-bottom: 1px solid #3333;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 1rem;

  .close-btn {

    display: none;
    
    @media (max-width: 890px) {
      display: inline;
      cursor: pointer;
      font-size: 2em;
    }

  }

  img {
    width: 50px;
    border-radius: 50%;
  }
`;

export const RightSide = styled.div`
  flex: 2;

  display: flex;
  flex-direction: column;
`;

export const RightSideTop = styled.div`
  height: 70px;
  background-color: var(--color-secondary);
  border-bottom: 1px solid #555;

  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0 10px;
`;
export const RightChatArea = styled.div<{ mod: boolean }>`
  flex: 1;
  border-right: 1px solid #555;
  padding: 10px;
  background: #363a50;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => (props.mod ? "#555" : "transparent")};
    border-radius: 3px;
  }
`;

export const RightBottomArea = styled.div`
  height: 50px;
  background-color: var(--color-secondary);
  border-top: 1px solid #555;

  .chatWindow--emojiarea {
    height: 200px;
    overflow-y: hidden;
    transition: all ease 0.3s;

    position: absolute;
    bottom: 60px;
  }

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0 10px;
`;

///
export const ChatInactiveContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .MuiSvgIcon-fontSizeMedium {
    font-size: 4em;
    color: #7367f0;
    cursor: pointer;
  }
`;
export const IconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  background-color: var(--color-secondary);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 1px 1px 10px #000;
`;
export const TextArea = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 10px #000;
  background-color: var(--color-secondary);
  padding: 10px;
  cursor: pointer;

  h3 {
    color: #7367f0;
    font-size: 1.5em;
    font-weight: 500;
  }

  @media (max-width: 890px) {
    display: none;
  }
`;

export const ChatBoxArea = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatAreaItem = styled.div<{ userSend: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.userSend ? "flex-end" : "flex-start")};
`;

export const ChatItem = styled.div<{ userSend: boolean }>`
  background: ${(props) => (props.userSend ? "#7367F0" : "#2F3349")};
  max-width: 500px;
  padding: 0.5rem;
  display: flex;
  gap: 10px;
  border-radius: 15px;
  position: relative;
  margin-bottom: 10px;

  .message {
    color: #f8f7fe;
    font-size: 1.2em;

    img {
      width: 400px;

      @media (max-width: 428px) {
        width: 200px;
      }
    }
  }

  .date {
    color: ${(props) => (props.userSend ? "#FFF" : "#717488")};
    font-size: 0.7em;
    text-align: end;
  }
`;

export const AreaRightChatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AreaAvatarUserChatItem = styled.div`
  img {
    width: 30px;
    border-radius: 50%;
  }
`;

export const ChatInputArea = styled.div`
  height: 60px;
  border-top: 1px solid #3333;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0 10px;

  input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1.3em;
    outline: none;
    border: 1px solid #3333;
    border-radius: 8px;
  }
  .area-add-image {
    position: relative;
    cursor: pointer;

    .photo {
      font-size: 2em;
      color: #7367f0;
    }
    .file {
      width: 30px;
      position: absolute;
      opacity: 0;
      right: 0;
      cursor: pointer;
    }
  }
  button {
    padding: 10px 1rem;
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: #7367f0;
    color: #eee;
    font-weight: bold;
    cursor: pointer;

    .MuiSvgIcon-fontSizeMedium {
      color: #eee;
    }
  }
`;
