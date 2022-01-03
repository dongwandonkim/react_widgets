import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Korean',
    value: 'ko',
  },
  {
    label: 'Japanese',
    value: 'ja',
  },
  {
    label: 'Franch',
    value: 'fr',
  },
];

export default function Translaste() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label="Seleact a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header"> Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
}
