import './App.scss';
import React, {useState} from 'react';
// import { marked } from '../js/marked';
import marked from 'marked';

// marked.setOptions({
//   breaks: true
// })

function App() {
  const [markdown, setMarkdown] = useState('');

  function handleChange(event) {
    setMarkdown(event.target.value)
  }


  return (
    <div className="App">

      <div className="container" id="container">
        
        <div className="editor-box" id="editor-box">
          <h3>Editor</h3>
          <textarea name="editor" id="editor" cols="30" rows="10" placeholder="Content" onChange={handleChange}></textarea>
        </div>

        <div className="preview-box" id="preview-box">
          <h3>Preview</h3>
          <div className="preview" id="preview">{markdown}</div>
        </div>

      </div>

    </div>
  );
}

export default App;
