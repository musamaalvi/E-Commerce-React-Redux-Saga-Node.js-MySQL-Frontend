import React from 'react';
import Homepage from './Pages/Home.page'
import Footer from './Components/Footer/Footer'
import './assets/stylesheets/main.scss';
//import ReviewForm from "./components/review/reviewForm"
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import ProductDetail from "./Pages/ProductDetail.page";
import ProductListPage from "./Pages/ProductList.page";
import Checkout from './Pages/Checkout.page'
import Sales from './Pages/Sales.page';
import OrderConfirmation from "./Pages/OrderConfirmation.page"
import Header from './Components/Header/Header'
import { withRouter } from 'react-router';

// BUG
//import ReviewModal from "./components/review/reviewModal"

//      <ReviewForm/>
//     <Homepage />
//<Footer />

export default function App() {

  return (
    <div className="App">
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={withRouter(Homepage)} />
          <Route exact path="/all" component={withRouter(ProductListPage)} />
          <Route exact path="/sales" component={withRouter(Sales)} />
          <Route exact path="/product/:id" component={withRouter(ProductDetail)} />
          <Route exact path='/checkoutInfo' component={withRouter(Checkout)} />
          <Route exact path='./orderConfirmation' component={withRouter(OrderConfirmation)} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
