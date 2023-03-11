import styled from 'styled-components';

export const Container = styled.div`
  
`;
export const ContentPages = styled.div<{wrapperSidebar: boolean}>`
    position: fixed;
    background: #F8F7FA;
    right: 0;
    top: 60px;
    bottom: 0;
    width: 95%;
    padding: 10px;

    @media (max-width: 524px) {
        left: 0;
        width: 100%;
    }
`;
