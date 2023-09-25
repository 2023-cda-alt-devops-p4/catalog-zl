import { useParams } from "react-router-dom";
import uml from '../data/uml.json';
import Accordion from "../component/Accordion";
import Breadcrumb from "../component/Breadcrumb";

const UmlCategory = () => {
    const { category } = useParams();
    const umlByCategory = uml.category.find(item => item.categoryName === category);

    return (
        <div className="container">
            <Breadcrumb />
            <h1>{ category }</h1>
            <Accordion category={category} data={umlByCategory?.diagrammes} />
        </div>
    )
}

export default UmlCategory