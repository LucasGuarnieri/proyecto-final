document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.container');

    containers.forEach(function (container) {
        container.addEventListener('click', function () {
            this.classList.toggle('expanded');
            const description = this.querySelector('.description');
            description.style.display = this.classList.contains('expanded') ? 'block' : 'none';
        });
    });
});