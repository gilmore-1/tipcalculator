import styled from "styled-components";

export const TipWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 920px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 32px 43px 0px rgba(79, 166, 175, 0.2);
  padding: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Bill = styled.h1`
  color: #5e7a7d;
  font-family: "Space Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 10px; /* Add some space between Bill and SVG */
`;

export const BillInput = styled.input`
  text-align: right;
  border-radius: 5px;
  background: #f3f9fa;
  padding: 10px;
  width: 100%; /* Allow input to take the remaining space */
  color: #00474b;
  text-align: right;
  font-family: "Space Mono";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 0;
  outline: none;
  /* Hide spinner buttons */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none; /* Chrome, Safari, Edge */
    margin: 0;
  }
`;

export const Left = styled.div`
  width: 50%;
`;
export const BillInputDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Right = styled.div`
  border-radius: 15px;
  background: #00474b;
  width: 50%;
  margin-left: 50px;
  padding: 20px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;
export const TipButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const TipButton = styled.button`
  width: 120px;
  border-radius: 5px;
  background: #00474b;
  margin: 20px 10px 0 0;
  padding: 10px;
  color: #fff;
  text-align: center;
  font-family: "Space Mono";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
  line-height: normal;
`;
export const SelectText = styled.h1`
  color: #5e7a7d;
  font-family: "Space Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 40px;
`;
export const NumberPeople = styled.h1`
  color: #5e7a7d;
  font-family: "Space Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 40px;
  margin-bottom: 5px;
`;
export const TipAndTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 330px;
  margin: 20px;
`;
export const TipAmountTitle = styled.h1`
  color: #fff;
  font-family: "Space Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const CountedAmount = styled.h1`
  color: #26c2ae;
  text-align: right;
  font-family: "Space Mono";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1px;
`;
export const ResetBtn = styled.button`
  margin-top: 120px;
  border-radius: 15px;
  width: 100%;
  padding: 15px;
  background: #26c2ae;
  color: #00474b;
  text-align: center;
  font-family: "Space Mono";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
  line-height: normal;
`;