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
