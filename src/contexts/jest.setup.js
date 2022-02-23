/* eslint-disable no-undef */
import 'regenerator-runtime/runtime';
// const path = require('path');
function noOp() {}
if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL,
    'createObjectURL',
    { value: noOp });
  console.log('Created custom');
}
window.Worker = noOp;