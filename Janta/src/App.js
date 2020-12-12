import React, { Profiler, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PersonalFinance from "./views/PersonalFinance";
import ExpenseTracker from "./views/ExpenseTracker";
import Essentials from "./views/Essentials";
import Offers from "./views/Offers";
import Profile from "./views/Profile";
import Overview from "./views/Overview";
import List from "./views/List";
import Stores from "./views/Stores";
import Home from "./views/Home";
import BuyPage from "./views/BuyPage";
import DateNTime from "./views/DateNTime";
import Recieve from "./views/Recieve";
import Payment from "./views/Payment";
import OrderPlaced from "./views/OrderPlaced";
// import { fetchOrganizations } from "./store/actions/organizations"
// import { fetchUser } from "./store/actions/user"
// import { fetchCaseTypes } from "./store/actions/caseTypes"
// import { fetchCases } from "./store/actions/cases"
// import {WithAuth} from "./WithAuth"
// import {
// 	Home,
// 	Clients,
// 	Help,
// 	Services,
// 	People,
// 	Login,
// 	Register,
// 	ForgotPassword,
// 	ResetPassword,
// 	Overview,
// 	CasesList,
// 	Case,
// 	DocumentsList,
// 	Document,
// 	OrganizationsList,
// 	Organization,
// 	Appointments,
// } from "./views"


function App() {
  //all the initial data fetching happens here
  // useEffect(() => {
  // 	async function fetchData() {
  // 		await dispatch(fetchUser())
  // 		await dispatch(fetchOrganizations())
  // 		await dispatch(fetchCaseTypes())
  // 		await dispatch(fetchCases())
  // 	}
  // 	if (localStorage.getItem("access-token")) fetchData()
  // }, [dispatch, auth])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard/profile" component={Profile} />
        <Route
          exact
          path="/dashboard/personalfinance"
          component={PersonalFinance}
        />
        <Route
          exact
          path="/dashboard/expensetracker"
          component={ExpenseTracker}
        />
        <Route exact path="/dashboard/home" component={Home} />
        <Route exact path="/dashboard/essentials" component={Essentials} />
        <Route exact path="/dashboard/offers" component={Offers} />
        <Route exact path="/dashboard/essentials/list" component={List} />
        <Route exact path="/dashboard/essentials/list/stores" component={Stores} />
        <Route exact path="/dashboard/buypage" component={BuyPage} />
        <Route exact path="/dashboard/buypage/date&time" component={DateNTime} />
        <Route exact path="/dashboard/profile/recieve" component={Recieve} />
        <Route exact path="/dashboard/pay" component={Payment} />
        <Route exact path="/dashboard/orderplaced" component={OrderPlaced} />

      </Switch>
    </Router>
  );
}

export default App;
