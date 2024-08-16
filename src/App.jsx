import Carousel from "./components/Carousel"
import { slides } from "/src/data/carouselData.json"

const App = () => {
  return (
    <div className="container">
      <Carousel data={slides} />
    </div>
  )
}

export default App