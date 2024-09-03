fetch('map.svg')
.then(response => response.text())
.then(data => {
    document.getElementById('svg-container').innerHTML = data;

    // After inserting SVG, select the elements and add interactivity
    const countries = document.querySelectorAll('.country');
    const tooltip = document.getElementById('tooltip');

    countries.forEach(country => {
        country.addEventListener('mouseover', (e) => {
            tooltip.textContent = e.target.getAttribute('data-name');
            tooltip.style.display = 'block';
        });

        country.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY + 10 + 'px';
        });

        country.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });
});
