#!/bin/bash

curl -sL https://deb.nodesource.com/setup_iojs_2.x | sudo -E bash -
sudo apt-get install -y iojs

sudo npm install -g gulp grunt-cli npm@3.x-latest jsdoc eslint jshint jscrc mocha node-inspector pangyp bower yo express-generator
