import Accordion from "../component/Accordion"
import data from "../data/uml.json"

const Home = () => {
  console.log(data.category)

  return (
    <div className="container">
      {data.category.map((item, index) => {
        return (
          <>
            <h2>{item.categoryName}</h2>
            <Accordion key={index} data={item.diagrammes} />
          </>
        )
      })}
    </div>
  )
}

export default Home