document.addEventListener('DOMContentLoaded', function() {
    var elementos = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elementos,{
        edge: 'left'
    });
});
