import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

// LEFT SIDE
export const LeftSide = styled.div<{selectedChat: boolean;}>`
  flex: 1;
  border-right: 1px solid #3333;

  @media (max-width: 890px) {
    border-right: none;
    display: ${props => props.selectedChat ? 'none' : 'flex'};
  }

  display: flex;
  flex-direction: column;
`;
export const LeftTop = styled.div`
  height: 70px;
  border-bottom: 1px solid #3333;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 50px;
    border-radius: 50%;
  }

  .area-input {
    flex: 1;
    padding: 0.5rem 0.3rem;
    background: #fff;
    border: 1px solid #3333;
    border-radius: 8px;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      font-size: 1.3em;
      outline: none;
      border: none;
    }
  }
`;

export const LeftChatsArea = styled.div`
    flex: 1;
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

// RIGHT SIDE
export const RightSide = styled.div<{selectedChat: boolean;}>`
  flex: 3;

  @media (max-width: 890px) {
    display: ${props => props.selectedChat ? 'inline' : 'none'};
  }
  
`;
export const RightTop = styled.div`
  height: 70px;
  border-bottom: 1px solid #3333;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 50px;
    border-radius: 50%;
  }
`;
