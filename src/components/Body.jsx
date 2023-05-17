import React, { useState, useEffect } from 'react';
import './Body.css';

function Body() {
  const words = [
    'In',
    'Chronicle',
    'everything',
    'is',
    'made',
    'with',
    'with',
    'Blocks',
    'that',
    'come',
    'with',
    'pixel',
    'perfect',
    'design,',
    'interactivity',
    'and',
    'motion',
    'out',
    'of',
    'the',
    'box.',
    'Instead',
    'of',
    'designing',
    'from',
    'scratch,',
    'simply',
    'choose',
    'the',
    'right',
    'one',
    'from',
    'our',
    'spanbrary',
    'of',
    'blocks',
    'and',
    'see',
    'the',
    'magic',
    'unfold.'
  ];

  const styles = {
    main: {
      display: 'flex',
      flexWrap: 'wrap',
      color: 'white',
      fontSize: '3rem',
      lineHeight: '1',
      position: 'fixed',
      width: '50%',
      margin: '200px auto',
      textAlign: 'center'
    },
    span: {
      margin: '0.1em',
      opacity: '0.2',
      transition: 'opacity 0.5s ease'
    },
    span2: {
      margin: '0.1em',
      opacity: '1',
      transition: 'opacity 0.5s ease'
    }
  };

  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxVisibleWords = Math.floor((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * words.length);
      setVisibleWords(maxVisibleWords);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [words]);

  return (
    <div style={{ height: '270vh', width: '100%', paddingTop: '200px', display: 'flex', justifyContent: 'center' }}>
      <p style={styles.main} className="styled">
        {words.map((word, index) => (
          <span key={index} style={index < visibleWords ? styles.span2 : styles.span}>
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Body;
