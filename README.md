<img src="http://garlicore.io/css/images/garlicore-p2p.svg" alt="garlicore payment protocol" height="35" width="102">

Bitcore P2P
=======

[![NPM Package](https://img.shields.io/npm/v/garlicore-p2p.svg?style=flat-square)](https://www.npmjs.org/package/garlicore-p2p)
[![Build Status](https://img.shields.io/travis/bitpay/garlicore-p2p.svg?branch=master&style=flat-square)](https://travis-ci.org/bitpay/garlicore-p2p)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/garlicore-p2p.svg?style=flat-square)](https://coveralls.io/r/bitpay/garlicore-p2p?branch=master)

`garlicore-p2p` adds [Bitcoin protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for Bitcore.

See [the main garlicore repo](https://github.com/bitpay/garlicore) for more information.

## Getting Started

```sh
npm install garlicore-p2p
```
In order to connect to the Bitcoin network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('garlicore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [garlicore guide](http://garlicore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/garlicore/blob/master/CONTRIBUTING.md) on the main garlicore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/garlicore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
