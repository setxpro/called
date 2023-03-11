import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
export const ContentTop = styled.div`
   
`;
export const ContentBottom = styled.div`
    
`;
export const ContainerItemsTop = styled.div`
   display: flex;
   gap: 1rem;
`;
export const ContainerItemsBottom = styled.div`
   display: flex;
   gap: 1rem;
   align-items: center;

`;
export const Item01 = styled.div`
    display: flex;
    gap: .5rem;
`;
export const Item02 = styled.div`
    display: flex;
    gap: .5rem;
`;
export const FieldsArea = styled.div`
    display: flex;
    gap: .5rem;

    input {

        padding: 0 .3rem;
        border: 1px solid #9999;
        outline: none;
        border-radius: 8px;
    }

    button {
        cursor: pointer;
        color: #EEE;
        background: #0F5A41;
        border: none;
        border-radius: 8px;
        padding: .5rem 1.5rem;
    }
`;
