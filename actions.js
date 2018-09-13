const fs = require('fs');
const path = require('path');

const DB_PATH = path.resolve(__dirname, 'tabs.json');

module.exports = {
  read: () => {
    const json = fs.readFileSync(DB_PATH);
    return JSON.parse(json);
  },
};
