const express = require('express');
const chalk = require('chalk');
const app = express();
const log = console.log;

log(chalk.blue('Hello') + ' World' + chalk.red('!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log('Hello my name is ' + chalk.bgBlueBright('Jenny'));
