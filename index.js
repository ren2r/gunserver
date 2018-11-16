const port = process.env.VCAP_APP_PORT || process.env.PORT || process.argv[2] || 80
const Gun = require('gun')
const server = require('http').createServer(Gun.serve).listen(port)
Gun({
    localStorage: false, // enable Radix Storage Engine
    web: server
})
