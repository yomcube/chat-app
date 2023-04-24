const fs = require('fs');
const config = require('./config');
const sanitize = require('./sanitize');
exports = module.exports = send;
function send(name, message, color) {
	if ((!name && !message) || (name == "" && message == "")) {return false;}
	else if ((!name) || (name == "")) {return false;}
	else if ((!message) || (message == "")) {return false;}
	else {
		fs.appendFile(config.chatFile, `\t\t<span class="${color}">${sanitize(name)}:</span> ${sanitize(message)}<br />\n`, err => {if (err) console.log(err);});
		return true;
	}
}