import Breadcrumb from "../component/Breadcrumb";
import { NavLink } from "react-router-dom";
import Accordion from "../component/Accordion";
import merise from "../data/merise.json";
import styled from "styled-components";

const Merise = () => {
  const isMerisePage = window.location.href.includes("Merise");

  return (
    <div className="container">
      {isMerisePage ? <Breadcrumb /> : null}
      <h1 className="title">
        Liste des differents modèles Merise classé par catégorie
      </h1>
      <p className="description">
        La méthodologie Merise est comme la carte de navigation pour les
        concepteurs de systèmes d'information. Elle offre une approche
        structurée pour analyser, concevoir et mettre en œuvre des solutions
        informatiques. En utilisant des modèles conceptuels, organisationnels,
        logiques et physiques, Merise aide les équipes de développement à créer
        des systèmes robustes et efficaces. Explorez ci-dessous les différents
        modèles Merise et leur rôle dans le développement de solutions
        informatiques.
      </p>
      {merise.category.map((item, index) => {
        return (
          <>
            <NavLinkCategory
              className={"subtitle"}
              to={`/Merise/${item.categoryName}`}
            >
              {" "}
              <h3>{item.categoryName}</h3>
            </NavLinkCategory>
            <Accordion
              key={index}
              category={item.categoryName}
              data={item.diagrammes}
            />
          </>
        );
      })}
    </div>
  );
};

export default Merise;

const NavLinkCategory = styled(NavLink)`
  text-decoration: none;
  font-size: 1.3em;
`;
