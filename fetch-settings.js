const https = require('https');
const fs = require('fs');

https.get('https://click11.hurry2.com/api/site-settings?domain=www.apbook.in', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    try {
      const obj = JSON.parse(data);
      console.log(JSON.stringify(obj, null, 2));
    } catch(e) {
      console.log(data);
    }
  });
});
