const fs = require('fs');

const loadArtists = () => {
  const fileBuffer = fs.readFileSync('data/artists.json', 'utf-8');
  const artists = JSON.parse(fileBuffer);
  return artists;
};

module.exports = { loadArtists };
