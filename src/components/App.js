import {useState} from "react"
import styled from "styled-components"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"
import Deck from "./Deck"
import Footer from "./Footer"
import deckObject from "./deckObject"
import Start from "./Start"
import iconeCerto from "../img/icone_certo.png";
import iconeErrado from "../img/icone_errado.png";
import iconeQuase from "../img/icone_quase.png";

export default function App() {
    const [started, setStarted] = useState(false)
    const [counter, setCounter] = useState(0);
    const [iconeIndex, setIconeIndex] = useState([]);
    const deckLength = deckObject.length;

    if (started === false) {
        return (
            <ConteinerApp>
                <GlobalStyle />
                <Start setStarted={setStarted}/>
            </ConteinerApp>
        );
    }

    else 
        return (
        <ConteinerApp>
            <GlobalStyle />
            <Header />
            <Deck deckObject={deckObject} counter={counter} setCounter={setCounter} setIconeIndex={setIconeIndex} iconeIndex={iconeIndex} iconeCerto={iconeCerto} iconeErrado={iconeErrado} iconeQuase={iconeQuase}/>
            <Footer counter={counter} deckLength={deckLength} iconeIndex={iconeIndex} iconeCerto={iconeCerto} iconeErrado={iconeErrado} iconeQuase={iconeQuase}/>
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
