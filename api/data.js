// Vercel Serverless Function — Baby Growth Data API
// Uses Vercel Blob for persistent storage
import { put, list, del } from '@vercel/blob';

const BLOB_NAME = 'mbga-data.json';
const DEFAULT_DATA = {
  baby: { name: '', birthDate: '', gender: 'boy' },
  feedings: [],
  diapers: [],
  growth: []
};

// Helper: find our blob and read its content
async function readBlob() {
  const { blobs } = await list();
  const found = blobs.find(b => b.pathname === BLOB_NAME);
  if (!found) return null;
  const resp = await fetch(found.url);
  if (!resp.ok) return null;
  return resp.json();
}

// Helper: delete all existing blob(s) with our name
async function cleanupOldBlobs() {
  const { blobs } = await list();
  for (const b of blobs) {
    if (b.pathname === BLOB_NAME || b.pathname.startsWith(BLOB_NAME)) {
      await del(b.url);
    }
  }
}

export async function GET() {
  try {
    const data = await readBlob();
    if (data) return Response.json(data);
    return Response.json(DEFAULT_DATA);
  } catch (err) {
    console.error('GET error:', err);
    return Response.json(DEFAULT_DATA, { status: 200 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body || typeof body !== 'object') {
      return Response.json({ error: 'Invalid data' }, { status: 400 });
    }

    // Clean up old blobs, then write with fixed name (no random suffix)
    await cleanupOldBlobs();
    const { url } = await put(BLOB_NAME, JSON.stringify(body), {
      access: 'public',
      contentType: 'application/json',
      addRandomSuffix: false
    });

    console.log('Blob saved:', url);
    return Response.json({ ok: true });
  } catch (err) {
    console.error('POST error:', err);
    return Response.json({ error: 'Save failed', detail: err.message }, { status: 500 });
  }
}
