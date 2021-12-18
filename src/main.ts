import * as https from 'https';
import * as querystring from 'querystring'

export const translate = (word) => {
    console.log(word);

    const query = new URLSearchParams({
        q: word,
        sign: '',
        from: 'en',
        to: 'zh',
        appid: '??',
        salt: ''
    })
    console.log(query);
    console.log(query.toString());
    
    // const options = {
    //     hostname: 'fanyi-api.baidu.com',
    //     port: 443,
    //     path: '/api/trans/vip/translate',
    //     method: 'GET'
    // };

    // const req = https.request(options, (res) => {
    //     console.log('statusCode:', res.statusCode);
    //     console.log('headers:', res.headers);

    //     res.on('data', (d) => {
    //         process.stdout.write(d);
    //     });
    // });

    // req.on('error', (e) => {
    //     console.error(e);
    // });
    // req.end();
}