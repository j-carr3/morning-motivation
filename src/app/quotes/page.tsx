"use client";

import { useEffect, useState } from 'react';
import styles from "./page.module.css";

const QuotesPage = () => {
  const [quote, setQuote] = useState<string>(''); // Type the state as a string

  useEffect(() => {
    // Fetch the daily quote from the API
    const fetchQuote = async () => {
      try {
        const res = await fetch('/api/quote');
        if (!res.ok) {
          throw new Error('Failed to fetch quote');
        }

        const data = await res.json();
        setQuote(data.quote);
      } catch (err) {
        console.error('Error fetching quote:', err);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>Motivational Quote of the Day</h1>
        <p>{quote || 'Loading quote...'}</p>
      </div>
    </div>
  );
};

export default QuotesPage;
