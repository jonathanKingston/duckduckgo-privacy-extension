import { callFunction, hasProperty } from './utils'

export function init (args) {
    checkAdmiralLoad()
    window.addEventListener('load', checkAdmiralLoad)
}

function checkAdmiralLoad () {
    // If admiral is checkAdmiralLoaded
    if (hasProperty(window, 'admiral')) {
        // Wait till the banner is displayed
        callFunction(window, 'admiral', 'after', 'engage.loaded', function (rendered) {
            // Find admiral link which always appears to be present
            const admiralLinks = document.body.querySelectorAll('a[href^="https://getadmiral.com"]')
            for (const link of admiralLinks) {
                // Find top level div
                const modal = link.closest('body > div')
                // Role Button is always the clickable link
                const clickLinks = modal.querySelectorAll('a[role=button]')
                // Ensure Admiral hasn't changed their setup
                if (clickLinks.length === 1) {
                    // Click through for the user
                    clickLinks[0].click()
                    break
                }
            }
        })
    }
}
