import './App.scss';
import React, {useState} from 'react';

function App() {
  const [markdown, setMarkdown] = useState('');

  // const markdownUpdate = () =>{
  //   setMarkdown()
  // }

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
