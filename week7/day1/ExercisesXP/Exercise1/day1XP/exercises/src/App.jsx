// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import UserFavoriteAnimals from './UserFavoriteAnimals.jsx';
import Exercise3 from './Exercise3.jsx';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import DemoCarousel from './DemoCarousel.jsx';
import BootstrapCard from './BootstrapCard.jsx';
function App() {
      const myelement = <h1>I Love JSX!</h1>;
      const sum =5 + 5;
      const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
      const celebrities = [
    {
        title: 'Bob Dylan',
        imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
        buttonLabel: 'Go to Wikipedia',
        buttonUrl: 'https://en.wikipedia.org/wiki/Bob_Dylan',
        description:
            'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
    },
    {
        title: 'McCartney',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
        buttonLabel: 'Go to Wikipedia',
        buttonUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
        description:
            'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.',
    },
]

  return (
    <div>
      <div>
{/* Exercise 1: with JSX */}

      <p>Hello World! {myelement}</p>
     <p> React is {sum} times better with JSX</p>

{/* Exercise 2 : Object */}
    <h3> hello {user.firstName} {user.lastName}  </h3>
       </div>
        <UserFavoriteAnimals favAnimals={user.favAnimals}/>
        <Exercise3/>
        <DemoCarousel/>
       <p style={{ paddingTop:'200px' }}> 
         <BootstrapCard celebrities={celebrities} />
      </p>
    </div>
  )
}

export default App
