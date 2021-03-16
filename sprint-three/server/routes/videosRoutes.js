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

module.exports = router;


