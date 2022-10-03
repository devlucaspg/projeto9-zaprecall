import Flashcard from "./Flashcard";

export default function Deck({deckObject, counter, setCounter, setIconeIndex, iconeIndex, iconeCerto, iconeErrado, iconeQuase}) {
    return (
        <>
            {deckObject.map((card, index) => (
            <Flashcard  card={card} key={index} index={index} counter={counter} setCounter={setCounter} setIconeIndex={setIconeIndex} iconeIndex={iconeIndex} iconeCerto={iconeCerto} iconeErrado={iconeErrado} iconeQuase={iconeQuase}/>
            ))}
        </>
    );
}

