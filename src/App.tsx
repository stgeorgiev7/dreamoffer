import "./App.css";
import Offer from "./components/Offer";
import image from "./assets/game-designer.png";

function App() {
 return (
  <div className='App'>
   <Offer
    title='Game Designer'
    description="Create concept arts of characters, weapons, buildings, and environments, based on the game design vision, under art director's supervision."
    image={image}
    tags={["color", "circle", "black", "art"]}
   />
  </div>
 );
}

export default App;
