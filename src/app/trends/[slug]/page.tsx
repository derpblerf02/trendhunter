
'use client'

import { useParams } from 'next/navigation';
import { suggestArtists, generatePalette } from 'services/style-recommender/src';
import ArtistCard from '@/components/ArtistCard';

export default function TrendDetail() {
  const params = useParams();
  const trend = params.slug as string;

  const artists = suggestArtists(trend);
  const palette = generatePalette(trend);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{trend}</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Suggested Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {artists.map(artist => <ArtistCard key={artist} artist={artist} />)}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Mood Board</h2>
        <div className="flex space-x-2">
          {palette.map(color => (
            <div key={color} style={{ backgroundColor: color }} className="w-20 h-20 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
