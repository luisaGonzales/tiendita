import React, { Component } from 'react';
import { Order } from './Order';
import './App.css';
import { connect } from 'redux-zero/react';
import { Dish } from './Dish';
import { Body } from './body.js';
import DishDescription from './dishDescription.js';
import CheckoutOrder from './CheckoutOrder';

const App = ({ allDish }) => {
  const dishes = 
  (
  <div><ul id="main" className="k-widget k-listview" role="listbox">
    {allDish.map(item =>
      (<li><Dish image={item.image} name={item.dish} price={item.price} addToCart="" navDetails="#" /></li>))}
  </ul></div>);
  return (
    <div>
      <Body component={<DishDescription dish={allDish[0]}/>} />
    </div>

  );
}
//<Order quantity={12.00}/>

const mapToProps = ({ allDish }) => ({ allDish });
export default connect(mapToProps)(App);
