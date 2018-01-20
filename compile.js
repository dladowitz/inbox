const path = require('path');
const fs   = require('fs');
const solc = require('solc');

const inbothPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inbothPath, 'utf8');

console.log(solc.compile(source, 1));
