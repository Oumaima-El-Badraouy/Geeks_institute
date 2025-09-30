import React,{useState} from 'react'

export default function Vote() {
  let [counter,setCounter]=useState({
    jscounter:0,
    phpcounter:0,
    ccounter:0,
    javacounter:0,
  });
  function handleclick(lang){
    setCounter(prevCounter=>({...prevCounter,[lang]:prevCounter[lang]+1}));
  }
  return (
    <div>
      <h1>Vote Your Language!</h1>
    <div>
  {["jscounter", "phpcounter", "ccounter", "javacounter"].map((lang, i) => {
    const labels = ["JavaScript", "PHP", "C", "Java"];

    return (
      <h2 
        key={i}
        style={{ 
          backgroundColor: "gray", 
          paddingTop: "15px", 
          width: "300px", 
          marginBottom: "10px", 
          borderRadius: "5px", 
          padding: "10px",
          color: "white"
        }}
      >
        {counter[lang]} {labels[i]}
        <button 
          onClick={() => handleclick(lang)} 
          style={{ 
            color: "white", 
            backgroundColor: "green", 
            marginLeft: "10px", 
            border: "none", 
            padding: "5px 15px", 
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Click here
        </button>
      </h2>
    );
  })}
</div>

    </div>
  )
}
