import { getClient } from '../../../database/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
  const data = req.body;

  const client = getClient();
  await client.connect();
  const db = client.db('NextTest');
  const collection = db.collection('users');
  //upsert user by email
  const result = await collection.updateOne(
    { email: data.email },
    { $set: { ...data } },
    { upsert: true }
  );
  // const result = await collection.insertOne(data);
  res.status(200).json(result);
  } else {
  res.status(200).json({ message: 'Hello' });
  }
}