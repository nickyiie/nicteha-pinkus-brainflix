const express = require("express");
const app = express();
const PORT = process.env.PORT || process.argv[2] || 8080;
const cors = require("cors");
const videosRoutes = require('./routes/videosRoutes');

app.use(express.json());
app.use(cors());


app.use('static-files', express.static('files'));

// app.use ((_req, _res, next) => {
//   next();
// });

// app.use((_req, _res, next) => {
//   next();
// });

// app.get('/videos', (req, res) => {
//   res.json(videos);
// //   res.json(readVideos());
// //   res.json(JSON.parse(videos))
// });

app.use('/videos', videosRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});