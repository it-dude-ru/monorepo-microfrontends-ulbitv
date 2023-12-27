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
				Admin module
			</h1>
			<Outlet/>
		</div>
	);
};