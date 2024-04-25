import React,{useState,useEffect,useRef} from 'react'
import './App.css'

const App = () => {
  const[quotes,setQuotes]=useState('')
  const textRef=useRef()
  let colors=["#fff00","#90ee90","#ffa500","ff68ff","#a9a9e7"]
  const getQuote=() =>{
    fetch("https://type.fit/api/quotes")
    .then((res)=>res.json())
    .then((data) =>{
      let randomNum=Math.floor(Math.random()*data.length)
      setQuotes(data[randomNum])
    })
  }
  useEffect(()=>{
    getQuote()
  },[])

  useEffect(()=>{
    textRef.current.style.color=colors[Math.floor(Math.random()*colors.length)]
  },[quotes])

  return (
    <div className='app'>
      <div className="quote">
        <p ref={textRef}>{quotes.text}</p>
        <p>Author:{quotes.author}</p>
        <div className="btncontainer">
          <button onClick={getQuote} className='btn' style={{height:'30px'}}>
              Get Quote
          </button>
          <a href={`https://twitter.com/intent/tweet?text=hello${quotes.text}`}
          target='_blank'
           className='btn' style={{height:'30px'}}>
            Tweet
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default App
