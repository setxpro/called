import styled from 'styled-components';

export const Container = styled.div`

    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
   
`;

export const ContentTopRule = styled.div``;
export const GropField = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    border-bottom: 1px solid #1111;
    padding: 10px 0;
`;
export const Group = styled.div`
    display: flex;
    align-items: center;
    gap: .4rem;
`;
export const GroupDeadline = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ContentTopApplication = styled.div`
     border-bottom: 1px solid #1111;
     padding: 10px 0;
`;
export const ContentMiddleCheckBox = styled.div`
    border-bottom: 1px solid #1111;
    padding: 10px 0;
`;
export const CheckBoxContent = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;
export const ContentBottomField = styled.div`
    border-bottom: 1px solid #1111;
    padding: 10px 0;

    display: flex;
    align-items: center;
    gap: 10px;
`;
export const ContentBottomButtonCreate = styled.div`

    button {
        cursor: pointer;
        color: #EEE;
        background: #0F5A41;
        border: none;
        border-radius: 8px;
        padding: .5rem 1.5rem;
    }

`;