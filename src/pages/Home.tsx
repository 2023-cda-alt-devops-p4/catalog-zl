import Accordion from "../component/Accordion"
import data from "../data/uml.json"

const Home = () => {

  return (
    <div className="container">
      {data.category.map((item, index) => {
        return (
          <>
            <h2>{item.categoryName}</h2>
            <Accordion key={index} category={item.categoryName} data={item.diagrammes} />
          </>
        )
      })}
    </div>
  )
}

export default Home