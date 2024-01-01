module.exports = {
    apps: [{
        name: "sample",
        script: "./src/index.js",
    }],
    deploy: {
        production: {
            "user": "kuma",
            "host": ["192.168.0.155"],
            "ref": "origin/master",
            "repo": "git@github.com:AnHeung/node-express-server.git",
            "path": "/home/kuma/workspace/sample",
            "post-deploy": "/home/kuma/.nvm/versions/node/v20.10.0/bin/yarn"
        }
    }
}