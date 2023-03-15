import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
`;
export const ContentTitle = styled.div`
    height: 10%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: ${props => props.theme.colors.title};
        transition: .5s ease;
    }

`;
export const FieldInput = styled.input`
    width: 50%;
    padding: .8rem .5em;
    border-radius: 8px;
    border: 1px solid #3333;
    font-size: 1em;

    outline: none;

`;
export const ContainerTable = styled.div`
    height: 90%;

    .css-og52vs-MuiTableCell-root.MuiTableCell-head {
        transition: .5s ease;
        background: ${props => props.theme.colors.tableTh};
        color: ${props => props.theme.colors.textTh};
    }
    .css-1dydcym-MuiTableCell-root {
        transition: .5s ease;
        color: ${props => props.theme.colors.text};
    }

    .approved {
        color: #28C16D;

        span {
            background: RGB(40, 193, 109, 0.3);
            padding: 0.5rem;
            border-radius: .5rem;
        }
    }
    .waiting {
        color: #f00;

        span {
            background: rgba(255, 100, 100, 0.3);
            padding: 0.5rem;
            border-radius: .5rem;
        }
       
    }
`;
