import styled from 'styled-components';

export const Container = styled.div<{wrapperSidebar: boolean}>`
    width: ${props => props.wrapperSidebar ? '18%' : '5%'};
    transition: all .5s ease;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: #0F5A41;
    z-index: 2;
    overflow: hidden;

    @media (max-width: 890px) {
        width: ${props => props.wrapperSidebar ? '35%' : '6%'};
    }

    @media (max-width: 524px) { // Sidebar
        width: ${props => props.wrapperSidebar ? '60%' : '0%'};
    }
`;
export const ContentBlur = styled.div<{wrapperSidebar: boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease;
    display: ${props => props.wrapperSidebar ? 'inline' : 'none'};
    z-index: 1;
`;
export const SidebarTop = styled.div<{wrapperSidebar: boolean}>`
    padding: 0 1rem;
    height: 60px;
    background: #0F5A41;

    display: flex;
    align-items: center;
    justify-content: ${props => props.wrapperSidebar ? 'space-between' : 'center'};

    h2 {
        display: ${props => props.wrapperSidebar ? '1' : 'none'};
        color: #FFF;
        user-select: none;
    }
    .bars {

        @media (max-width: 524px) {
            display: none;
        }
    }
    .MuiSvgIcon-fontSizeMedium {
        font-size: 2em;
        color: #FFF;
        cursor: pointer;
    }
`;
export const MenuArea = styled.div<{wrapperSidebar: boolean}>`
    width: 100%;
    max-height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;

    ::-webkit-scrollbar {
        width: 0;
    }

    .active {
        background: #AAAA;
        border-left: 4px solid #00FFFF;
    }

    a {
        width: inherit;
        padding: 10px 18px;
        
        display: flex;
        align-items: center;
        justify-content:  ${props => props.wrapperSidebar ? 'auto' : 'center'};
        gap: 1rem;
        color: #FFF;
        text-decoration: none;
        font-size: 1.2em;
        user-select: none;

        .MuiSvgIcon-fontSizeMedium {
            font-size: 1.4em;
            color: #FFF;
            cursor: pointer;
        }

        &:hover {
            background: #AAAA;
        }

        span {
            width: ${props => props.wrapperSidebar ? '100%' : '0'};
            overflow: hidden;
        }
    }

`;
