import classes from "./Footer.module.css"

export const Footer = ()=>{
  return(
    <footer className={classes.footer}>
			<a
				href="https://vercel.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				Thanks by {" "}
				<img src="/vercel.svg" alt="Vercel Logo" className={classes.logo}/>
			</a>
    </footer>
  )
}