import styled from 'styled-components';

export const Container = styled.div<{wrapperSidebar:boolean}>`
    height: 60px;
    background-color: #FFF;
    transition: all .5s ease;
    width: ${props => props.wrapperSidebar ? '84%' : '95%'};
    position: fixed;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    user-select: none;

    @media (max-width: 524px) {
        width: 100%;
    }
`;
export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const NotifyArea = styled.div`
        .MuiSvgIcon-fontSizeMedium {
            font-size: 2em;
            color: #7367F0;
            cursor: pointer;

            @media (max-width: 884px) {
                font-size: 2.5em;
            }
        }

        position: relative;

        ::after {
            content: '';
            background: #EA5455;
            width: 8px;
            height: 8px;
            border-radius: 50%;

            position: absolute;
            top: 4px;
            right: 5px;
            border: 2px solid #FFF;
        }

        cursor: pointer;
`;
export const AvatarArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
        width: 55px;
        height: 55px;
        border-radius: 50%;

        border: 2px solid #053;
        padding: 2px;
    }

    ::after {
        content: '';
        background: #0f0;
        width: 15px;
        height: 15px;
        border-radius: 50%;

        position: absolute;
        right: 0;
        bottom: 10px;
        border: 2px solid #FFF;
    }

`;
export const ContentNameAndAvatar = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    height: 60px;
`;
export const NameArea = styled.div`
    
    h2,h6 {
        color: #333;
    }

    h2 {
        font-weight: 500;
        font-size: 22px;

        @media (max-width: 884px) {
                font-size: 1.5em;
        }
    }

    h6 {
        text-align: end;
        color: #7367F0;
        font-size: .8em;

        @media (max-width: 884px) {
           font-size: 1.2em;
        }
    }
`;
export const LeftContainer = styled.div`

    .MuiSvgIcon-fontSizeMedium {

        display: none;

        font-size: 2em;
        color: #333;
        cursor: pointer;

        @media (max-width: 524px) {
            display: inline-block;
        }
    }
`;

// ADMIN #28C76F // MEMBER #F76045 // DEVELOPER #7367F0