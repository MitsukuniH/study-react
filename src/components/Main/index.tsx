import { Headline } from "src/components/Headline"
import { Links } from "src/components/Links"
import classes from './Main.module.css'
import React from "react"

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