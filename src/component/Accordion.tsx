import { useState } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp  } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Accordion = ({ category, data }) => {
    const [toggleAccordion, setToggleAccordion] = useState(undefined);

  return (
    <div>
        {data.map((item, index) => {
            return (
                <AccordionContainer key={index}>
                    <AccordionButton toggle={toggleAccordion} onClick={() => index === toggleAccordion ? setToggleAccordion(undefined) : setToggleAccordion(index)}>
                        <p>{item.name}</p> 
                        <span>{toggleAccordion === index ? <FiChevronUp size={"1.5em"} /> : <FiChevronDown size={"1.5em"}/>}</span>
                    </AccordionButton>
                    <AccordionContent  index={index} toggle={toggleAccordion}>
                        <DescriptionTexte>{item.description}</DescriptionTexte>
                        <NavLinkStyle to={`/UML/${category}/${item.name}`}>En savoir plus</NavLinkStyle>
                    </AccordionContent>
                </AccordionContainer>
            )
        })}
    </div>
  )
}

export default Accordion

const AccordionContainer = styled.div`
width: 60vw;
max-width: 600px;
`

const AccordionButton = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    background-color: #333;
    padding: 1em;
    transition: border 3s ease-in-out;
`

const AccordionContent = styled.div`
    max-height: ${({ toggle, index }) => toggle !== index ? "0" : "999px"};
    opacity: ${({ toggle, index }) => toggle !== index ? "0" : "1"};
    transition: 
        opacity 0.2s ease-in-out,
        max-height 0.2s ease-in-out;
    border: 1px solid #333;
    border-top: none;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

const DescriptionTexte = styled.p`
margin: 1em;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 3; /* number of lines to show */
        line-clamp: 3; 
-webkit-box-orient: vertical;
`

const NavLinkStyle = styled(NavLink)`
    padding: 8px;
    align-self: flex-end;
`