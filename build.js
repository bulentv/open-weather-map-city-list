const fs = require('fs');

fs.readFile('city.list.json', 'utf8', (err, data) => {
  if (err) throw err;

  const cityList = JSON.parse(data);

  fs.writeFile('index.js', `module.exports = ${JSON.stringify(cityList, null, 2)};`, err => {
    if (err) throw err;
  });
});
