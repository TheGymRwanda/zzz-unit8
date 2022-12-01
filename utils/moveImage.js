const TweenMax = require("/public/cdnjs/TweenMax.min.js");

export default function movingImg() {
    let prev = {
        imgs: "",
        dx: 0,
        dy: 0,
        dh: 0,
        dw: 0,
    };
    let windowWidth, windowHeight;
	let randoms = document.querySelector(".randoms");
    let canvas = document.getElementById("randCanvas");
    let contex = canvas.getContext("2d");
    let gravityX, gravityY;
    let randImages = document.querySelectorAll("#randsImages .img");
    let randIndex = 0;
    let def = document.querySelector(".def");


    function resizeWidthAndHeight() {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        if (devicePixelRatio) {
            canvas.width = windowWidth * devicePixelRatio;
            canvas.height = windowHeight * devicePixelRatio;
        } else {
            canvas.width = windowWidth;
            canvas.height = windowHeight;
        }
    }

    function drawGrayRect() {
        if (!prev.dx) return ;
        contex.beginPath();
        contex.lineWidth = "6";
        contex.fillStyle = "#E4E4E4";
        contex.rect(prev.dx-3, prev.dy-2, prev.dw+5, prev.dh+5);
        contex.fill();
    }

    function drawImageOnCanvas(img,mouseRatio,imageRatio) {
        contex.drawImage(
            img,
            oldMouseX * devicePixelRatio -  (img.width * devicePixelRatio) / mouseRatio,
            oldMouseY * devicePixelRatio -  (img.height * devicePixelRatio) / mouseRatio,
            (img.width * devicePixelRatio) / imageRatio,
            (img.height * devicePixelRatio) / imageRatio
        );
    }
    
    window.onresize = resizeWidthAndHeight();
	
    randoms.style.display = ""; 
	
    TweenMax.set(randoms, { alpha: 0 });
    TweenMax.to(randoms, 0.7, {
        alpha: 1,
        ease: Power3.easeInOut,
        onComplete: function () {
            gravityX = 0;
            gravityY =0;

            randoms.onmousemove = window.randomPics;
        },
    });

    function getDistance(x1, x2, y1, y2) {
        let diffX = x1 - x2;
        let diffY = y1 - y2;
        return Math.sqrt(diffX * diffX + diffY * diffY);
    }

    let oldMouseX = -1000;
    let oldMouseY = -1000;

    window.randomPics = function (e) {
        // let rect = canvas.getBoundingClientRect();
        let dist = getDistance(oldMouseX, e.clientX, oldMouseY, e.clientY);
        if (dist > 20) {
            oldMouseX = e.clientX;
            oldMouseY = e.clientY;
            if (++randIndex > randImages.length - 1) randIndex = 0;

            let img = randImages[randIndex];

            if (img.width && img.height) {
                if (windowWidth > 600) {
                    if (devicePixelRatio) {
                        // refact
                        drawGrayRect();
                        drawImageOnCanvas(img,4,2)                       
                        prev.dx = oldMouseX * devicePixelRatio -  (img.width * devicePixelRatio) / 4;
                        prev.dy = oldMouseY * devicePixelRatio -  (img.height * devicePixelRatio) / 4;
                        prev.dh = (img.height * devicePixelRatio) / 2;
                        prev.dw = (img.width * devicePixelRatio) / 2;
                    } else {
                        // refact
                        drawGrayRect();
                        drawImageOnCanvas(img,2,1);                      
                        prev.dx = oldMouseX * devicePixelRatio -  (img.width * devicePixelRatio) / 2;
                        prev.dy = oldMouseY * devicePixelRatio -  (img.height * devicePixelRatio) / 2;
                        prev.dh = img.height;
                        prev.dw = img.width;
                    }
                } else {
                    console
                    if (devicePixelRatio) {
                        // refact
                        drawGrayRect();
                        drawImageOnCanvas(img,4,2);
                        prev.dx = oldMouseX * devicePixelRatio - (img.width * devicePixelRatio) / 4;
                        prev.dy = oldMouseY * devicePixelRatio - (img.height * devicePixelRatio) / 4;
                        prev.dh = (img.height * devicePixelRatio) / 2;
                        prev.dw = (img.width * devicePixelRatio) / 2;

                        document.querySelector(".dummy").style.display = "none";
                    } else {
                        // refact
                        drawGrayRect();
                        drawImageOnCanvas(img,4,2);
                        prev.dx =  oldMouseX * devicePixelRatio - (img.width * devicePixelRatio) / 4;
                        prev.dy = oldMouseY * devicePixelRatio - (img.height * devicePixelRatio) / 4;
                        prev.dh = (img.height * devicePixelRatio) / 2;
                        prev.dw = (img.width * devicePixelRatio) / 2;
                    }
                }
            }
        }
    };
}
