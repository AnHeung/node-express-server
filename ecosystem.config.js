module.exports = {
    apps: [{
        name: 'sample',
        script: './src/register.js',        
    }],
    deploy: {
        production: {
            'user': 'kuma',
            'host': ['192.168.0.155'],
            'ref': 'origin/master',
            'repo': 'git@github.com:AnHeung/node-express-server.git',
            'path': '/home/kuma/workspace/sample',
            'post-deploy': 'source ~/.profile && yarn && pm2 start'
        }
    }
}