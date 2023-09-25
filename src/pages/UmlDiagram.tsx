import { useParams } from "react-router-dom";
import uml from "../data/uml.json";
import Breadcrumb from "../component/Breadcrumb";

const UmlDiagram = () => {
    const { category, name } = useParams();
    const umlByCategory = uml.category.find(item => item.categoryName === category);
    const diagram = umlByCategory?.diagrammes.find(item => item.name === name);

  return (
    <div className="container">
        <Breadcrumb />
        <h1>{ category }</h1>
        <p>{ name }</p>
        <p>{ diagram?.description }</p>
        <ul>
            { diagram?.elements.map((item, index) => {
                return (
                    <li key={index}>{ item }</li>
                )
            }) }
        </ul>
    </div>
  )
}

export default UmlDiagram