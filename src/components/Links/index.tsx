import React from "react"
import classes from "./Links.module.css"

const ITEMS = [
	{
		href: "https://nextjs.org/docs", 
		title: "Documentation", 
		discription: "Find in-depth iformation about Next.js features and API."
	},
	{
		href: "https://nextjs.org/learn", 
		title: "Learn", 
		discription: "Find in-depth iformation about Next.js features and API."
	},
	{
		href: "https://github.com/vercel/next.js/tree/master/examples", 
		title: "Examples", 
		discription: "Find in-depth iformation about Next.js features and API."
	},
	{
		href: "https://vercel.com", 
		title: "Deploy", 
		discription: "Find in-depth iformation about Next.js features and API."
	},
]

export const Links = ()=>{
  return(
		<div className={classes.grid}>
			{ITEMS.map((item, index) =>{
				return(
					<a key={index} href={item.href} className={classes.card}>
						<h3>{item.title} &rarr;</h3>
						<p>{item.discription}</p>
					</a>
				)
			})}
		</div>
	)
}