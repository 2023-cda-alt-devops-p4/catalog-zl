import { useParams } from "react-router-dom"
import uml from "../data/uml.json";

const Uml = () => {
  const { category, name } = useParams();
  console.log(uml, category, name)

  return (
    <div className="container">
    </div> 
  )
}

export default Uml