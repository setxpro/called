import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

// LEFT SIDE
export const LeftSide = styled.div<{ selectedChat: boolean }>`
  flex: 1;
  border-right: 1px solid ${(props) => props.theme.colors.borders};

  @media (max-width: 890px) {
    border-right: none;
    display: ${(props) => (props.selectedChat ? "none" : "flex")};
  }

  display: flex;
  flex-direction: column;
`;
export const LeftTop = styled.div`
  height: 70px;
  border-bottom: 1px solid ${(props) => props.theme.colors.borders};
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 1rem;

  .MuiSvgIcon-fontSizeMedium {
    font-size: 1.4em;
    transition: 0.5s ease;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }

  img {
    width: 50px;
    border-radius: 50%;
  }

  .area-input {
    flex: 1;
    padding: 0.5rem 0.3rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.borders};
    border-radius: 8px;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      font-size: 1.3em;
      outline: none;
      border: none;
      background: transparent;
      transition: 0.5s ease;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const LeftChatsArea = styled.div`
  flex: 2;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #777;
  }

  @media (max-width: 890px) {
    padding: 10px;
  }
`;
export const ListContact = styled.div`
  overflow-y: scroll;
  height: 180px;

  position: relative;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #777;
  }

  @media (max-width: 890px) {
    padding: 10px;
  }
`;

// RIGHT SIDE
export const RightSide = styled.div<{ selectedChat: boolean }>`
  flex: 3;

  @media (max-width: 890px) {
    display: ${(props) => (props.selectedChat ? "inline" : "none")};
  }
`;
export const RightTop = styled.div`
  height: 70px;
  border-bottom: 1px solid ${(props) => props.theme.colors.borders};
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 50px;
    border-radius: 50%;
  }
`;

export const TitleChatList = styled.div`
  height: 20px;
  position: sticky;
  top: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.colors.borders};
  transition: all 0.5s ease;
  background: ${(props) => props.theme.colors.main};

  h6 {
    font-size: 1em;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
  }
`;
export const TitleContacts = styled.div`
  height: 20px;
  position: sticky;
  top: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  background: ${(props) => props.theme.colors.main};

  h6 {
    font-size: 1em;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
  }
`;
