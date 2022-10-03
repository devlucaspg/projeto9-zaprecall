import styled from "styled-components"
import logo from "../img/logo.png";

export default function Header() {
    return (
        <ConteinerHeader>
            <Logo src={logo} />
            <Title>ZapRecall</Title>
        </ConteinerHeader>
    );
}

const ConteinerHeader = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
`

const Logo = styled.img`
    width: 52px;
`

const Title = styled.h1`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
`