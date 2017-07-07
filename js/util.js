function extend(o1, o2) {
    for (let key in o2) {
        if (o2.hasOwnProperty(key)) {
            o1[key] = o2[key];
        }
    }
}
function loadImage(imgUrl, fn) {
    let Obj = {};
    let loadNum = 0, loadedNum = 0, imgTemp;
    for (let key in imgUrl) {
        loadNum++;
        imgTemp = new Image();
        imgTemp.onload = function () {
            loadedNum++;
            if (loadedNum >= loadNum) {
                fn(Obj);
            }
        }
        imgTemp.src = imgUrl[key];
        Obj[key] = imgTemp;
    }

}