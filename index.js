document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#sidebar a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.style.display = 'none';
                if (section.id === targetId) {
                    section.style.display = 'block';
                }
            });
        });
    });

    // Display the dashboard section by default
    sections.forEach(section => section.style.display = 'none');
    document.querySelector('#dashboard').style.display = 'block';
});
