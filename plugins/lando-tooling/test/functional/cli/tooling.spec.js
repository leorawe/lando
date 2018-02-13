'use strict';

const CliTest = require('command-line-test');
const chai = require('chai');
const expect = chai.expect;
const path = require('path');
const fs = require('fs');
const os = require('os');
const jsYaml = require('js-yaml');

chai.should();

const Docker = require('dockerode');


describe('Tooling Commands', function() {
  // Use the entry-point in the app, not the globally installed Lando.
  this.executable = path.resolve(
    __dirname, '..', '..', '..', '..', '..', 'bin', 'lando.js'
  );

  // Get a fresh CLI command object before each test.
  beforeEach(function() {
    // We'll need this in all tests
    this.cliTest = new CliTest();
  });

  describe('#init', function() {
    it('Allows for SSH commands within containers');
    it('Allows user to define commands to run in any service');
  });
});
