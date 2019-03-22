const mongoose = require('mongoose');

// Role Schema
const roleSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Role = module.exports = mongoose.model('Role', roleSchema);

// Get Roles
module.exports.getRoles = (callback, limit) => {
	Role.find(callback).limit(limit);
}

// Add Role
module.exports.addRole = (role, callback) => {
	Role.create(role, callback);
}

// Update Role
module.exports.updateRole = (id, role, options, callback) => {
	var query = {_id: id};
	var update = {
		name: role.name
	}
	Role.findOneAndUpdate(query, update, options, callback);
}


// Delete Role
module.exports.removeRole = (id, callback) => {
	var query = {_id: id};
	Role.remove(query, callback);
}
