
export default function ArtistCard({ artist }: { artist: string }) {
  return (
    <div className="block p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{artist}</h5>
    </div>
  );
}
