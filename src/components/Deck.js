import Flashcard from "./Flashcard";

export default function Deck({deckObject}) {
    return (
        <>
            {deckObject.map((card, index) => (
            <Flashcard  card={card} key={index} index={index}/>
            ))}
        </>
    );
}

