import { useState } from "react";
import styled from "styled-components";
import setaPlay from "../img/seta_play.png";
import setaVirar from "../img/seta_virar.png";
/* import iconeCerto from "../img/icone_certo.png";
import iconeErrado from "../img/icone_errado.png";
import iconeQuase from "../img/icone_quase.png"; */

export default function Flashcard({card, index, counter, setCounter, setIconeIndex, iconeIndex, iconeCerto, iconeErrado, iconeQuase}) {

    const [status, setStatus] = useState(card.status); 
    const [colorText, setColorText] = useState("");
    const [icone, setIcone] = useState("");



        
    if (status === "closed") {
        return (
            <CardClosed data-identifier="flashcard">
                <p>Pergunta {index + 1}</p>
                <img src={setaPlay} alt="Mostrar pergunta" onClick={() => setStatus("open")} data-identifier="flashcard-show-btn" />
            </CardClosed>
        );
    }

    if (status === "open") {
        return (
            <CardOpen data-identifier="flashcard-index-item">
                <p data-identifier="flashcard-question">{card.question}</p>
                <img src={setaVirar} alt="Mostrar resposta" onClick={() => setStatus("answer")} data-identifier="flashcard-turn-btn"/>
            </CardOpen>
        );
    }

    if (status === "answer") {

        return (
            <CardAnswer data-identifier="flashcard-index-item">
                <p data-identifier="flashcard-answer">{card.answer}</p>
                <div>
                    <Button cor="#FF3030" index={index} icone={"iconeErrado"} data-identifier="forgot-btn" onClick={() => (setStatus("answered"), setColorText("#FF3030"), setCounter(counter + 1), setIconeIndex(iconeIndex => [...iconeIndex, {indexCard:index, iconeCard:"iconeErrado"}]), setIcone(iconeErrado))}>Não lembrei </Button>
                    <Button cor="#FF922E" index={index} icone={"iconeQuase"} data-identifier="almost-forgot-btn" onClick={() => (setStatus("answered"), setColorText("#FF922E"), setCounter(counter + 1), setIconeIndex(iconeIndex => [...iconeIndex, {indexCard:index, iconeCard:"iconeQuase"}]), setIcone(iconeQuase))}>Quase não lembrei </Button>
                    <Button cor="#2FBE34" index={index} icone={"iconeCerto"} data-identifier="zap-btn" onClick={() => (setStatus("answered"), setColorText("#2FBE34"), setCounter(counter + 1), setIconeIndex(iconeIndex => [...iconeIndex, {indexCard:index, iconeCard:"iconeErrado"}]), setIcone(iconeCerto))}>Acertei</Button>
                </div>
            </CardAnswer>
        );
    }

    console.log(iconeIndex);

    if (status === "answered") {
        return (
            <CardAnswered cor={colorText} data-identifier="flashcard-index-item">
                <p>Pergunta {index + 1}</p>
                <img src={icone} alt="Ícone" data-identifier="flashcard-status"/>
            </CardAnswered>
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

    div {
        display: flex;
    }
`

const CardAnswer = styled.div`
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

    div {
        display: flex;
    }
`

const Button = styled.button`
    width: 100px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background-color: ${(props) => props.cor};
    border-radius: 5px;
    border: none;
    margin: 0px 8px;
    padding: 5px;
`

const CardAnswered = styled.div`
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
        color: ${(props) => props.cor};
        text-decoration: line-through;
    }
` 