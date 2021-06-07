//v2/something application/javascript
(() => {
    'use strict'

    if (!("admiral" in window)) {
          window.admiral = (eventCycle, eventName, callback) => {
               let response = {};
               switch (eventName) {
                   case 'engage.loaded':
                       response = true; // rendered
                       break;
                   case 'measureDetected':
                       response = {
                           adblocking: true,
                           whitelisted: true,
                       };
                       break;
               }
               // Fake at least one tick of time has gone by
               setTimeout(() => {
                   callback(response);
               }, 1)
          })
    }
})()
