const fs = require('fs');

const loadArtists = () => {
  const fileBuffer = fs.readFileSync('data/artists.json', 'utf-8');
  const artists = JSON.parse(fileBuffer);
  return artists;
};

const loadAlbums = () => {
  const fileBuffer = fs.readFileSync('data/album.json', 'utf-8');
  const albums = JSON.parse(fileBuffer);
  return albums;
};

const loadSingles = () => {
  const fileBuffer = fs.readFileSync('data/singles.json', 'utf-8');
  const singles = JSON.parse(fileBuffer);
  return singles;
};

const loadTeam = () => {
  const fileBuffer = fs.readFileSync('data/team.json', 'utf-8');
  const team = JSON.parse(fileBuffer);
  return team;
};

const findArtist = (username) => {
  const artists = loadArtists();
  const artist = artists.find((data) => data.username === username.toLowerCase());
  return artist;
};

const findAlbum = (artistId) => {
  const albums = loadAlbums();
  const album = albums.filter((data) => data.artistId === artistId);
  return album;
};

const findsingle = (artistId) => {
  const singles = loadSingles();
  const single = singles.filter((data) => data.artistId === artistId);
  return single;
};

module.exports = { loadArtists, loadSingles, loadAlbums, loadTeam, findArtist, findAlbum, findsingle };
