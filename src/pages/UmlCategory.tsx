import { useParams } from "react-router-dom";
import uml from '../data/uml.json';
import Accordion from "../component/Accordion";
import Breadcrumb from "../component/Breadcrumb";

const UmlCategory = () => {
    const { category } = useParams();
    const umlByCategory = uml.category.find(item => item.categoryName === category);
    const diagrammes = umlByCategory?.diagrammes || [];

    return (
        <>
            <Breadcrumb />
            <div className="container">
                <h1 className="title">{ category }</h1>
                <Accordion category={category} data={diagrammes} />
            </div>
        </>
    )
}

export default UmlCategory