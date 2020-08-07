const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        //dest: '/out',
        disable: false //is dev or prod
    }
})