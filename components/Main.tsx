import { Headline } from "./Headline"
import classes from './Main.module.css'
import React from "react"
import { Links } from "./Links"

type MainProps = {
	page: string
}

export const Main: React.FC<MainProps> = ({page})=>{
	return(
    <main className={classes.main}>
      <Headline page={page}>
        <code className={classes.code}>pages/{page}.js</code>
      </Headline>
			<Links/>
    </main>
	)
}