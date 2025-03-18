import fs from 'fs';
import path from 'path';
import cron from 'node-cron';

const quotesFilePath = path.join(process.cwd(), 'quotes.txt');
const dailyQuoteFilePath = path.join(process.cwd(), 'daily_quote.txt');

// Function to set the daily quote
const setDailyQuote = () => {
  fs.readFile(quotesFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading quotes file:', err);
      return;
    }

    const quotes = data.split('\n').filter(line => line.trim() !== '');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    fs.writeFile(dailyQuoteFilePath, randomQuote, (err) => {
      if (err) {
        console.error('Error saving daily quote:', err);
      } else {
        console.log('Daily quote saved:', randomQuote);
      }
    });
  });
};

// Schedule the cron job to run at 6 AM every day
cron.schedule('0 6 * * *', setDailyQuote); // At 6 AM every day