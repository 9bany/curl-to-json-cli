#!/usr/bin/env node
const yargs = require("yargs");
const parse = require('@bany/curl-to-json');

const options = yargs
    .usage("Usage: -c <curl>")
    .option("c", { alias: "curl", describe: "Your curl", type: "string", demandOption: true })
    .argv;

const out = parse(options.c);
console.log(out)