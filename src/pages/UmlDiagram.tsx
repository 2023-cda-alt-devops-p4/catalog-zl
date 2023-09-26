import { useParams } from "react-router-dom";
import uml from "../data/uml.json";
import Breadcrumb from "../component/Breadcrumb";
import styled from "styled-components";


interface diagram {
    name: string;
    description: string;
    exempleImage: string;
    elements: string[];
}

const UmlDiagram = () => {
    const { category, name } = useParams();
    const umlByCategory = uml.category.find(item => item.categoryName === category);
    const diagram : diagram | undefined = umlByCategory?.diagrammes.find(item => item.name === name);


  return (
    <>
        <Breadcrumb />
        <div className="container">
            <h1 className="title">{ category }</h1>
            <h3 className="subtitle">{ name }</h3>
            <p className="description">{ diagram?.description }</p>
            <ExempleContainer>
                <h3 className="subtitle">Exemple :</h3>
                <div>
                    <img src={diagram?.exempleImage} alt="" width={"100%"} />
                </div>
                <div>
                    { diagram?.elements.map((item: string) => {
                        return (
                            <>
                                <Elements key={crypto.randomUUID()}>{ item }</Elements><br />
                            </>
                            )
                        }) }
                </div>
            </ExempleContainer>
        </div>
    </>
  )
}

export default UmlDiagram

const ExempleContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1em;
`

const Elements = styled.div`
    text-align: justify;
`