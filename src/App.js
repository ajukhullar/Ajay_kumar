
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "../src/componets/header"
import Banners from "../src/componets/banner"
import Personal from "../src/componets/about"
import Service from "../src/componets/service"
import Workpart  from '../src/componets/workp';
import Counter  from '../src/componets/counter';
import Footer  from '../src/componets/footer';
import Footerbottom  from '../src/componets/footerbottom';
import ContactUs  from '../src/componets/Contact';
import Copyr  from '../src/componets/copyright';
import ScrollButton from "../src/componets/scrolltop"; 



function App() {
  return (
    <div className="App">
      <Head />
  <Banners />
  <Personal />
 
    <Service />
    <Workpart />
    <Counter />
    <Footer />
    <ContactUs />
    <Footerbottom />
    <Copyr />
    <ScrollButton />
    </div>
  );
}
export default App;
