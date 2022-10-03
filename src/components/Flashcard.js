import { useState } from "react";
import styled from "styled-components";
import setaPlay from "../img/seta_play.png";
import setaVirar from "../img/seta_virar.png";


export default function Flashcard({card, index}) {

    const [status, setStatus] = useState(card.status); 

    if (status === "closed") {
        return (
            <CardClosed>
                <p>Pergunta {index + 1}</p>
                <img src={setaPlay} alt="Mostrar pergunta" onClick={() => setStatus("open")} />
            </CardClosed>
        );
    }

    if (status === "open") {
        return (
            <CardOpen>
                <p>{card.question}</p>
                <img src={setaVirar} alt="Mostrar resposta" onClick={() => setStatus("answered")} />
            </CardOpen>
        );
    }

    if (status === "answered") {
        return (
            <CardOpen>
                <p>{card.answer}</p>
            </CardOpen>
        );
    }
}

const CardClosed = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
` 
const CardOpen = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`