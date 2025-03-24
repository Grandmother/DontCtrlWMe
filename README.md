# DontCtrlWMe
Don't close some blocklisted Firefox tabs on Ctrl+W

It's useful for the websites simulating VIM editing experience or any other
terminal-like thing where you'd like to press Ctrl+W to remove a word before
cursor.

# Installation

This neither registered as a Firefox addon nor has proper configuration to be
good enough for that.  So don't expect proper installation process either. Just
follow the official Firefox instruction on adding your first extension
[here][firefox_docs].

[firefox_docs]: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension

# Configuration

The list of websites where the addon is enabled is hardcoded in the
`manifest.json`:

```json
    "content_scripts": [
        {
            "matches": [
                "*://*.leetcode.com/*",
                "*://*.designgurus.io/*",
                "*://*.interview.google.com/*"],
            "js": ["protect.js"]
        }
    ]
```

Add your websites to the list before loading the addon or reload it after
changing.
