Promise.all([
    new Promise(resolve => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('load', resolve);
        }
    }),
    new Promise(resolve => setTimeout(resolve, 1000))
]).then(() => {
    const splash = document.getElementById('splash-screen');
    const content = document.getElementById('splash-content');
    if (splash && content) {
        // First fade out the content
        content.classList.add('fade-out');

        // Then fade out the background after content animation
        setTimeout(() => {
            splash.classList.add('fade-out');
            // Remove from DOM after both animations
            setTimeout(() => {
                splash.remove();
            }, 300);
        }, 300);
    }
}).catch(error => {
    console.error('Error removing splash screen:', error);
    const splash = document.getElementById('splash-screen');
    if (splash) splash.remove();
});