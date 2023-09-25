import { NavLink } from "react-router-dom"
import Accordion from "../component/Accordion"
import Breadcrumb from "../component/Breadcrumb"
import uml from "../data/uml.json"

const Home = () => {

  return (
    <div className="container">
      <Breadcrumb />
      {uml.category.map((item, index) => {
        return (
          <>
            <NavLink to={`/UML/${item.categoryName}`}>{item.categoryName}</NavLink>
            <Accordion key={index} category={item.categoryName} data={item.diagrammes} />
          </>
        )
      })}
    </div>
  )
}

export default Home