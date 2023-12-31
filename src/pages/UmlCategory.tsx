import { useParams } from "react-router-dom";
import uml from "../data/uml.json";
import Accordion from "../component/Accordion";
import Breadcrumb from "../component/Breadcrumb";

const UmlCategory = () => {
  const { category } = useParams();
  const umlByCategory = uml.category.find(
    (item) => item.categoryName === category
  );
  const diagrammes = umlByCategory?.diagrammes || [];

  return (
    <div className="container">
      <Breadcrumb />
      <h1 className="title">{category}</h1>
      <Accordion type={"UML"} category={category} data={diagrammes} />
    </div>
  );
};

export default UmlCategory;
