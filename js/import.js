const links = document.querySelectorAll('link[rel="import"]');

Array.from(links).forEach(link => {
    const children = link.import.body.cloneNode(true).children;
    
    Array.from(children).forEach(child => {
        document.body.appendChild(child);
    });
});
