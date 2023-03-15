import styled from 'styled-components';

export const Container = styled.div`
    height: 70px;
    cursor: pointer;
    transition: .8s ease;
    border-radius: 5px;
    &:hover {
        background: #9999;
    }

    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0 10px;
`;
export const ContentAvatarArea = styled.div`

    position: relative;

    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
`;


export const NameArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3em;

    h3 {
        font-size: 1.2em;
        font-weight: 500;
        color: var(--color-text);
    }

    span {
        color: #555;
    }
`;