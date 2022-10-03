// import {useState} from "react"
import styled from "styled-components"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"
import Deck from "./Deck"
import Footer from "./Footer"
import deckObject from "./deckObject"


export default function App() {
    return (
        <ConteinerApp>
            <GlobalStyle />
            <Header />
            <Deck deckObject={deckObject}/>
            <Footer />
        </ConteinerApp>
    );
}

const ConteinerApp = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
