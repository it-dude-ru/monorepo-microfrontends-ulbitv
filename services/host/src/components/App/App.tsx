import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import img01 from "@/assets/img01.jpeg";
import Calendar from "@/assets/calendar.svg";
import User from "@/assets/user.svg";

export const App = () => {
	return (
		<div>
			<h1>
				Page
			</h1>
			<hr />
			<Link to={'/about'}>about</Link>
			<hr/>
			<Link to={'/shop'}>shop</Link>
			<hr />
			<Outlet/>
		</div>
	);
};