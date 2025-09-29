// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import UserFavoriteAnimals from './UserFavoriteAnimals.jsx';
import Exercise3 from './Exercise3.jsx';
import './App.css'
import DemoCarousel from './DemoCarousel.jsx';
function App() {
      const myelement = <h1>I Love JSX!</h1>;
      const sum =5 + 5;
      const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

  return (
    <>
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
    </>
  )
}

export default App
