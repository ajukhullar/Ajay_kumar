
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "../src/componets/header"
import Slider from "../src/componets/slider"
import Personal from "../src/componets/about"





function App() {
  return (
    <div className="App">
      <Head />
  <Slider />
  <Personal />
 

    </div>
  );
}
export default App;
