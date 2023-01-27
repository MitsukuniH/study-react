import { Headline } from "src/components/Headline"
import { Links } from "src/components/Links"
import classes from './Main.module.css'
import React, { useCallback, useEffect, useState } from "react"

type MainProps = {
	page: string
}

export const Main: React.FC<MainProps> = ({page})=>{

  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(true);
  const [list, setList] = useState<string[]>([]);

  const handleClick = useCallback(()=>{
    if(count < 10){
      setCount(count => count + 1);
    }
  }, [count])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>)=> {
    if(e.target.value.length > 5){
      alert("too long");
      return;
    }
    setText(e.target.value);
  }, [])

  const handleDisplay = useCallback(()=>{
    setIsShow(isShow => !isShow)
  }, [])

  const handleAdd = useCallback(()=>{
    setList(prevList => [...prevList, text])
    setText("");
  }, [text])
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    }
  },[count]);
	return(
    <main className={classes.main}>
      {isShow? <h1>{count}</h1>: null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow?"非表示":"表示"}</button>
      <input type="text" value={text} onChange={handleChange}/>
      <ul>
        {list.map((item, index)=>
        <div key={index}>{item}</div>
        )}
      </ul>
      <button onClick={handleAdd}>追加</button>
      <Headline page={page}>
        <code className={classes.code}>pages/{page}.js</code>
      </Headline>
			<Links/>
    </main>
	)
}