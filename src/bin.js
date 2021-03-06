#!/usr/bin/env node
/* eslint-disable */
const outputs = require('./lib/outputs');

(async () => {
    try {
        await require('@oclif/command').run()
    } catch (err) {
        const exitCode = (err.oclif && err.oclif.exit !== undefined) ? err.oclif.exit : 1;
        if (exitCode !== 0) {
            outputs.error(err.message);
            if (process.env.DEBUG) console.error(err);
        }
    }
})();
