import styled from 'styled-components';

// use it like a styled component for the project where ever you want
export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border: 0.07rem solid var(--lightBlue);
border-color: ${props => 
    props.cart ? "var(--mainGreen)": "var(--lightBlue)"};
color:${props => props.cart? "var(--mainGreen)": 
"var(--lightBlue)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0; 
transition:all 0.5s ease-in-out;
&:hover{
    background:${props =>props.cart? "var(--mainGreen)": 
    "var(--lightBlue)"};
    color:${props =>props.cart? "var(--mainDark)": 
    "var(--mainBlue)"};
}
&:focus{
    outline:0 !important;
}
&:active{
    outline:0 !important;
}

`;