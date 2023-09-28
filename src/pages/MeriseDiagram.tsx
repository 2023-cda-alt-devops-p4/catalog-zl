import { useParams } from "react-router-dom";
import merise from "../data/merise.json";
import Breadcrumb from "../component/Breadcrumb";
import styled from "styled-components";

interface diagram {
  name: string;
  description: string;
  exempleImage: string;
  elements: string[];
}

const MeriseDiagram = () => {
  const { category, name } = useParams();
  const modelByCategory = merise.category.find(
    (item) => item.categoryName === category
  );
  const diagram: diagram | undefined = modelByCategory?.diagrammes.find(
    (item) => item.name === name
  );

  return (
    <div className="container">
      <Breadcrumb />
      <h1 className="title">{category}</h1>
      <h3 className="subtitle">{name}</h3>
      <p className="description">{diagram?.description}</p>
      <ExempleContainer>
        <h3 className="subtitle">Exemple :</h3>
        <ExemplePicture src={diagram?.exempleImage} alt="" />
        <h3 className="subtitle">Éléments :</h3>
        <div>
          {diagram?.elements.map((item: string) => {
            return (
              <>
                <Elements key={crypto.randomUUID()}>
                  <span className="bold">{item.split(":")[0]} :</span>
                  {item.split(":")[1]}
                </Elements>
                <br />
              </>
            );
          })}
        </div>
      </ExempleContainer>
    </div>
  );
};

export default MeriseDiagram;

const ExempleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Elements = styled.div`
  text-align: justify;
`;

const ExemplePicture = styled.img`
  max-width: 100%;
  align-self: center;
`;
