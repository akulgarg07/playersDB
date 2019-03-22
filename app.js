const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Role =require('./models/roles');
Player =require('./models/players');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/icc');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/players or /api/roles');
});

app.get('/api/roles', (req, res) => {
	Role.getRoles((err, roles) => {
		if(err){
			throw err;
		}
		res.json(roles);
	});
});

app.post('/api/roles', (req, res) => {
	var role = req.body;
	Role.addRole(role, (err, role) => {
		if(err){
			throw err;
		}
		res.json(role);
	});
});

app.put('/api/roles/:_id', (req, res) => {
	var id = req.params._id;
	var role = req.body;
	Role.updateRole(id, role, {}, (err, role) => {
		if(err){
			throw err;
		}
		res.json(role);
	});
});

app.delete('/api/roles/:_id', (req, res) => {
	var id = req.params._id;
	Role.removeRole(id, (err, role) => {
		if(err){
			throw err;
		}
		res.json(role);
	});
});

app.get('/api/players', (req, res) => {
	Player.getPlayers((err, players) => {
		if(err){
			throw err;
		}
		res.json(players);
	});
});

app.get('/api/players/:_id', (req, res) => {
	Player.getPlayerById(req.params._id, (err, player) => {
		if(err){
			throw err;
		}
		res.json(player);
	});
});

app.post('/api/players', (req, res) => {
	var player = req.body;
	Player.addPlayer(player, (err, player) => {
		if(err){
			throw err;
		}
		res.json(player);
	});
});

app.put('/api/players/:_id', (req, res) => {
	var id = req.params._id;
	var player = req.body;
	Player.updatePlayer(id, player, {}, (err, player) => {
		if(err){
			throw err;
		}
		res.json(player);
	});
});

app.delete('/api/players/:_id', (req, res) => {
	var id = req.params._id;
	Player.removePlayer(id, (err, player) => {
		if(err){
			throw err;
		}
		res.json(player);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
