const express = require('express');
const app = express();

app.listen(8081, () => {
  console.log('Running at Port 8081...');
});

app.use((req, res, next) => {
  console.log(req)
  next()
});

// 数字文字列のみ
app.get('/items/:itemId(\\d+)', (req, res) => {
  res.send(`request itemId: ${req.params.itemId}`)
});


app.use((req, res) => {
  res.sendStatus(404);
});
