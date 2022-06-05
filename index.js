const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


require('dotenv').config();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.moy4n.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){

  try{

    await client.connect()
    const destinationCollection = client.db('Padma_Exclusive').collection('destinations')

    // load all destinations 
    app.get('/destinations', async(req, res) => {
      const result = await destinationCollection.find({}).toArray();
      res.send(result)
    })

    // load single destination 
    app.get('/destination', async(req, res) => {
      const destinationInfo = JSON.parse(req.headers?.destinationinfo)
      const query = { from: destinationInfo?.from, to: destinationInfo?.to }
      const result = await destinationCollection.findOne(query);
      res.send(result)
    })

    // load single destination by id 
    app.get('/destinationid', async(req, res) => {
      const destinationId = req.query?.destinationId;
      const query = { _id: ObjectId(destinationId) };
      const result = await destinationCollection.findOne(query);
      res.send(result)
    })


  }
  finally{

  }


}
run()



app.get('/', async(req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log('server is running on', port)
})