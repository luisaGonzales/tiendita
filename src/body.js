import React, { Component } from 'react';
import logo from './logo.svg';
import './Body.css';

const Body = ()=> {
  
     return (

 <div id="application">
            <div>
                <div id="wrapper">
                    <div id="header">
                        <h1 className="logo"><a href="#/"></a></h1>
                        <a id="cart-info" href="#">Shopping Cart<span><span data-bind="text: cart.contentsCount"></span> items</span></a>
                    </div>
                    <p data-bind="visible: cart.cleared" >Thank you for your order!</p>
                    <div id="main-section">
                        <section id="pre-content">
                            <div>
                                <div id="shop-info" data-bind="attr:{className: cartContentsClass}" className="empty">

                                </div>
                            </div>

                        </section>
                        <section id="content">
                            <div>
                                <ul data-role="listview" data-bind="source:items" data-template="item" id="main" className="k-widget k-listview" role="listbox"></ul>
                            </div>

                        </section>
                        
                    </div>
                    <div id="footer">
                        <p>"Learn more about Kendo UI"
                        <sup>®</sup>
                        "SPA at"
                        <a href="http://docs.telerik.com/kendo-ui/getting-started/framework/spa/overview">docs.telerik.com/kendo-ui</a>
                        "."
                        </p>
                        
                        <p>Copyright © 2017, Progress Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.</p>
                    </div>
                </div>

            </div>
        </div>

       
      );
  
}

export default Body;