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
      <div className="presentation">
        <p className="description">
          La méthodologie Merise est comme la carte de navigation pour les
          concepteurs de systèmes d'information. Elle offre une approche
          structurée pour analyser, concevoir et mettre en œuvre des solutions
          informatiques. En utilisant des modèles conceptuels, logiques et
          physiques, Merise aide les équipes de développement à créer des
          systèmes robustes et efficaces. Ces trois niveaux d'abstraction, à
          savoir les modèles conceptuels, logiques et physiques, permettent aux
          équipes de développement de concevoir des systèmes informatiques qui
          répondent aux besoins de l'organisation, en commençant par une vision
          globale et en descendant progressivement vers une spécification
          détaillée, garantissant ainsi la robustesse et l'efficacité des
          solutions mises en œuvre. Explorez ci-dessous les différents modèles
          Merise et leur rôle dans le développement de solutions informatiques.
        </p>
        <img
          src={import.meta.env.VITE_PUBLIC_URL + "/imgs/merise.png"}
          alt=""
        />
      </div>
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
              type={"Merise"}
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
