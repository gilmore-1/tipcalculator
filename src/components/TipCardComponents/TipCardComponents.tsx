import styled from "styled-components";
import { useState } from "react";
const TipWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 920px;
    border-radius: 25px;
    background: #FFF;
    box-shadow: 0px 32px 43px 0px rgba(79, 166, 175, 0.20);
    padding: 30px;
`;

const Bill = styled.h1`
    color: #5E7A7D;
    font-family: "Space Mono";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 10px; /* Add some space between Bill and SVG */
`;

const BillInput = styled.input`
    text-align: right;
    border-radius: 5px;
    background: #F3F9FA;
    padding: 10px;
    width: 100%; /* Allow input to take the remaining space */
    color: #00474B;
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

const Left = styled.div`
    width: 50%;
`;
const BillInputDiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;
const Right = styled.div`
border-radius: 15px;
background: #00474B;
    width: 50%;
    margin-left: 50px;
    padding: 20px;
`;
const TipButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
 
`;
const TipButton = styled.button`
    width: 120px;
    border-radius: 5px;
background: #00474B;
    margin: 20px 10px 0 0;  
    padding: 10px;
    color: #FFF;
text-align: center;
font-family: "Space Mono";
font-size: 24px;
font-style: normal;
font-weight: 700;
cursor: pointer;
line-height: normal;
`;
const SelectText = styled.h1`
color: #5E7A7D;
font-family: "Space Mono";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 40px;
`;
const NumberPeople = styled.h1`
color: #5E7A7D;
font-family: "Space Mono";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 40px;
margin-bottom: 5px;
`;
const TipAndTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 330px;
    margin: 20px;

`;
const TipAmountTitle = styled.h1`
color: #FFF;
font-family: "Space Mono";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
const CountedAmount = styled.h1`
color: #26C2AE;
text-align: right;
font-family: "Space Mono";
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -1px;
`;
const ResetBtn = styled.button`
    margin-top: 120px;
    border-radius: 15px;
    width: 100%;
    padding: 15px;
    background: #26C2AE;
    color: #00474B;
    text-align: center;
    font-family: "Space Mono";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
    line-height: normal;
