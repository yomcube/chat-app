const fs = require('fs');
const sanitize = require('./sanitize');
exports = module.exports = send;
function send(name, message, color) {
	if ((!name && !message) || (name == "" && message == "")) {return false;}
	else if ((!name) || (name == "")) {return false;}
	else if ((!message) || (message == "")) {return false;}
	else {
		fs.appendFile('htm.htm', `\t\t<span class="${color}">${sanitize(name)}:</span> ${sanitize(message)}<br />\n`, err => {if (err) throw err;});
		return true;
	}
}