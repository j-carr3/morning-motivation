import fs from 'fs';
import path from 'path';

const quotesFilePath = path.join(process.cwd(), 'quotes.txt');
const dailyQuoteFilePath = path.join(process.cwd(), 'daily_quote.txt');

// Function to set the daily quote
export async function GET() {
  try {
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
  
      return new Response(JSON.stringify({ quote: randomQuote }), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    });
  } catch (error) {
    console.error(error);
    return new Response('Error loading quote', { status: 500 });
  }
}