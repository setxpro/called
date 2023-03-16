import styled from "styled-components";

export const View = styled.div`

  img {
    width: 200px;
    border-radius: 8px;
  }

  .area-upload {

    position: relative;

    .btn-upload {
      color: ${(props) => props.theme.colors.icons};
      font-size: 5em;
      cursor: pointer;
    }

    input {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        height: 100px;
        width: 70px;
        opacity: 0;
        cursor: pointer;
    }
  }
`;
