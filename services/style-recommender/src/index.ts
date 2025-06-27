
export function suggestArtists(trend: string) {
  // map keywords → curated artist list
  const artistsMap = {
    "slow-fashion": ['Eimear McBride', 'Hannah Lichtenstein'],
    "cyberpunk":   ['Syd Mead', 'Josan Gonzalez'],
  };
  return (artistsMap as any)[trend] || ['Contemporary Artist A', 'Contemporary Artist B', 'Contemporary Artist C', 'Contemporary Artist D', 'Contemporary Artist E'];
}

export function generatePalette(trend: string) {
  // stub: return an array of hex colors
  return ['#FF6F61','#6B5B95','#88B04B','#F7CAC9','#92A8D1'];
}
