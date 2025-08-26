import logoDark from './images/logo-dark-theme.svg';
import logoLIght from './images/logo-light-theme.svg';
import iconSun from './images/icon-sun.svg';
import iconMoon from './images/icon-moon.svg'
import bgDark from './images/bg-dark-theme.png';
import bgLight from './images/bg-light-theme.png';
import pattern1 from './images/pattern-character-count.svg';
import pattern2 from './images/pattern-word-count.svg';
import pattern3 from './images/pattern-sentence-count.svg';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState("");
  const [check, setCheck] = useState(false);
  const [maxChars, setMaxChars] = useState("");
  const [check2, setCheck2] = useState(false);
  const [toggle, setToggle] = useState(false);


  function handleCount(e){
    if(!check || maxChars === "") {
      setCount(e.target.value)
    } else{
      if (e.target.value.length <= Number(maxChars)){
        setCount(e.target.value)
      }
    }
  }

  function handleCheck(e){
    setCheck(e.target.checked)
  }

  function handleMaxChars(e){
    setMaxChars(e.target.value)
  }

  function handleCheck2(e){
    setCheck2(e.target.checked)
  }

  function handleToggle(){
    setToggle(!toggle)
  }

  const characterCount = count.length

  const wordCount = count
    .split(" ")
    .filter(word => {
      for (let char of word.toLowerCase()) {
        const code = char.charCodeAt(0);
        if (code >= 97 && code <= 122) return true;
      }
      return false;
    }).length;

    const sentenceCount = count
      .split(".").join("|")
      .split("!").join("|")
      .split("?").join("|")
      .split("|")
      .filter(sentence => {
        for (let char of sentence.toLowerCase()) {
          const code = char.charCodeAt(0);
          if (code >= 97 && code <= 122) return true;
        }
        return false;
      }).length

  return (
    <div style={{backgroundImage: toggle ? `url(${bgLight})` : `url(${bgDark})`}}>
      <main>
        <header>
          <img src={toggle ? logoLIght : logoDark} alt="" />
          <img src={toggle ? iconMoon : iconSun} alt="" onClick={handleToggle} style={{cursor: "pointer"}}/>
        </header>
        <div>
          <h1 style={{ color: toggle ? "black" : "white", fontSize: "40px", textAlign: "center", marginTop: "30px" }}>
          Analyze your text <br />
          <span style={{ marginTop: "10px" }}>in real-time</span>
          </h1>
          <input type="text" value={count} style={{ width: "100%", height: "100px", marginTop: 20, backgroundColor: toggle ? "rgb(242, 241, 247)" : "rgb(34, 34, 44)", color:  toggle ? "black" : "white", border: check && maxChars !== "" && count.length >= Number(maxChars) ? "2px solid red" : toggle ? "1px solid rgba(193, 193, 193, 1)" : "1px solid rgba(42, 42, 42, 1)", outline: "none"}} onChange={handleCount}/>
          {check && maxChars !== "" && count.length >= Number(maxChars) && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Character limit {maxChars} reached
            </p>)}
          <div style={{marginTop: 10}}>
            <input type="checkbox" id='excludeSpace' onChange={handleCheck2}/>
            <label htmlFor="excludeSpace" style={{color: toggle ? "black" : "white", marginLeft: 10}}>Exclude Spaces</label>
            <input type="checkbox" id='charLimit'style={{marginLeft: 30}} onChange={handleCheck}/>
            <label htmlFor="charLimit" style={{color: toggle ? "black" : "white", marginLeft: 10}}>Set Character Limit</label>
            <input type="number" style={{width: 40, display: check ? "inline-block" : "none", marginLeft: 10}} onChange={handleMaxChars}/>
          </div>
        </div>
        <div style={{display: "flex", gap: 13, marginTop: 50}}>
          <div style={{width: "33%", height: 120, backgroundColor: "rgb(211, 161, 250)", overflow: "hidden", position: "relative", padding: "0 10px"}}>
            <img src={pattern1} alt="" style={{display: "block", marginLeft: "auto", marginRight: "-30px", width: "50%"}}/>
            <p style={{ position: "absolute", top: 50 }}>
              {check2
                ? (count.split(" ").join("").length < 10 ? `0${count.split(" ").join("").length}` : count.split(" ").join("").length)
                : (characterCount < 10 ? `0${characterCount}` : characterCount)
              }
            </p>
            <p style={{position: "absolute", top: 80}}>{check2 ? "Total Characters (no space)" : "Total Characters"}</p>
          </div>
          <div style={{width: "34%", height: 120, backgroundColor: "rgb(255, 160, 0)", overflow: "hidden", position: "relative", padding: "0 10px"}}>
            <img src={pattern2} alt="" style={{display: "block", marginLeft: "auto", marginRight: "-30px", width: "50%"}} />
            <p style={{position: "absolute", top: 50}}>{wordCount < 10 ? `0${wordCount}` : wordCount}</p>
            <p style={{position: "absolute", top: 80}}>Word Count</p>
          </div>
          <div style={{width: "33%", height: 120, backgroundColor: "rgb(211, 129, 89)", overflow: "hidden", position: "relative", padding: "0 10px"}}>
            <img src={pattern3} alt="" style={{display: "block", marginLeft: "auto", marginRight: "-30px", width: "50%"}}/>
            <p style={{position: "absolute", top: 50}}>{sentenceCount < 10 ? `0${sentenceCount}` : sentenceCount}</p>
            <p style={{position: "absolute", top: 80}}>Sentence Count</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
