const fs = require('fs')

const createReadFileSync = (path) => {
    if (fs.existsSync(path)) {
        return fs.readFileSync(path)
    }
    else {
        fs.writeFileSync(path, '[]')
        return fs.readFileSync(path)
    }
}

module.exports = {
    createReadFileSync
}
