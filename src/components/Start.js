import styled from "styled-components"
import logo from "../img/logo.png";

export default function Start({setStarted}) {
    return (
        <ConteinerStart>
            <img src={logo} alt="Logo ZapRecall" />
            <p>ZapRecall</p>
            <button onClick={() => setStarted(true)} data-identifier="start-btn">Iniciar Recall!</button>
        </ConteinerStart>
    )
}

const ConteinerStart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0 20px 0;

    img {
        width: 136px;
        margin: 30px;
    }

    p {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        color: #ffffff;
    }

    button {
        width: 246px;
        height: 54px;
        margin: 45px;
        padding: 16px 22px;
        font-family: 'Recursive';
        font-size: 18px;
        line-height: 22px;
        color: #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border: 1px solid #D70900;
        border-radius: 5px;

;
    }
    `