const TweenMax = require("/public/cdnjs/TweenMax.min.js");

function movingImg() {
  let previousImage = {
    imgs: "",
    dx: 0,
    dy: 0,
    dh: 0,
    dw: 0,
  };
  let ww, wh;
  function resizeWidthAndHeight() {
    ww = window.innerWidth;
    wh = window.innerHeight;
    if (devicePixelRatio) {
      canvas.width = ww * devicePixelRatio;
      canvas.height = wh * devicePixelRatio;
    } else {
      canvas.width = ww;
      canvas.height = wh;
    }
  }

  let randoms = document.querySelector(".randoms");
  let canvas = document.getElementById("randCanvas");
  let contex = canvas.getContext("2d");
  let gravityX, gravityY;
  let randImages = document.querySelectorAll("#randsImages .img");
  let randIndex = 0;
  let def = document.querySelector(".gray-img");
  window.onresize = resizeWidthAndHeight();
  randoms.style.display = "";
  TweenMax.set(randoms, { alpha: 0 });
  TweenMax.to(randoms, 0.7, {
    alpha: 1,
    ease: Power3.easeInOut,
    onComplete: function () {
      gravityX = ww / 2;
      gravityY = wh / 2;

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
    let dist = getDistance(oldMouseX, e.clientX, oldMouseY, e.clientY);
    if (dist > 20) {
      oldMouseX = e.clientX;
      oldMouseY = e.clientY;
      if (++randIndex > randImages.length - 1) randIndex = 0;

      let img = randImages[randIndex];

      if (img.width && img.height) {
        if (ww > 600) {
          if (devicePixelRatio) {
            if (previousImage.imgs !== "") {
              contex.drawImage(
                def,
                previousImage.dx,
                previousImage.dy,
                previousImage.dw,
                previousImage.dh
              );
            }
            contex.drawImage(
              img,
              oldMouseX * devicePixelRatio - (img.width * devicePixelRatio) / 4,
              oldMouseY * devicePixelRatio -
                (img.height * devicePixelRatio) / 4,
              (img.width * devicePixelRatio) / 2,
              (img.height * devicePixelRatio) / 2
            );
            previousImage.imgs = img;
            previousImage.dx =
              oldMouseX * devicePixelRatio - (img.width * devicePixelRatio) / 4;
            previousImage.dy =
              oldMouseY * devicePixelRatio -
              (img.height * devicePixelRatio) / 4;
            previousImage.dh = (img.height * devicePixelRatio) / 2;
            previousImage.dw = (img.width * devicePixelRatio) / 2;
          } else {
            if (previousImage.imgs !== "") {
              contex.drawImage(
                def,
                previousImage.dx,
                previousImage.dy,
                previousImage.dw,
                previousImage.dh
              );
            }
            contex.drawImage(
              img,
              oldMouseX - img.width / 2,
              oldMouseY - img.height / 2,
              img.width,
              img.height
            );
            previousImage.imgs = img;
            previousImage.dx =
              oldMouseX * devicePixelRatio - (img.width * devicePixelRatio) / 2;
            previousImage.dy =
              oldMouseY * devicePixelRatio -
              (img.height * devicePixelRatio) / 2;
            previousImage.dh = img.height;
            previousImage.dw = img.width;
          }
        } else {
          if (devicePixelRatio) {
            if (previousImage.imgs !== "") {
              contex.drawImage(
                def,
                previousImage.dx,
                previousImage.dy,
                previousImage.dw,
                previousImage.dh
              );
            }
            contex.drawImage(
              img,
              oldMouseX * devicePixelRatio - img.width / 4,
              oldMouseY * devicePixelRatio - img.height / 4,
              img.width / 2,
              img.height / 2
            );
            previousImage.imgs = img;
            previousImage.dx =
              oldMouseX * devicePixelRatio - (img.width * devicePixelRatio) / 4;
            previousImage.dy =
              oldMouseY * devicePixelRatio -
              (img.height * devicePixelRatio) / 4;
            previousImage.dh = (img.height * devicePixelRatio) / 2;
            previousImage.dw = (img.width * devicePixelRatio) / 2;

            document.querySelector(".dummy").style.display = "none";
          } else {
            if (previousImage.imgs !== "") {
              contex.drawImage(
                def,
                previousImage.dx,
                previousImage.dy,
                previousImage.dw,
                previousImage.dh
              );
            }
            contex.drawImage(
              img,
              oldMouseX - img.width / 4,
              oldMouseY - img.height / 4,
              img.width / 2,
              img.height / 2
            );
            previousImage.imgs = img;
            previousImage.dx =
              oldMouseX * devicePixelRatio - (img.width * devicePixelRatio) / 4;
            previousImage.dy =
              oldMouseY * devicePixelRatio -
              (img.height * devicePixelRatio) / 4;
            previousImage.dh = (img.height * devicePixelRatio) / 2;
            previousImage.dw = (img.width * devicePixelRatio) / 2;
          }
        }
      }
    }
  };
}

export default movingImg;
