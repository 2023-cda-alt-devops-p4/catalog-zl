import { NavLink } from "react-router-dom"
import Accordion from "../component/Accordion"
import data from "../data/uml.json"

const Home = () => {

  return (
    <div className="container">
      {data.category.map((item, index) => {
        return (
          <>
            <NavLink to={`/uml/${item.categoryName}`}>{item.categoryName}</NavLink>
            <Accordion key={index} category={item.categoryName} data={item.diagrammes} />
          </>
        )
      })}
    </div>
  )
}

export default Home