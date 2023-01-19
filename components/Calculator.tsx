import {
  StyledContainer,
  StyledCaculator,
  StyledDisplay,
  StyledBtnContainer,
  StyledBtn,
} from "../src/styles/StyledComponents";

interface Btn {
  number?: number;
  symbol?: string;
}

const Calculator = () => {
  const BtnArray: Btn[] = [
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { symbol: "÷" },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { symbol: "X" },
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { symbol: "-" },
    { symbol: "0" },
    { symbol: "." },
    { symbol: "=" },
    { symbol: "+" },
  ];

  return (
    <StyledCaculator>
      <StyledDisplay />
      <StyledContainer>
        <StyledBtnContainer width={100}>
          {BtnArray.map((item, idx) => {
            return (
              <StyledBtn key={idx}>
                {item.number ? item.number : item.symbol}
              </StyledBtn>
            );
          })}
        </StyledBtnContainer>
      </StyledContainer>
    </StyledCaculator>
  );
};

export default Calculator;
