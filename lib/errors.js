'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on garlicore-p2p Module {0}'
};

module.exports = require('garlicore-lib').errors.extend(spec);
