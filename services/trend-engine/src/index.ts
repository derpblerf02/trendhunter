
import axios from 'axios';

export async function fetchTrends(region = 'US') {
  // placeholder for Google Trends, Twitter, Reddit integration
  const res = await axios.get(`/api/trends?region=${region}`);
  return res.data.trends; // [{ name, score }, …]
}
