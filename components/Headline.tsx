import React from "react";
import classes from "./Headline.module.css";

type HeadlineProps = {
	children?: React.ReactNode,
	page: string
}

export const Headline: React.FC<HeadlineProps> = ({children, page})=>{
  return(
    <div>
			<h1 className={classes.title}>{page} Page</h1>
			<p className={classes.description}>
				Get started by editing {children}
			</p>
    </div>
  )
}