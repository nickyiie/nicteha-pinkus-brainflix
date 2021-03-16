const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

function readVideos() {
  const videosData = fs.readFileSync('./data/video-details.json');
  const parsedData = JSON.parse(videosData);
  return parsedData;
};

router.use((_req, _res, next) => {
  next();
});

router.get("/", (req, res) => {
  res.json(readVideos());
});

router.get('/:videoId', (req, res) => {
  let videos = readVideos();
  let currentVideo = videos.find((video) => video.id === req.params.videoId);

  res.json(currentVideo);
});

router.post('/', (req,res) => {
  let newVideo = {
    id: uuidv4(),
    title: req.body.title,
    channel: "Nicky",
    image: "https://i.imgur.com/l2Xfgpl.jpg",
    description: req.body.description,
    views: 0,
    likes: 0,
    duration: "long",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
  };
  let videos = readVideos();
  videos.push(newVideo);
  fs.writeFileSync("./data/video-details.json", JSON.stringify(videos));

  res.json(newVideo);
});

module.exports = router;


