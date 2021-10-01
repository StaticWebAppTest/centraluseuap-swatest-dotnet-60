const fs = require('fs');

var pattern = /string date/i; 
const path = 'api/HttpExample.cs';
var content = fs.readFileSync(path, 'utf8');
var newContent = content.split('\n').map(line => pattern.test(line) ? `string date = "${new Date().toISOString()}";` : line);
fs.writeFileSync(path, newContent.join('\n'));
