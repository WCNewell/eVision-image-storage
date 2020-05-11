const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(__dirname, './keys.json')

const { storage } = Cloud
const storage = new Storage({
    keyFilename: serviceKey,
    projectId: 'your project id',
})

