import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = await kv.get('cp_data');
    return res.status(200).json(data || { htmlData: null });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to load data' });
  }
}
