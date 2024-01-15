
import { MongoClient, ServerApiVersion } from 'mongodb';

// moved uri info to the .env file for security (sensitive information)
const uri = process.env.MONGO_URI
if(!uri) {
    throw new Error('environment variable MONGO_URI is not defined')
}

// creating a mongodb client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // connecting the client to the server
    await client.connect();
    // querying the database
    const cursor = await client.db('test').collection('songs').find();
    const array = await cursor.toArray()
    return array
  } finally {
    // ensuring that the client will close when you finish/error
    await client.close();
  }
}

export default async function Database() {
    const songs = await run()
    return (
        <>
            {songs.map(songObj => <h1>{songObj.song}</h1>)}
        </>
    )
}