import * as https from 'https';
import md5 = require('md5');
import { appId, appSecret } from './private';

export const translate = (word) => {
    let from, to
    if (/[a-zA-z]/.test(word[0])) {
        from = 'en'
        to = 'zh'
    } else {
        from = 'zh'
        to = 'en'
    }
    const salt = Math.random().toString()
    const sign = md5(appId + word + salt + appSecret)
    const query = new URLSearchParams({
        q: word,
        appid: appId,
        from,
        to,
        salt,
        sign
    })
    const options = {
        hostname: 'fanyi-api.baidu.com',
        port: 443,
        path: '/api/trans/vip/translate?' + query,
        method: 'GET'
    };

    const request = https.request(options, (res) => {
        let chunks = []
        res.on('data', (chunk) => {
            // 拿到所有的数据切片
            chunks.push(chunk)
        });
        res.on('end', () => {
            type translationResult = {
                from: string
                to: string
                trans_result: {
                    src: string
                    dst: string
                }[]
                error_code?: string
                error_msg?: string
            }
            const string = Buffer.concat(chunks).toString()
            const strObj: translationResult = JSON.parse(string)
            if (strObj.error_code) { // TODO 错误提示表驱动编程
                console.error(strObj.error_msg);
                process.exit(2)
            } else {
                console.log(strObj.trans_result[0].dst)
                process.exit(0)
            }
        })
    });

    request.on('error', (e) => {
        console.error(e);
    });
    request.end();
}