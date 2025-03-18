import fs from 'fs';
import path from 'path';

interface QuoteResponse {
  quote: string;
}

export async function GET(): Promise<Response> {
  const dailyQuotePath = path.join(process.cwd(), 'daily_quote.txt');

  try {
    // Read the daily_quote.txt file to get the quote
    const quote = await fs.promises.readFile(dailyQuotePath, 'utf-8');
    
    // Return the quote in a JSON response
    return new Response(JSON.stringify({ quote } as QuoteResponse), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response('Error loading quote', { status: 500 });
  }
}