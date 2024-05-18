document.addEventListener('DOMContentLoaded', function () {
    const sections = ['school', 'university', 'career'];  // IDs of the sections

    sections.forEach(section => {
        fetch(`${section}.txt`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${section} text`);
                }
                return response.text();
            })
            .then(text => {
                document.getElementById(section).querySelector('p').textContent = text;
            })
            .catch(error => {
                console.error('Error fetching text:', error);
                document.getElementById(section).querySelector('p').textContent = `Failed to load ${section} text.`;
            });
    });
});
