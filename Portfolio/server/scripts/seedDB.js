const mongoose = require("mongoose");
const db = require("../models");

// This file empties the projects collection and inserts the projects below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist",
  { useNewUrlParser: true }
);

const projectSeed = [
  {
      title: 'burger app',
      synopsis: 'make your own burger with ingredients input',
      tech: 'nodejs',
      image: 'https://res.cloudinary.com/hughkohl/image/upload/v1552174003/jvzdm7ofnv7y5gmyivas.png',
      date: new Date(Date.now())
  },
  {
      title: 'nyt',
      synopsis: 'new york times comment section',
      tech: 'mongoose',
      image: 'https://res.cloudinary.com/hughkohl/image/upload/v1552174003/zakxnhcptr37qxzcnfqp.png',
      date: new Date(Date.now())
  },
  {
      title: 'Friend Finder',
      synopsis: '',
      tech: 'nodejs',
      image: 'https://res.cloudinary.com/hughkohl/image/upload/v1552174036/g8vrcpohlbjj3sstismf.png',
      date: new Date(Date.now())
  },
  {
      title: 'liriApp',
      synopsis: 'CLI engineering example using inquirer',
      tech: 'inquirer',
      image: 'https://res.cloudinary.com/hughkohl/image/upload/v1552174003/w5bivkriljdke4ido53h.png',
      date: new Date(Date.now())
  },
  {
      title: 'web scraper',
      synopsis: '',
      tech: 'APIs',
      image: 'https://res.cloudinary.com/hughkohl/image/upload/v1552174053/lz9acowuluiaoyzfycah.png',
      date: new Date(Date.now())
  },
  {
      title: 'Trivia',
      synopsis: '',
      tech: 'Express and Nodejs',
      image: 'https://res.cloudinary.com/hughkohl/image/upload/v1552174020/roijzyiik8fiqibho1vs.png',
      date: new Date(Date.now())
  },
  {
      title: 'Bamazon',
      synopsis: 'e-commerce CLI app',
      tech: 'inquirer and MongoDB',
      image: 'https://res.cloudinary.com/hughkohl/image/upload/v1552174020/bheqg88l6jgayyvgxyyu.png',
      date: new Date(Date.now())
  },
  {
      title: 'Clicky',
      synopsis: '',
      tech: 'nodejs',
      image: 'https://res.cloudinary.com/hughkohl/image/upload/v1552174036/mugjign0pmbjfcp69y6g.png',
      date: new Date(Date.now())
  },
  {
      title: 'Pupster',
      synopsis: 'Like Tinder, but for dogs',
      tech: 'nodejs',
      image: 'https://res.cloudinary.com/hughkohl/image/upload/v1552174020/v9ochh3qa79ome9qxadp.png',
      date: new Date(Date.now())
  },
  {
      title: 'Morning News',
      synopsis: 'newspaper search and local weather',
      tech: 'Google Maps API and News',
      image: 'https://res.cloudinary.com/hughkohl/image/upload/v1552174036/opvqzfkz6eh0vplfvlzq.png',
      date: new Date(Date.now())
  }
];

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
