let mustPreventClose = false;
window.addEventListener('keydown', function (event) {
    if (!mustPreventClose && (event.ctrlKey || event.metaKey)) {
        mustPreventClose = true;
        console.log('Locked');
    }
});
window.addEventListener('keyup', function (event) {
    if (mustPreventClose && (event.key === 'Meta' || event.key === 'Control')) {
        mustPreventClose = false;
        console.log('Unlocked');
    }
});

// Trying to track Ctrl+W is fucking mess.
// For a reason though: https://stackoverflow.com/a/48331735/2114651.
// So the best solution is to alert user before closing the tab.
window.addEventListener('beforeunload', function (event) {
    // But at least trying to block it only on Ctrl+W
    if (mustPreventClose) {
        event.preventDefault();
        mustPreventClose = false;
    }
});

console.log("romakov: events listener is set");