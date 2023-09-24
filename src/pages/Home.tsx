import Accordion from "../component/Accordion"
import data from "../data/uml.json"

const Home = () => {
  return (
    <div className="container">
      <Accordion data={data} />
    </div>
  )
}

export default Home