import React, { useState } from 'react';
import './App.css';

function App() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const [webpageHtml, setWebpageHtml] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
      setStatus(`Selected: ${e.target.files[0].name}`);
    }
  };

  const handleUpload = async () => {
  if (pdfFile) {
    setStatus('Extracting text with PaddleOCR... 🔍');
    
    // Mock OCR result
    const mockOcrResult = [
      { type: 'title', text: 'Hackathon Submission Generator' },
      { type: 'abstract', text: 'This paper presents a novel approach to automatically generate hackathon submissions from research papers using PaddleOCR and ERNIE.' },
      { type: 'section', text: '1. Introduction\nOur method extracts text and layout from PDFs.' }
    ];
    
    setStatus('Calling ERNIE to generate webpage... 🤖');
    
    // Mock ERNIE response
    const mockErnieResponse = `
    <!DOCTYPE html>
    <html>
    <head><title>Hackathon Submission Generator</title></head>
    <body>
      <div style="max-width:800px;margin:0 auto;padding:20px">
        <h1 style="color:#4285f4">🚀 Hackathon Submission Generator</h1>
        <p><strong>Abstract:</strong> This paper presents a novel approach...</p>
        <h2>✨ Features</h2>
        <ul>
          <li>PDF → Auto webpage in 30 seconds</li>
          <li>PaddleOCR text extraction</li>
          <li>ERNIE AI generation</li>
        </ul>
        <button style="background:#34a853;color:white;padding:15px 30px;border:none;border-radius:5px;font-size:18px">Try Demo →</button>
      </div>
    </body>
    </html>`;

    setWebpageHtml(mockErnieResponse);
    setStatus('✅ Webpage generated! Scroll down ⬇️');
  }
};


  return (
    <div className="App">
      <header className="App-header">
        <h1>PDF → Webpage Generator</h1>
        <p>Upload research paper → Auto generate hackathon webpage!</p>
        
        <div style={{ margin: '20px 0' }}>
          <input 
            type="file" 
            accept=".pdf" 
            onChange={handleFileChange}
            style={{ marginBottom: '10px' }}
          />
          <button onClick={handleUpload} disabled={!pdfFile}>
            Generate Webpage!
          </button>
        </div>
        
        {status && <p>{status}</p>}
        {webpageHtml && (
        <div style={{marginTop: '30px', border: '1px solid #ccc', padding: '20px'}}>
          <h3>Generated Webpage Preview:</h3>
          <iframe srcDoc={webpageHtml} style={{width: '100%', height: '400px', border: '1px solid #ddd'}} />
        </div>
  )}

      </header>
    </div>
  );
}

export default App;
