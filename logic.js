document.documentElement.className = localStorage.getItem('theme') ?? 'light';
window.addEventListener('load', function () {
    showTime();
  })

function showTime() {
    const today = new Date();
    document.getElementById('time').innerHTML = today.toLocaleTimeString() + "<br>" + today.toLocaleDateString();
    setTimeout(showTime, 500);
}

function switchView() {
    let impressum = document.getElementById('impressum');
    let main = document.getElementById('main');
    if (impressum.style.display == '' || impressum.style.display == 'none') {
        main.style.display = 'none';
        impressum.style.display = 'flex';
    } else {
        impressum.style.display = 'none';
        main.style.display = 'flex';
    }
}

function switchTheme() {
    if (document.documentElement.className == 'dark') {
        document.documentElement.className = 'light';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.className = 'dark';
        localStorage.setItem('theme', 'dark');
    }
}
