//////////////////////////////////////////////////////////////////////
//
// COOKIES
//
//////////////////////////////////////////////////////////////////////

function setCookie(cname, cvalue, expires) {
  var d = new Date();
  d.setTime(d.getTime() + expires);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return false;
}

//////////////////////////////////////////////////////////////////////
//
// ARRAY
//
//////////////////////////////////////////////////////////////////////

if (!Array.prototype.find) {
  Array.prototype.find = function (test_func) {
    var goodValue;
    for (var i = 0; i < this.length; ++i) {
      var el = this[i];
      var test = test_func(el);
      if (test) return el;
    }
  };
}

if (!Array.prototype.unique) {
  Array.prototype.unique = function (array) {
    var t, a, b;
    a = this;
    b = array;
    if (b.length > a.length) (t = b), (b = a), (a = t);
    return a.filter(function (e) {
      return b.indexOf(e) == -1;
    });
  };
}

if (!Array.prototype.intersect) {
  Array.prototype.intersect = function (array) {
    var t, a, b;
    a = array;
    b = this;
    if (b.length > a.length) (t = b), (b = a), (a = t);
    return a.filter(function (e) {
      return b.indexOf(e) > -1;
    });
  };
}

if (!Array.prototype.shuffle) {
  Array.prototype.shuffle = function () {
    var a = this;
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  };
}

//////////////////////////////////////////////////////////////////////
//
// URL
//
//////////////////////////////////////////////////////////////////////

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//////////////////////////////////////////////////////////////////////
//
// ROLLABLES ITEMS
//
//////////////////////////////////////////////////////////////////////

$("body")
  .on("mouseenter", ".rollable", function () {
    $(this).addClass("over");
  })
  .on("mouseleave", ".rollable", function () {
    $(this).removeClass("over");
  });

function sort_blocks(a, b) {
  return $(b).data("top") > $(a).data("top") ? -1 : 1;
}

//////////////////////////////////////////////////////////////////////
//
// FORMS
//
//////////////////////////////////////////////////////////////////////

function initFormEls($form) {
  $form.find("input[type=text], textarea").focus(function () {
    $(this).removeClass("error");
  });

  $form.find("textarea").blur(function () {
    if ($(this).val() == "") {
      $(this).val($(this).data("placeholder"));
      $(this).addClass("placeholder");
    }
  });

  $form.find("textarea").focus(function () {
    if ($(this).val() == $(this).data("placeholder")) {
      $(this).val("");
      $(this).removeClass("placeholder");
    }
  });

  $form.find("textarea").each(function (index, item) {
    if ($(this).val() == "") {
      $(this).val($(this).data("placeholder"));
      $(this).addClass("placeholder");
    }
  });
}

function clearFormEls($form) {
  $form.find("input[type=text], textarea").unbind();
}

function isValidMail(email) {
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    return false;
  }
  if (email.lastIndexOf(" ") != -1) return false;
  return true;
}

function isValidName(str) {
  if (str.match(/[0-9]/) || str.length < 2) return false;
  return true;
}

//////////////////////////////////////////////////////////////////////
//
// PREVENT SCROLL
//
//////////////////////////////////////////////////////////////////////

var scrollkeys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (scrollkeys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener)
    // older FF
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
  $("body").addClass("noScroll");
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
  $("body").removeClass("noScroll");
}

//////////////////////////////////////////////////////////////////////
//
// MATHS
//
//////////////////////////////////////////////////////////////////////

function getDistance(x1, x2, y1, y2) {
  var diffX = x1 - x2;
  var diffY = y1 - y2;
  return Math.sqrt(diffX * diffX + diffY * diffY);
}
