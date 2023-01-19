import styled from "styled-components";
interface ContainerProps {
  width: number;
}
const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #7b4397; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #dc2430,
    #7b4397
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #dc2430,
    #7b4397
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const StyledCaculator = styled.div`
  width: 30vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: solid gray 2px;
  border-radius: 2px;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
const StyledDisplay = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  border-bottom: solid gray 2px;
`;
const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const StyledBtnContainer = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => props.width + "%"};
  height: 100%;
`;

const StyledBtn = styled.button`
  width: 25%;
  font-size: 50px;
`;

export {
  StyledMain,
  StyledCaculator,
  StyledDisplay,
  StyledContainer,
  StyledBtnContainer,
  StyledBtn,
};
