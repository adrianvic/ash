let body = document.body;
let ctBtn = document.getElementById("themeButton");

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    if (!exdays) {
        document.cookie = cname + "=" + cvalue + ";path=/";    
        console.log("Expiry date not provided.")    
    } else {
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
} 

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

ctBtn.addEventListener('click', (click) => {
    toggleTheme("1s", 1000);
    if (getCookie("theme") == "dark") {
        setCookie("theme", "light");
        console.log("Setting cookie to light.")
    } else if (getCookie("theme") == "light") {
        setCookie("theme", "dark");
        console.log("Setting cookie to dark.")
    }
})

function toggleTheme(transitionEffect = "0", timeToWait = 0) {
        originalTransitionValue = document.body.style.transition;
        document.body.style.transition = transitionEffect;
        body.classList.toggle("lightMode");
        setTimeout(function () {
                document.body.style.transition = originalTransitionValue;
        }, timeToWait);    
}

if (getCookie("theme") == "") {
    setCookie("theme", "dark");
    console.log("Defaulting theme to dark.")
}

function refreshTheme() {
    if (getCookie("theme") != "dark") {
        toggleTheme();
    }
}

refreshTheme();