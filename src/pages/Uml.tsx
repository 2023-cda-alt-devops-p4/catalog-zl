import Breadcrumb from "../component/Breadcrumb";
import { NavLink } from "react-router-dom";
import Accordion from "../component/Accordion";
import uml from "../data/uml.json";
import styled from "styled-components";

const Uml = () => {
  const isUmlPage = window.location.href.includes("UML");

  return (
    <div className="container">
      {isUmlPage ? <Breadcrumb /> : null}
      <h1 className="title">
        Liste des differents diagrammes UML classé par catégorie
      </h1>
      <p className="description">
        Les diagrammes UML (Unified Modeling Language) sont comme des cartes
        visuelles pour les développeurs de logiciels. Ils permettent de
        représenter graphiquement la structure, le comportement et les
        interactions des systèmes informatiques. Ces diagrammes jouent un rôle
        crucial en simplifiant la conception, la communication et la
        documentation des projets de développement. Explorez ci-dessous la
        variété de ces diagrammes et découvrez comment ils contribuent à la
        création de logiciels robustes et bien conçus."
      </p>
      {uml.category.map((item, index) => {
        return (
          <>
            <NavLinkCategory
              className={"subtitle"}
              to={`/UML/${item.categoryName}`}
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

export default Uml;

const NavLinkCategory = styled(NavLink)`
  text-decoration: none;
  font-size: 1.3em;
`;
