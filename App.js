import React, { useState } from 'react';

export default function App() {
  const [filters, setFilters] = useState({ topic: '', ao: '', format: '' });
  const [question, setQuestion] = useState(null);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const generateQuestion = async () => {
    const response = await fetch('http://localhost:5000/generate-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filters)
    });
    const data = await response.json();
    setQuestion({
      text: data.result,
      marks: 6,
      ao: filters.ao || '2',
      format: filters.format || 'data-based',
      topic: filters.topic || 'Photosynthesis'
    });
    setFeedback(null);
  };

  const evaluateAnswer = async () => {
    const simulatedFeedback = `Your answer was clear but missed references to experimental evidence and terminology. Try to include terms like "proton gradient" and "oxidative phosphorylation."`;
    setFeedback(simulatedFeedback);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Smart Question Generator</h1>

      <div style={{ display: 'flex', gap: '10px' }}>
        <select onChange={(e) => handleFilterChange('topic', e.target.value)}>
          <option value=''>Select Topic</option>
          <option value='Photosynthesis'>Photosynthesis</option>
          <option value='Respiration'>Respiration</option>
          <option value='Immunity'>Immunity</option>
        </select>

        <select onChange={(e) => handleFilterChange('ao', e.target.value)}>
          <option value=''>Select AO Type</option>
          <option value='1'>AO1 (Recall)</option>
          <option value='2'>AO2 (Application)</option>
          <option value='3'>AO3 (Analysis)</option>
        </select>

        <select onChange={(e) => handleFilterChange('format', e.target.value)}>
          <option value=''>Select Format</option>
          <option value='data-based'>Data-Based</option>
          <option value='graph'>Graph Interpretation</option>
          <option value='explain'>Explain Trend</option>
          <option value='practical'>Practical Design</option>
        </select>
      </div>

      <button onClick={generateQuestion} style={{ marginTop: '10px' }}>Generate Question</button>

      {question && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>Topic:</strong> {question.topic}</p>
          <p><strong>AO Type:</strong> AO{question.ao}</p>
          <p><strong>Format:</strong> {question.format}</p>
          <p><strong>Question:</strong> {question.text}</p>
          <p><strong>Marks:</strong> {question.marks}</p>
          <textarea
            placeholder='Type your answer here...'
            value={studentAnswer}
            onChange={(e) => setStudentAnswer(e.target.value)}
            style={{ width: '100%', height: '100px' }}
          />
          <button onClick={evaluateAnswer} style={{ marginTop: '10px' }}>Submit for Feedback</button>
          {feedback && (
            <div style={{ marginTop: '10px', background: '#f0f0f0', padding: '10px' }}>
              <p><strong>Feedback:</strong></p>
              <p>{feedback}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
