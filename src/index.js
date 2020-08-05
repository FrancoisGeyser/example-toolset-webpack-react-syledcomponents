import React from 'react'
import ReactDOM from 'react-dom'
import styled, {GlobalStyleComponent, createGlobalStyle}  from 'styled-components'

const Heading = styled.h1`
color: red;
`;

const GlobalStyles = createGlobalStyle`
body{
    background: blue;
}
`;

const Index = () => {
    return (
        <>
            <GlobalStyles />
        <div>
            <Heading>Welcome</Heading>
            </div>
            </>
)}

export default Index

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Index/>, wrapper) : false;
