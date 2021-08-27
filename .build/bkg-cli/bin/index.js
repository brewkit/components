#!/usr/bin/env node


const execa = require('execa');
const { Listr } = require('listr2');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk');


/**
 * Check that all the necessary dependencies are installed before taking any action
 */
const checkDependencies = {
    title: 'Checking to see if gh is installed',
    task: async (ctx, task) => {
        try {
            await execa.command('command -v gh');
        }
        catch (error) {
            task.output = 'Installing gh...';
            await execa.command('brew install gh');
        }
    },
};


/**
 * Creates a new git <feature|hotfix|release> branch with the specified name.
 */
function start(args) {
    new Listr([
        checkDependencies,
        {
            title: `'Ensuring you\'re up to date with ${args.feature === 'hotfix' ? 'main' : 'next'} branch'`,
            task: () => execa.command(`git checkout origin/${args.feature === 'hotfix' ? 'main' : 'next'}`),
        },
        {
            title: `Creating new ${args.feature} branch`,
            task: () => execa.command(`git checkout -b ${args.feature}/${args.name}`),
        },
    ]).run().then(() => {
        console.info(`  ${chalk.bgGreen('  DONE  ')}  You're now on your new ${args.feature} branch, ${chalk.blue(`${args.feature}/${args.name}`)}.`)
    }).catch((err) => {
        console.log(`  ${chalk.bgRed('  ERROR  ')} ${chalk.red('Please review log above.')}`);
    });
}


/**
 * Pushes your branch to the remote and starts the PR process
 */
function publish() {
    new Listr([
        checkDependencies,
        {
            title: 'Push to remote',
            task: async (ctx) => {
                const { stdout: branch } = await execa('git', ['branch', '--show-current']);
                ctx.isHotfix = branch.startsWith('hotfix/');
                await execa('git', ['push', 'origin', branch]);
            },
        },
        {
            title: 'Opening PR setup in web',
            task: (ctx) => execa.command(`gh pr create --base ${ctx.isHotfix ? 'main' : 'next'} --web`),
        },
    ]).run().then(() => {
        console.log(`  ${chalk.bgGreen('  DONE  ')}`)
    }).catch((err) => {
        console.log(`  ${chalk.bgRed('  ERROR  ')} ${chalk.red('Please review log above.')}`);
    });
}


/**
 * Initiate the commit process.
 */
function commit() {
    new Listr([
        checkDependencies,
    ]).run().then(() => {
        console.log(`  ${chalk.bgGreen('  DONE  ')}`)
        execa(`npx`, ['git-cz'], { stdio: ["inherit", "inherit", "inherit"] });
    }).catch((err) => console.log(err));
}


/**
 * handles all other commands by passing them along to git
 */
function git(args) {
    const [ a, b, ...rest] = process.argv;
    execa.command(`git ${[...rest].join(' ')}`, { stdio: ["inherit", "inherit", "inherit"] });
}


/**
 * Initial registration of all our different commands.
 */
const argv = yargs(hideBin(process.argv))
    .command('$0', 'same as git', () => {}, git)
    .command({
        command: 'start <feature|hotfix|release> <name>',
        desc: 'Creates a new <feature|hotfix|release> branch with the specified name.',
        handler: start,
    })
    .command({
        command: 'publish',
        desc: 'Creates a PR to next',
        handler: publish,
    })
    .command(['commit'], 'Cleans local configs and starts the git commit process.', () => {}, commit)
    .argv;
