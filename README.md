nconf-base 
==========
[![Build Status](https://travis-ci.org/nconf-base/nconf-base.png?branch=master)](http://travis-ci.org/nconf-base/nconf-base) [![Dependency Status](https://gemnasium.com/nconf-base/nconf-base.png)](https://gemnasium.com/nconf-base/nconf-base) [![NPM version](https://badge.fury.io/js/nconf-base.png)](http://badge.fury.io/js/nconf-base)

A basic  [nconf][0]  chain to assist in boilerplate application configuration
and encourage keeping security sensitive information out of source code and VCS
repos.

Configuration information is pulled from the following locations in the following order. Duplicate values are ignored if they are encountered further down the list:
- environment variables
- command line arguments (if not production)
- package.json file
- defaults as follows:
  - port: (isLocal) ? 3000 : 80
  - https_port: (isLocal) ? 3443 : 443
  - powered_by: nconf.get('name') + '/' + nconf.get('version')
  - winston console logs for: access, application, email and slow events

## Installation

``` sh
  $ npm install nconf-base
```

## Usage
``` js
  var nconf = require('nconf-base'); // get configuration
```

And use nconf as you would regularly.

## Example with winston logger via [winston-config][1]
``` js
  var nconf = require('nconf-base'),
      wconf = require('winston-config').fromJson(nconf.get('winston-config')),
      logger = wconf.logger.application;

  logger.info('it works :-)'); // console output: it works :-)
```

## License

# The MIT License (MIT)

Copyright (c) 2013 Jim Kalac

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[0]: https://github.com/flatiron/nconf
[1]: https://github.com/triplem/winston-config
