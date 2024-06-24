'use strict'

directory = '';

document.addEventListener("DOMContentLoaded", () => {
    sign('#cover', '#flash', 'sign/index.csv')
    orgNav(feel, "feel")
    orgAll('#org ul', 'org/index.csv')

    thisIMG("#img aside", imgArr)
    thisIMG("#weare aside", weareArr)
    thisIMG("#sign aside", signArr)
    thisIMG("#www aside", wwwArr)
    thisIMG("#org aside", orgArr)

    fetchHTML("img/readme.html", "#img section")
    fetchHTML("weare/readme.html", "#weare section")
    fetchHTML("sign/readme.html", "#sign section")
    fetchHTML("www/readme.html", "#www section")
    fetchHTML("org/readme.html", "#org div")
});

window.addEventListener("beforeprint", () => {
    thisIMG("#img aside", imgAll)
    thisIMG("#weare aside", weareAll)
    thisIMG("#sign aside", signAll)
    thisIMG("#www aside", wwwAll)
    fetchHTML("readme.html", "#img section")
})

window.addEventListener("afterprint", () => {
    thisIMG("#img aside", imgArr)
    thisIMG("#weare aside", weareArr)
    thisIMG("#sign aside", signArr)
    thisIMG("#www aside", wwwArr)
    fetchHTML("img/readme.html", "#img section")
})

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        videoId: '03NUCp-h_tM',
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'rel': 0
        }
    });
}