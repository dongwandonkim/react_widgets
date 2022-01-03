import React, { useState, useEffect } from 'react';
import axios from 'axios';

//POST https://translation.googleapis.com/language/translate/v2
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

export default function Convert({ language, text }) {
  const [convertedText, setConvertedText] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const getTranslatedText = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      console.log(data.data.translations[0].translatedText);
      setConvertedText(data.data.translations[0].translatedText);
    };
    if (debouncedText.length) getTranslatedText();
  }, [language, debouncedText]);
  return <div>{convertedText}</div>;
}