`;
const TipCardComponents = () => {
    const [bill, setBill] = useState<number>(0);
    const [tip, setTip] = useState<number>(0);
    const [people, setPeople] = useState<number>(1);

    const tipAmountPerPerson = people > 0 ? (bill * tip) / 100 / people : 0;
    const totalPerPerson = people > 0 ? bill / people + tipAmountPerPerson : 0;
    const Reset = () => {
        setBill(0);
        setTip(0);
        setPeople(0)
    }
    return (
        <TipWrapper>
            <Left>
                <Bill>Bill</Bill>
                <BillInputDiv>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17" viewBox="0 0 11 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.01598 16.328V14.864C7.24798 14.784 8.23598 14.42 8.97998 13.772C9.72398 13.124 10.096 12.264 10.096 11.192V11.048C10.096 10.056 9.74798 9.276 9.05198 8.708C8.35598 8.14 7.34398 7.776 6.01598 7.616V4.184C6.57598 4.328 7.02798 4.584 7.37198 4.952C7.71598 5.32 7.88798 5.768 7.88798 6.296V6.584H9.71198V6.152C9.71198 5.704 9.62398 5.276 9.44798 4.868C9.27198 4.46 9.02398 4.088 8.70398 3.752C8.38398 3.416 7.99598 3.132 7.53998 2.9C7.08398 2.668 6.57598 2.504 6.01598 2.408V0.872002H4.28798V2.36C3.79198 2.408 3.31998 2.516 2.87198 2.684C2.42398 2.852 2.03198 3.076 1.69598 3.356C1.35998 3.636 1.09198 3.972 0.891981 4.364C0.691981 4.756 0.591981 5.208 0.591981 5.72V5.864C0.591981 6.824 0.907981 7.572 1.53998 8.108C2.17198 8.644 3.08798 8.992 4.28798 9.152V13.064C3.58398 12.904 3.03998 12.592 2.65598 12.128C2.27198 11.664 2.07998 11.048 2.07998 10.28V9.992H0.255981V10.568C0.255981 11.032 0.335981 11.492 0.495981 11.948C0.655981 12.404 0.899981 12.828 1.22798 13.22C1.55598 13.612 1.97198 13.948 2.47598 14.228C2.97998 14.508 3.58398 14.704 4.28798 14.816V16.328H6.01598ZM4.28798 7.424C3.59998 7.296 3.12398 7.092 2.85998 6.812C2.59598 6.532 2.46398 6.168 2.46398 5.72C2.46398 5.256 2.63998 4.888 2.99198 4.616C3.34398 4.344 3.77598 4.168 4.28798 4.088V7.424ZM6.01598 9.344V13.136C6.70398 13.056 7.24398 12.848 7.63598 12.512C8.02798 12.176 8.22398 11.736 8.22398 11.192C8.22398 10.632 8.04798 10.216 7.69598 9.944C7.34398 9.672 6.78398 9.472 6.01598 9.344Z" fill="#9EBBBD" />
                    </svg>
                    <BillInput type="number" value={bill} onChange={(e) => setBill(e.target.valueAsNumber)} placeholder="142.55" />
                </BillInputDiv>
                <SelectText>Select Tip %</SelectText>
                <TipButtonContainer>
                    {[5, 10, 15].map((value, index) => (
                        <TipButton key={value}  style={tip === value ? { backgroundColor: '#26C2AE', color: '#fff' }  : {}} onClick={() => setTip(value)}>{value}%</TipButton>
                    ))}


                </TipButtonContainer>
                <TipButtonContainer>
                    {[25, 50].map((value, index) => (
                        <TipButton key={value}  style={tip === value ? { backgroundColor: '#26C2AE', color: '#fff' } : {}} onClick={() => setTip(value)}>{value}%</TipButton>
                    ))}
                    <TipButton>Custom</TipButton>
                </TipButtonContainer>
                <NumberPeople>Number of People</NumberPeople>
                <BillInputDiv>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.94468 6.5782C4.67424 7.32746 5.56715 7.70722 6.59831 7.70722C7.62924 7.70722 8.52203 7.32734 9.25171 6.57832C9.9814 5.82918 10.3514 4.91244 10.3514 3.85349C10.3514 2.79478 9.9814 1.87804 9.25183 1.1289C8.52227 0.379758 7.6296 0 6.59831 0C5.56727 0 4.67448 0.379758 3.94479 1.12878C3.21511 1.87816 2.84527 2.7949 2.84527 3.85349C2.84527 4.91244 3.21511 5.82906 3.94468 6.5782ZM0.157754 11.2922C0.0951042 11.6513 0.0525445 11.9914 0.0315027 12.3031C0.0106987 12.6078 0.000118872 12.9258 0 13.2482C0 14.0838 0.258564 14.76 0.768559 15.2583C1.27225 15.7505 1.93834 16 2.74862 16H10.2514C11.0617 16 11.728 15.7504 12.2316 15.2583C12.7414 14.7597 13 14.0835 13 13.2483C13 12.9274 12.9895 12.6096 12.9689 12.3035C12.9478 11.991 12.9053 11.6508 12.8426 11.2922C12.7794 10.9303 12.6979 10.5884 12.6006 10.2758C12.4998 9.95244 12.3628 9.63347 12.1936 9.32769C12.0182 9.01043 11.8117 8.73419 11.5802 8.50665C11.3378 8.26849 11.0412 8.07721 10.6986 7.93793C10.3571 7.79901 9.97855 7.72858 9.5734 7.72858C9.41434 7.72858 9.26039 7.79559 8.96367 7.9942C8.7781 8.11835 8.56411 8.25995 8.32766 8.4151C8.12378 8.54864 7.84727 8.67376 7.50608 8.78692C7.1725 8.89764 6.83429 8.95379 6.50036 8.95379C6.16642 8.95379 5.82809 8.89764 5.49487 8.78692C5.15333 8.67364 4.87681 8.54852 4.6727 8.41497C4.43399 8.25836 4.22012 8.11676 4.03728 7.99432C3.7402 7.79572 3.58637 7.7287 3.42731 7.7287C3.02228 7.7287 2.64365 7.79901 2.30199 7.93781C1.95914 8.07733 1.66266 8.26861 1.4205 8.50653C1.18892 8.73394 0.982543 9.01031 0.806838 9.32769C0.637553 9.63347 0.500603 9.95256 0.399912 10.2757C0.30243 10.5883 0.220998 10.9303 0.157754 11.2922Z" fill="#9EBBBD" />
                    </svg>
                    <BillInput type="number" value={people} onChange={(e) => setPeople(e.target.valueAsNumber)} placeholder="5" />
                </BillInputDiv>
            </Left>
            <Right>
                <TipAndTotal>
                    <TipAmountTitle>Tip Amount/Person</TipAmountTitle>
                    <CountedAmount>{isNaN(tipAmountPerPerson) && isNaN(totalPerPerson) ? '$0' : tipAmountPerPerson.toFixed(2)}</CountedAmount>


                </TipAndTotal>
                <TipAndTotal style={{ marginTop: 70 }}>
                    <TipAmountTitle>Total/Person</TipAmountTitle>
                    <CountedAmount>{isNaN(tipAmountPerPerson) && isNaN(totalPerPerson) ? '$0' : totalPerPerson.toFixed(2)}</CountedAmount>
                </TipAndTotal>
                <ResetBtn onClick={Reset}>Reset</ResetBtn>
            </Right>
        </TipWrapper >
    );
};

export default TipCardComponents;
