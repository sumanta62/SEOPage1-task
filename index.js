const express = require('express');
const multer = require('multer');
const { MongoClient } = require('mongodb');

const app = express();
const upload = multer();


const mongoClient = new MongoClient(process.env.MONGODB_URI);

app.post('/upload-image', upload.single('image'), async (req, res) => {
  try {
    await mongoClient.connect();
    const database = mongoClient.db('SEOPage1').collection('uploadedFile');
    const result = await database.insertOne({ image: req.file.buffer });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to upload image.' });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});



