/**
 * Project:     nconf-base
 * File:
 * Description:
 * User:        nconf-base
 * Main Repo:   github.com/nconf-base/nconf-base
 * Date:        05/06/2013
 * License:     MIT
 */

/**
 * Standard Configuration
 */
'use strict';


var nconf = require('nconf'); // Hierarchical configuration, including: files, env, argv, and atomic object merging

/**
 *
 * @returns {*} standard config chain for application
 *
 * stages: local/dev, alpha, beta, production, maintenance
 * where:  local is local development
 *         dev   is remote development
 *         alpha, beta, production, etc are their respective stages
 */


function build_base() {
    nconf.env('__');       // environment variables
    var stage        = nconf.get('stage'),
        port         = (stage && stage != 'local') ?  80 : 3000,
        https_port   = (stage && stage != 'local') ? 443 : 3443,
//        config_file  = { file:  __dirname + '/config.json' },
        default_log  = { "level": 'info', "colorize": true },
        pack_file    = { file: 'package.json' };
    if (stage && stage != 'production')
    {
        nconf.argv();      // command line arguments
    }
    nconf.file(pack_file); // package values, this brings forward things like application and version
    nconf.defaults({       // these default values
        "powered_by" : nconf.get('name') + '/' + nconf.get('version'),
        "cookie_key" : 'this_should_always_be_changed',
        "stage"      : 'local',
        "host"       : 'localhost',
        "port"       : port,
        "https"      : {
            "port"   : https_port
        },
        "mongodb"    : "mongodb://localhost",
        "winston-config" : {
            "access"      : default_log,
            "application" : default_log,
            "email"       : default_log,
            "slow"        : default_log
        }
    });
    return nconf;
}

module.exports = build_base();