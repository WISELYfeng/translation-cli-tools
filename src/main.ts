import * as https from 'https';
import md5 = require('md5');
import * as querystring from 'querystring'

export const translate = (word) => {
    console.log(word);

    const appId = ''
    const salt = Math.random().toString()
    const appSecret = ''
    const sign = md5(appId + word + salt + appSecret)
    const query = new URLSearchParams({
        q: word,
        from: 'en',
        to: 'zh',
        appid: appId,
        salt: salt,
        sign: sign
    })
    console.log(query);
    console.log(query.toString());

    const options = {
        hostname: 'fanyi-api.baidu.com',
        port: 443,
        path: '/api/trans/vip/translate?' + query,
        method: 'GET'
    };

    const req = https.request(options, (res) => {
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });
    req.end();
}