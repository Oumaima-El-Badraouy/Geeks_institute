import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';
class DemoCarousel extends React.Component {
   render() {
       return (
        <div style={{ width: "500px", height: "300px", margin: "auto" }}>

           <Carousel style={{ width:'20px'}}>
               <div>
                   <img src="/hongkong.jpg" alt="Slide 1" />
                   <p className="legend">Hong Kong</p>
               </div>
               <div>
                   <img src="/Japan.webp" alt="Slide 2" />
                   <p className="legend">Japan</p>
               </div>
               <div>
                   <img src="/LasVegas.webp" alt="Slide 3" />
                   <p className="legend">Las Vegas</p>
               </div>
               <div>
                   <img src="/Macao.webp" alt="Slide 4" />
                   <p className="legend">Macao</p>
               </div>
           </Carousel>
    </div>
       );
   }
}


export default DemoCarousel;