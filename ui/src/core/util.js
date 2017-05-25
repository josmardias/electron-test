import { remote } from 'core/electron'

const fs = remote.require('fs')
console.log(fs)


export const listFiles = (path = '.') => fs.readdirSync(path)
