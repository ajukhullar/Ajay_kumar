import Recat from "react";
import {Col} from "react-bootstrap"

import banner2 from "../componets/Images/banner_2.jpg"
import Part from "../componets/partical"
class Banners extends Recat.Component{
    render() {
        return(
            
            <Col id="banner">
<Part />
<img
      className="d-block w-100"
      src={banner2}
      alt="First slide"
    />
            </Col>
        )
    }
}

export default Banners;