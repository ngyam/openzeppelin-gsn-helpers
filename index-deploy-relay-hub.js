const program = require('commander');
const lodash = require('lodash');

program
  .option('--ethereumNodeURL <url>')
  .option('--from <account>')
  .parse(process.argv);

const nodeURL = program.ethereumNodeURL !== undefined ? program.ethereumNodeURL : 'http://localhost:8545';

const Web3 = require('web3');
const web3 = new Web3(nodeURL);

require('openzeppelin-test-helpers/configure')({ web3 });

const { deployRelayHub } = require('./src/helpers');
deployRelayHub(web3, lodash.pick(program, ['from']));
