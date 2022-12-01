import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI;

/**
 * Returns a configured MongoDB client
 * Usage example:
 *  const client = getClient();
 *  client.connect();
 *  const database = client.db('my-database');
 *  const collection = database.collection('my-collection');
 *  / / Perform your operations here
 *  client.close();
 * @returns mongo client
 */
export function getClient() {
  const client = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  });
  return client;
}