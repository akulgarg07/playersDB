const mongoose = require('mongoose');

// Player Schema
const playerSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	role:{
		type: String,
		required: true
	},
	country:{
		type: String,
		required: true
	},
	age:{
		type: String,
		required: true
	},
	batting_style:{
		type: String
	},
	bowling_style:{
		type: String
	},
	matches:{
		type: String,
		required: true
	},
	runs:{
		type: String,
		required: true
	},
	wickets:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	image_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Player = module.exports = mongoose.model('Player', playerSchema);

// Get Players
module.exports.getPlayers = (callback, limit) => {
	Player.find(callback).limit(limit);
}

// Get Player
module.exports.getPlayerById = (id, callback) => {
	Player.findById(id, callback);
}

// Add Player
module.exports.addPlayer = (player, callback) => {
	Player.create(player, callback);
}

// Update Player
module.exports.updatePlayer = (id, player, options, callback) => {
	var query = {_id: id};
	var update = {
		name: player.name,
		role: player.role,
		country: player.country,
		age: player.age,
		batting_style: player.batting_style,
		bowling_style: player.bowling_style,
		matches: player.matches,
		runs: player.runs,
		wickets: player.wickets,
		description: player.description,
		image_url: player.image_url
	}
	Player.findOneAndUpdate(query, update, options, callback);
}

// Delete Player
module.exports.removePlayer = (id, callback) => {
	var query = {_id: id};
	Player.remove(query, callback);
}
