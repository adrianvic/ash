title = document.getElementById("title");
originalTitle = title.innerText;
pageTitle = document.title;

if (pageTitle !== "ASH") {
    title.innerText = pageTitle;
    title.addEventListener('mouseenter', (ev) => {
        title.style.opacity = 0;
        setTimeout(() => {
            title.style.opacity = 1;
            title.innerText = originalTitle;
        }, 250)
    });

    title.addEventListener('mouseleave', (ev) => {
        title.style.opacity = 0;
        setTimeout(() => {
            title.style.opacity = 1;
            title.innerText = pageTitle;
        }, 250)
    });
}