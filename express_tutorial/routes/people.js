const express = require('express');

let { people } = require('../data');

//using routes middleware
const router = express.Router();

//the base is /api/people
// we will move the base into the app.js and leave all of the url params here
router.get('/', (req, res) => {
  res.status(200).json({ success: true, people: people });
});

router.post('/', (req, res) => {
  //uses express.json() middelware to access the req.body
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).json({ success: true, person: name });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id, name);
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res.status(400).json({ success: false, msg: `no person with id ${id}` });
  } else {
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ success: true, data: newPeople });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res.status(400).json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
