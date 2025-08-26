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
  const [showMore, setShowMore] = useState(false);

  function handleCount(e){
    const value = e.target.value;
    const length = check2 ? value.split(" ").join("").length : value.length;
    if(!check || maxChars === "") {
      setCount(value)
    } else{
      if (length <= Number(maxChars)){
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

  const currentLength = check2 ? count.split(" ").join("").length : count.length;

  
  const letterCounts = {};
  for (let char of count.toLowerCase()) {
    const code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      letterCounts[char] = (letterCounts[char] || 0) + 1;
    }
  }

  const sortedLetters = Object.entries(letterCounts).sort((a, b) => b[1] - a[1]);
  const totalLetters = Object.values(letterCounts).reduce((a, b) => a + b, 0);
  const visibleLetters = showMore ? sortedLetters : sortedLetters.slice(0, 5);
  

  return (
    <div style={{backgroundImage: toggle ? `url(${bgLight})` : `url(${bgDark})`, backgroundSize: "cover", backgroundPosition: "center"}}>
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
          <input type="text" value={count} style={{ width: "100%", height: "100px", marginTop: 20, backgroundColor: toggle ? "rgb(242, 241, 247)" : "rgb(34, 34, 44)", color:  toggle ? "black" : "white", border: check && maxChars !== "" && currentLength >= Number(maxChars) ? "2px solid red" : toggle ? "1px solid rgba(193, 193, 193, 1)" : "1px solid rgba(42, 42, 42, 1)", outline: "none", borderRadius: 8}} onChange={handleCount}/>
          {check && maxChars !== "" && currentLength >= Number(maxChars) && (
            <p style={{ color: "red", marginTop: "10px", fontSize: 14 }}>
              Character limit {maxChars} reached
            </p>)}
          <div style={{marginTop: 10}}>
            <input type="checkbox" id='excludeSpace' onChange={handleCheck2}/>
            <label htmlFor="excludeSpace" style={{color: toggle ? "black" : "white", marginLeft: 10, fontSize: 13}}>Exclude Spaces</label>
            <input type="checkbox" id='charLimit'style={{marginLeft: 30}} onChange={handleCheck}/>
            <label htmlFor="charLimit" style={{color: toggle ? "black" : "white", marginLeft: 10, fontSize: 13}}>Set Character Limit</label>
            <input type="number" style={{width: 40, display: check ? "inline-block" : "none", marginLeft: 10}} onChange={handleMaxChars}/>
          </div>
        </div>
        <div style={{display: "flex", gap: 13, marginTop: 50}}>
          <div style={{width: "33%", height: 120, backgroundColor: "rgb(211, 161, 250)", overflow: "hidden", position: "relative", padding: "0 10px", borderRadius: 8}}>
            <img src={pattern1} alt="" style={{display: "block", marginLeft: "auto", marginRight: "-30px", width: "50%"}}/>
            <p style={{ position: "absolute", top: 20, fontSize: 50 }}>
              {check2
                ? (count.split(" ").join("").length < 10 ? `0${count.split(" ").join("").length}` : count.split(" ").join("").length)
                : (characterCount < 10 ? `0${characterCount}` : characterCount)
              }
            </p>
            <p style={{position: "absolute", top: 80, fontSize: 14}}>{check2 ? "Total Characters (no space)" : "Total Characters"}</p>
          </div>
          <div style={{width: "34%", height: 120, backgroundColor: "rgb(255, 160, 0)", overflow: "hidden", position: "relative", padding: "0 10px", borderRadius: 8}}>
            <img src={pattern2} alt="" style={{display: "block", marginLeft: "auto", marginRight: "-30px", width: "50%"}} />
            <p style={{position: "absolute", top: 20, fontSize: 50}}>{wordCount < 10 ? `0${wordCount}` : wordCount}</p>
            <p style={{position: "absolute", top: 80, fontSize: 14}}>Word Count</p>
          </div>
          <div style={{width: "33%", height: 120, backgroundColor: "rgb(211, 129, 89)", overflow: "hidden", position: "relative", padding: "0 10px", borderRadius: 8}}>
            <img src={pattern3} alt="" style={{display: "block", marginLeft: "auto", marginRight: "-30px", width: "50%"}}/>
            <p style={{position: "absolute", top: 20, fontSize: 50}}>{sentenceCount < 10 ? `0${sentenceCount}` : sentenceCount}</p>
            <p style={{position: "absolute", top: 80, fontSize: 14}}>Sentence Count</p>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <h2 style={{ color: toggle ? "black" : "white" }}>Letter Density</h2>
          <div style={{ marginTop: 15 }}>
            {visibleLetters.length === 0
            ? <p style={{ color: toggle ? "black" : "white", fontSize: 14 }}>No characters found. Start typing to see letter denisity</p>
            : visibleLetters.map(([letter, count]) => {
              const percent = ((count / totalLetters) * 100).toFixed(2);
              return (
                <div key={letter} style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ width: 20, color: toggle ? "black" : "white" }}>{letter.toUpperCase()}</span>
                  <div style={{ flex: 1, background: toggle ? "rgb(221, 221, 221)" : "rgb(51, 51, 51)", height: 10, borderRadius: 5, margin: "0 10px" }}>
                    <div style={{ width: `${percent}%`, height: "100%", background: "rgb(211,161,250)", borderRadius: 5 }}></div>
                  </div>
                  <span style={{ color: toggle ? "black" : "white", fontSize: 12 }}>
                    {count} ({percent}%)
                  </span>
                </div>
              );
            })}
          </div>

          {sortedLetters.length > 5 && (
            <button
              onClick={() => setShowMore(!showMore)}
              style={{
                marginTop: 10,
                background: "none",
                border: "none",
                color: "rgb(211,161,250)",
                cursor: "pointer",
                fontSize: 14
              }}
            >
              {showMore ? "See less" : "See more"}
            </button>
          )}
        </div>
        

      </main>
    </div>
  )
}

export default App
