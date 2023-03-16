import styled from 'styled-components';
import { capitalize } from './../../../../server/src/Utils/CaptalizeText';

export const Container = styled.div`
    height: 100%;

    tr {

        th {
            border: 0;
            :nth-child(1) {
                display: flex;
                align-items: center;
                gap: .5rem;

                img {
                    border-radius: 50%;
                }
            }

        }

        :nth-child(even) {
            background: #5555;
        }
    }

    .css-1dydcym-MuiTableCell-root {
        border: 0;
    }

    .name-area {
        text-transform: capitalize;
    }
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

export const ImageAvatar = styled.div<{isOnline: boolean}>`

    position: relative;

    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    &::after {
        content: "";
        background: ${props => props.isOnline ? "yellowgreen" : "red"};
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        bottom: 5px;
        right: 5px;
        transition: all .5s ease;
        border: 3px solid ${props => props.theme.colors.main};
    }
`;