const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://atlas-sql-658e5634dd88d51c905d1a4c-sz4jp.a.query.mongodb.net/Klu?ssl=true&authSource=admin";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('Klu');
    const collection = database.collection('users');

    // Example user login details to save in the database
    const user = {
      username: 'johndoe',
      password: 'password123',
      email: 'johndoe@example.com'
    };

    // Insert user document into users collection
    const result = await collection.insertOne(user);
    console.log(`User document inserted with _id: ${result.insertedId}`);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);