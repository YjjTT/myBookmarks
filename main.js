// 1. 初始化数据
var hashA = init();
var keys = hashA["keys"];
var hash = hashA["hash"];

// 2. 生成键盘
for (var index = 0; index < keys["length"]; index = index + 1) {
  var div1 = tag("div");
  div1.className = "row";
  jjtt.appendChild(div1);

  var row = keys[index]; // 第一个数组, 第二个数组, 第三个数组
  for (var index2 = 0; index2 < row["length"]; index2 = index2 + 1) {
    var span = createSpanTag(row[index2]);

    var button = createButtonTag(row[index2]);

    var img = createImageTag(hash[row[index2]]);

    var kbd = tag("kbd");
    kbd.className = "key";
    kbd.appendChild(span);
    kbd.appendChild(button);
    kbd.appendChild(img);

    div1.appendChild(kbd);
  }
}

// 3. 键盘监听
document.onkeypress = function(sssss) {
  key = sssss["key"];
  website = hash[key];
  // location.href = 'http://'+website
  window.open("http://" + website, "_blank");
};

function getFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name) || "null");
}

function tag(tagName) {
  return document.createElement(tagName);
}

function createSpanTag(textContent) {
  var span = tag("span");
  span.textContent = textContent;
  span.className = "span";
  return span;
}

function createButtonTag(id) {
  var button = tag("button");
  button.textContent = "编辑";
  button.id = id;
  button.onclick = function(sssss) {
    var button2 = sssss.target;
    var img2 = button2.nextSibling;
    var key = button2["id"];
    var weburl = prompt("给我一个网址");
    hash[key] = weburl; // hash 变更
    img2.src = "http://" + weburl + "/favicon.ico";
    img2.onerror = function(error) {
      error.target.src =
      "//github.com/YjjTT/ImageFile/raw/master/img/20181229160901.png";
    };
    localStorage.setItem("uuu", JSON.stringify(hash));
  };
  return button;
}

function createImageTag(domain) {
  var img = tag("img");
  if (domain) {
    img.src = "http://" + domain + "/favicon.ico";
  } else {
    img.src = "//github.com/YjjTT/ImageFile/raw/master/img/20181229160901.png";
  }
  img.className = "img";
  img.onerror = function(error) {
    error.target.src =
    "//github.com/YjjTT/ImageFile/raw/master/img/20181229160901.png";
  };
  return img;
}
function init() {
  var keys = {
    "0": {
      0: "q",
      1: "w",
      2: "e",
      3: "r",
      4: "t",
      5: "y",
      6: "u",
      7: "i",
      8: "o",
      9: "p",
      length: 10
    },
    "1": {
      0: "a",
      1: "s",
      2: "d",
      3: "f",
      4: "g",
      5: "h",
      6: "j",
      7: "k",
      8: "l",
      length: 9
    },
    "2": {
      0: "z",
      1: "x",
      2: "c",
      3: "v",
      4: "b",
      5: "n",
      6: "m",
      length: 7
    },
    length: 3
  };
  var hash = {
    q: "qq.com",
    w: "weibo.com",
    e: "ele.me",
    r: "renren.com",
    t: "tianya.com",
    y: "youtube.com",
    u: "uc.com",
    i: "iqiyi.com",
    o: "opera.com",
    p: undefined,
    a: "acfun.com",
    s: "sohu.com"
  };
  var hashInLocalStorage = getFromLocalStorage("uuu");
  if (hashInLocalStorage) {
    hash = hashInLocalStorage;
  }
  return {
    keys: keys,
    hash: hash
  };
}
