import React from "react"
import classes from "./Links.module.css"


type LinkProps = {
	link: string,
	title: string,
	content: string,
}
const Link: React.FC<LinkProps> = ({link, title, content})=>{
	return(
		<a href={link} className={classes.card}>
			<h3>{title} &rarr;</h3>
			<p>{content}</p>
		</a>
	)
}

export const Links = ()=>{
  return(
		<div className={classes.grid}>
			<Link 
				link="https://nextjs.org/docs" 
				title="Documentation" 
				content="Find in-depth iformation about Next.js features and API."
			/>
			<Link 
				link="https://nextjs.org/learn" 
				title="Learn" 
				content="Find in-depth iformation about Next.js features and API."
			/>
			<Link 
				link="https://github.com/vercel/next.js/tree/master/examples" 
				title="Examples" 
				content="Find in-depth iformation about Next.js features and API."
			/>
			<Link 
				link="https://vercel.com" 
				title="Deploy" 
				content="Find in-depth iformation about Next.js features and API."
			/>
		</div>
	)
}