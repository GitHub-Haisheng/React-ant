import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute,IndexRedirect } from "react-router";

import Indexs from "../modules/Index/index";
import Users from "../modules/Users/users";
import Product from "../modules/Product/Product";
import Log from "../modules/Log/login";
// import Font from "Font";
ReactDOM.render(
		<Router history = {hashHistory}>
		<Route path="/">
			<IndexRoute component={Log}></IndexRoute>
			<Route path="log" component={Log}></Route>
			<Route path="index" component={Indexs}>
			 <IndexRedirect to="users" />	
				// <IndexRoute component={Users}></IndexRoute>
				<Route path="/users" component={Users}></Route>
				<Route path="/Product" component={Product}></Route>
			</Route>
		</Route>
		</Router>
	,document.getElementById('content'));
 