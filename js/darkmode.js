const toggle = document.querySelector('.theme-switcher input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

function switchTheme(from, to) {
    // Change all iframes to match theme
    [].forEach.call(document.querySelectorAll('iframe'), function(iframe) {
        iframe.src = iframe.src.replace(`=${from}`, `=${to}`);
    });

    document.documentElement.setAttribute('data-theme', to);
    localStorage.setItem('theme', to);
}

// Ensure darkmode is activated
if (toggle) {
    toggle.addEventListener('change', function(event){
        if(event.target.checked) {
            switchTheme('light', 'dark');
        } else {
            switchTheme('dark', 'light');
        }
    }, false);
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    
        if (currentTheme === 'dark') {
            switchTheme('light', 'dark');
            toggle.checked = true;
        }
    }
}