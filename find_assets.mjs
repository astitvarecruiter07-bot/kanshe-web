import https from 'https';
import fs from 'fs';
import path from 'path';

const url = 'https://www.kansheinfotech.com/';

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        // Extract favicon
        const faviconMatch = data.match(/<link[^>]+rel=["']*(?:shortcut icon|icon)["'][^>]+href=["']([^"']+)["']/i);
        // Extract logo (often in <img src="..." alt="logo"> or class="logo")
        const logoMatch = data.match(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["'][^"']*logo[^"']*["']/i) ||
            data.match(/<img[^>]*alt=["'][^"']*logo[^"']*["'][^>]*src=["']([^"']+)["']/i) ||
            data.match(/<img[^>]+class=["'][^"']*logo[^"']*["'][^>]+src=["']([^"']+)["']/i) ||
            data.match(/<img[^>]+src=["']([^"']*logo[^"']*)["']/i);

        console.log("Favicon match:", faviconMatch ? faviconMatch[1] : "Not found");
        console.log("Logo match:", logoMatch ? logoMatch[1] : "Not found");
    });
}).on('error', (err) => {
    console.log('Error: ' + err.message);
});
