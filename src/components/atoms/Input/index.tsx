"use client";

import React, { InputHTMLAttributes } from "react";
import style from "./style.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	type?: "search" | "text" | "email" | "password";
}

const Input: React.FC<Props> = ({ type = "text", ...standardProps }) => {
	return (
		<input
			className={style.input}
			type={type}
			{...standardProps}
		/>
	);
};

export default Input;
