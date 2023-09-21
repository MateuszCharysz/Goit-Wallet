import React from "react";
import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css"

const LoaderComponent = () => {
	return (
		<Circles
			className={css.loader}
			type='Circles'
			color='#4A56E2'
			height={100}
			width={100}
			timeout={3000} 
		/>
	);
};

export default LoaderComponent;

