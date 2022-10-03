import styled from "styled-components";


export default function Footer({counter, deckLength, iconeIndex, iconeCerto, iconeErrado, iconeQuase}) {
    if (counter !== deckLength) {    
        return (
            <ConteinerFooter data-identifier="flashcard-counter">
                <p>{counter}/{deckLength} CONCLUÍDOS</p>
            </ConteinerFooter>
        );
    }
    else {
        return (
            <ConteinerFooter data-identifier="flashcard-counter">
                <p>{counter}/{deckLength} CONCLUÍDOS</p>
                <FooterIcons>    
                    {iconeIndex.map((icone, index) => (
                        <img alt="Ícone" key={index} indexCard={index} iconeCard={icone} iconeIndex={iconeIndex} iconeCerto={iconeCerto} iconeErrado={iconeErrado} iconeQuase={iconeQuase}/>
                    ))}
                </FooterIcons>
            </ConteinerFooter>
        );
    }
}

const ConteinerFooter = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`

const FooterIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`