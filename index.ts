///<reference path="./typings/main.d.ts" />
///<reference path="./typings/others.d.ts" />

import * as request from "request";
import * as hget from "hget";
import * as marked from "marked";
import * as Term from "marked-terminal";

function getRandomPonyFooArticle() {

    return new Promise((resolve, reject) => {

        return request("https://ponyfoo.com/articles/random", (err, res, body) => {
            if (err) {
                reject(err); return;
            }
            resolve(body);
        });
    });
}
