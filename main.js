const btn = document.getElementById('share-button');


btn.addEventListener('click', function () {
    const shareClick = document.getElementById('share-click');
    if (shareClick.style.display === "none") {
        shareClick.style.display = "flex";
        btn.style.background = "hsl(217, 19%, 35%)";
    } else {
        shareClick.style.display = "none";
        btn.style.background = "hsl(210, 46%, 95%)";
    }
});
