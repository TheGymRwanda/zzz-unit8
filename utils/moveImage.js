const TweenMax = require("/public/cdnjs/TweenMax.min.js");
function movingImg() {
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

  window.onresize = resizeWidthAndHeight();

  randoms.style.display = "";
  TweenMax.set(randoms, { alpha: 0 });
  TweenMax.to(randoms, 0.7, {
    alpha: 1,
    ease: Power3.easeInOut,
    onComplete: function () {
      gravityX = ww / 2;
      gravityY = wh / 2;

      window.addEventListener("deviceorientation", window.processMotion);
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

  window.processMotion = function (event) {
    let x = event.gamma / 40; // En degré sur l'interval [-180,180].
    let y = event.beta / 70 - 0.5; // En degré sur l'interval [-90,90].
    let gravityX, gravityY;
    gravityX = (x * ww) / 2 + ww / 2;
    gravityY = (y * wh) / 2 + wh / 2;

    gravityX = Math.min(Math.max(gravityX, 50), ww - 50);
    gravityY = Math.min(Math.max(gravityY, 50), wh - 50);

    let dist = getDistance(oldMouseX, gravityX, oldMouseY, gravityY);
    if (dist > 20) {
      oldMouseX = gravityX;
      oldMouseY = gravityY;
      if (++randIndex > randImages.length - 1) randIndex = 0;
      let img = randImages[randIndex];
      if (img.width && img.height) {
        if (devicePixelRatio) {
          contex.drawImage(
            img,
            oldMouseX * devicePixelRatio - (img.width / 8) * devicePixelRatio,
            oldMouseY * devicePixelRatio - (img.height / 8) * devicePixelRatio,
            (img.width / 4) * devicePixelRatio,
            (img.height / 4) * devicePixelRatio
          );
        } else {
          contex.drawImage(
            img,
            oldMouseX - img.width / 8,
            oldMouseY - img.height / 8,
            img.width / 4,
            img.height / 4
          );
        }
      }
    }
  };

  window.randomPics = function (e) {
    if (window.DeviceMotionEvent) {
      window.removeEventListener("devicemotion", window.processMotion, false);
    }

    let dist = getDistance(oldMouseX, e.clientX, oldMouseY, e.clientY);
    if (dist > 20) {
      oldMouseX = e.clientX;
      oldMouseY = e.clientY;
      if (++randIndex > randImages.length - 1) randIndex = 0;

      let img = randImages[randIndex];

      if (img.width && img.height) {
        if (ww > 600) {
          if (devicePixelRatio) {
            contex.drawImage(
              img,
              oldMouseX * devicePixelRatio - (img.width * devicePixelRatio) / 4,
              oldMouseY * devicePixelRatio -
                (img.height * devicePixelRatio) / 4,
              (img.width * devicePixelRatio) / 2,
              (img.height * devicePixelRatio) / 2
            );
          } else {
            contex.drawImage(
              img,
              oldMouseX - img.width / 2,
              oldMouseY - img.height / 2,
              img.width,
              img.height
            );
          }
        } else {
          if (devicePixelRatio) {
            contex.drawImage(
              img,
              oldMouseX * devicePixelRatio - img.width / 4,
              oldMouseY * devicePixelRatio - img.height / 4,
              img.width / 2,
              img.height / 2
            );
            document.querySelector(".dummy").style.display = "none";
          } else {
            contex.drawImage(
              img,
              oldMouseX - img.width / 4,
              oldMouseY - img.height / 4,
              img.width / 2,
              img.height / 2
            );
          }
        }
      }
    }
  };
}

export default movingImg;
