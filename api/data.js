// Vercel Serverless Function — Baby Growth Data API
// Uses Vercel Blob for persistent storage
import { put, get, list, del } from '@vercel/blob';

const BLOB_NAME = 'mbga-data.json';
const DEFAULT_DATA = {
  baby: { name: '', birthDate: '', gender: 'boy' },
  feedings: [],
  diapers: [],
  growth: []
};

export async function GET() {
  try {
    const { blobs } = await list({ prefix: BLOB_NAME });
    if (blobs.length === 0) {
      // Return default data for first-time users
      return Response.json(DEFAULT_DATA);
    }
    const blob = await get(blobs[0].url);
    const text = await blob.text();
    return Response.json(JSON.parse(text));
  } catch (err) {
    console.error('GET error:', err);
    return Response.json(DEFAULT_DATA);
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data || typeof data !== 'object') {
      return Response.json({ error: 'Invalid data' }, { status: 400 });
    }

    // Delete old blob(s) then put new one
    const { blobs } = await list({ prefix: BLOB_NAME });
    for (const b of blobs) {
      await del(b.url);
    }

    const json = JSON.stringify(data);
    await put(BLOB_NAME, json, {
      access: 'public',
      contentType: 'application/json'
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('POST error:', err);
    return Response.json({ error: 'Save failed' }, { status: 500 });
  }
}
