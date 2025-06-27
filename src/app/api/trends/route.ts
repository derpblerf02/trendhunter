
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get('region') || 'US';

  // In a real application, you would fetch data from Google Trends, Twitter, etc.
  const trends = [
    { name: 'slow-fashion', score: 98 },
    { name: 'cyberpunk', score: 95 },
    { name: 'nostalgia-core', score: 92 },
    { name: 'garden-wave', score: 88 },
    { name: 'maximalism', score: 85 },
  ];

  return NextResponse.json({ trends });
}
