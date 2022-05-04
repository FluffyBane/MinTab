var random = Math.floor(Math.random() * BACKGROUND_IMAGES.length)
var current = BACKGROUND_IMAGES[random]

var body = document.querySelector("body")
if (body != null) {
    var backgroundPath = getBaseUrl() + "/backgrounds/" + current
    console.log(backgroundPath)
    var attributeValue = "background-image: linear-gradient(var(--bgFilter), var(--bgFilter)), url(" + backgroundPath + ")"
    body.setAttribute('style', attributeValue)
}

function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
}