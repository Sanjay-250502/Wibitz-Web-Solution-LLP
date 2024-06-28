function toggleBackgroundColor(event) {
    const heartIcon = event.target;
    if (heartIcon.style.backgroundColor === 'red') {
        heartIcon.style.backgroundColor = '';
    } else {
        heartIcon.style.backgroundColor = 'red';
    }
}

const heartIcons = document.querySelectorAll('.heart-icon');
heartIcons.forEach(icon => {
    icon.addEventListener('click', toggleBackgroundColor);
});

document.getElementById('toggle-advanced-search').addEventListener('click', function() {
    var searchOptions = document.getElementById('advanced-search-options');
    if (searchOptions.style.display === 'none' || searchOptions.style.display === '') {
        searchOptions.style.display = 'inline';
    } else {
        searchOptions.style.display = 'none';
    }
});