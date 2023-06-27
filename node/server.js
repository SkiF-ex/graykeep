const express = require('express');
const bodyOarser = require('body-parser');

const Graykeep = require('./gs');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/perks', async (req, res) => {
  const tree = req.query.tree;
  const pool = req.query.pool;

  try {
    const data = await Graykeep.find();

    let result;
    switch (pool) {
      case 'all':
        result = data;
        break;
      case ('ulearned'):
        result = data.filter((item) => !item.status);
        break;
      case ('learned'):
        result = data.filter((item) => item.status);
        break;
      default:
        result = data;
        break;
    }

    if (tree) {
      result = tree !== 'All' ? result.filter((item) => item.tree === tree) : result;
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

app.get('/trees', async (req, res) => {
  try {

    const data = await Graykeep.find();
    const trees = [...new Set(data.map(item => item.tree))];
    trees.unshift('All');

    res.json(trees);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

app.listen(port, () => console.log(`Server runing on port ${port}`));