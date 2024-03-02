import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return <div>
    <Header />
    <Menu />
    <Footer />
  </div>
}

function Header() {
  return <header className='header'>
    <h1 >Fast React Pizza Co.</h1>
  </header>
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>

    </main>
  );
}


function Pizza({ pizzaObj }) {


  if (pizzaObj.soldOut) {
    // return null
  }
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
      </div>
    </li >
  )
}

function Footer() {
  const hour = new Date().getHours()
  const OpenHour = 12
  const CloseHour = 22
  const isOpen = hour >= OpenHour && hour <= CloseHour

  return (
    <footer className='footer'>
      {isOpen ? (
        <div className='order'>
          <p>we are currently open till {CloseHour}:00</p>
          <button className='btn'>Order</button>
        </div>
      ) : <p>We will open at {OpenHour}:00</p>}
    </footer>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)