/* 
    © 2021 KondaSoft
    https://www.kondasoft.com
*/

// Autofocus search input field on dropdown open
document.getElementById('search-nav-item')
    .addEventListener('shown.bs.dropdown', function () {
        document.getElementById('minisearch-input').focus();
    });