#!/usr/bin/env node

const yargs = require('yargs');
const execa = require('execa');
const { hideBin } = require('yargs/helpers');

const jestConfigFile = 'jest.config.js';
const jestNodePath = 'node_modules/.bin/jest';

yargs(hideBin(process.argv))
    .command({
        command: 'watch',
        desc: 'Run all tests in watch mode (generates CC)',
        handler: () => execa(jestNodePath, ['-c', jestConfigFile, '--watchAll'], { stdio: 'inherit' })
    })
    .command({
        command: 'latest',
        desc: 'Run only latest changed test files (generates CC)',
        handler: () => execa(jestNodePath, ['-c', jestConfigFile, '--onlyChanged', '--noStackTrace'], { stdio: 'inherit' })
    })
    .command({
        command: 'file <filename>',
        desc: 'Test a single file (doesnt collect CC)',
        handler: (arg) => execa(jestNodePath, [arg.filename, '-c', jestConfigFile, '--collectCoverage=false'], { stdio: 'inherit' })
    })
    .command({
        command: 'browser',
        desc: 'Run a Majestic browser client UI',
        handler: () => execa('node_modules/.bin/majestic', { stdio: 'inherit' })
    })
    .help().parse();