module.exports = {
    apps: [{
        name: "sample",
        script: "./src/index.js",
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        }
    }],
    deploy: {
        production: {
            "key": "/c/Users/Kum/Documents/source/node-express-server/.keys/kumaserver.pub",
            "user": "kuma",
            "host": ["192.168.0.155"],
            "ref": "origin/master",
            "repo": "git@github.com:AnHeung/node-express-server.git",
            "path": "/home/kuma/workspace/sample",
            "pre-deploy": "pwd && whoami",
            "post-deploy": "sudo yarn"
        }
    }
}