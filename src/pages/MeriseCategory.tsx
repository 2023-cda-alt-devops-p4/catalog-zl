import { useParams } from "react-router-dom";
import merise from "../data/merise.json";
import Accordion from "../component/Accordion";
import Breadcrumb from "../component/Breadcrumb";

const MeriseCategory = () => {
  const { category } = useParams();
  const modelByCategory = merise.category.find(
    (item) => item.categoryName === category
  );
  const diagrammes = modelByCategory?.diagrammes || [];

  return (
    <div className="container">
      <Breadcrumb />
      <h1 className="title">{category}</h1>
      <Accordion category={category} data={diagrammes} />
    </div>
  );
};

export default MeriseCategory;
