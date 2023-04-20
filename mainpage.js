const fs = require('fs');
const config = require('./config');
exports = module.exports = function (req, res, theme) {
	var sidebar = fs.readFileSync('sidebar.htm');
	fs.readFile('htm.htm', (err, data) => {
		if (err) throw err;
		res.set('Content-Type', 'text/html');
		res.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="${config.url}:${config.port}/static/${theme}.css">
</head>
<body>
${data}
${sidebar}
</body>
</html>`);
		res.end();
		return;
	});
}