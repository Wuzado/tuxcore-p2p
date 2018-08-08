'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on tuxcore-p2p Module {0}'
};

module.exports = require('tuxcore-lib').errors.extend(spec);
