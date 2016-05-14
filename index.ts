///<reference path="./typings/main.d.ts" />
///<reference path="./typings/others.d.ts" />

import * as request from "request";
import * as hget from "hget";
import * as marked from "marked";
import * as Term from "marked-terminal";

function getRandomPonyFooArticle(): Promise<string> {

    return new Promise((resolve, reject) => {

        return request("https://ponyfoo.com/articles/random", (err, res, body) => {
            if (err) {
                reject(err); return;
            }
            resolve(body);
        });
    });
}

async function read() {

    const html = await getRandomPonyFooArticle();
    const md = hget(html, {
        markdown: true,
        root: "main",
        ignore: ".at-subscribe,.mm-comments,.de-sidebar",
    });
    const txt = marked(md, {
        renderer: new Term(),
    });
    console.log(txt);
}

read();
