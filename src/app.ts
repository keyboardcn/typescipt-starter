import express from 'express';

const app = express();
const port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req: any, res: any) => {
  res.render('home', { resourcePath: '/views' });
});

app.listen(port, () => {
  console.log(`app now listening for request on port ${port}`);
});
