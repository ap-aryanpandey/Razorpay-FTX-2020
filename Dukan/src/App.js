import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import CreditStatus from "./views/CreditStatus";
import "./App.css";
import Inventory from "./views/Inventory";
import OrderForm from "./views/Orderform";
import FinancialProfile from './views/FinancialProfile';
import Blog from "./views/RarzorpayBlog";
import Analytics from "./views/Analytics";
import ApplyCredit from "./views/ApplyCredit";
import Orders from './views/Orders'
import CreateInvoice from './views/CreateInvoice';
import Invoices from './views/Invoices';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FinancialProfile}/>
        <Route path="/dashboard/home" component={FinancialProfile} />
        <Route path="/dashboard/credit/status" component={CreditStatus} />
        <Route path="/dashboard/inventory" component={Inventory} />
        <Route path="/dashboard/orderform" component={OrderForm} />
        <Route path="/dashboard/orderform" component={OrderForm} />
        <Route path="/dashboard/tesing" component={Blog} />
        <Route path="/dashboard/analytics" component={Analytics} />
        <Route path="/dashboard/credit/apply" component={ApplyCredit} />

        <Route path="/dashboard/invoices" component={Invoices} />
        <Route path="/invoices/create" component={CreateInvoice} />
        <Route path="/dashboard/orders" component={Orders} />

        
      </Switch>
    </Router>
  );
}

export default App;
