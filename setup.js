const fs = require('fs');
const config = require('./config');
exports = module.exports = {
	createFiles: function() {
		var ws = fs.createWriteStream(config.chatFile, err => {
			if (err) console.log(err);
		});
		ws.end()
		ws = null;
	}
}