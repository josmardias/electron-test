/*
 * https://github.com/electron/electron/blob/master/docs/api/remote.md
 * remote: Use main process modules from the renderer process.
 */

// export { remote } from 'electron'
const remote = window.require('electron').remote
export { remote }
