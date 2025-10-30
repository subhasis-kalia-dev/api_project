import { useState } from "react"

import './InputUrl.css'


const BackEndAPI = 'http://localhost:8000/summarize'

function InputUrl(){

        
        const[url, setUrl] = useState()
        const[summary, setSummary] = useState('Summary will appear here...')


        async function sendDataToBackend(){
                setSummary('Fetching and summarizing... please wait.');

                const response = await fetch(

                        BackEndAPI, {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                        },
                                body: JSON.stringify({ url:url }),
                        }

                )

                  const data = await response.json();

                   if (data.summary) {
                        setSummary(data.summary);
                 } else {
                        setSummary('Could not get a summary.');
    }

        }

      

         
return(
        <>
   <div className="mainContainer">
      <h1 className="heroTitle">Hey 👋 Drop a website link!</h1>
      <p className="heroSubtitle">
        Paste any website URL below — we’ll analyze and summarize it for you in seconds.
      </p>

      <div className="displayStyleURL">
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div className="submitStyle">
        <button onClick={sendDataToBackend}>
          Summarize this Website
        </button>
      </div>

      <div className="FinalDisplay">
        <p>{summary}</p>
      </div>

       <footer className="footerSection">
        <p className="disclaimerText">
          ⚠️ Disclaimer: Not every website can be summarized. This app uses AI to analyze and
          generate content automatically — accuracy may vary. Please keep that in mind.
        </p>
        <p className="authorText">Author — <strong>Subhasis Kalia</strong></p>
      </footer>
    </div>
  ;

   

    </>
)


}

export default InputUrl