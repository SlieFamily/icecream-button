async function play(e, name) {
    createRipple(e);
    const buffer = await getBuffer("data/voices/" + name + ".AAC");
    buffer && playAudio(buffer);
}
  
function createRipple(event) {
    const button = event.target.closest('button'); // 确保获取最近的按钮元素
    if (!button) return; // 防御性检查

    const circle = document.createElement("div");
    button.appendChild(circle);
  
    // 计算水波纹的位置和大小
    var x =
        event.pageX ||
        document.documentElement.scrollLeft +
            document.body.scrollLeft +
            event.clientX;
    var y =
        event.pageY ||
        document.documentElement.scrollTop +
            document.body.scrollTop +
            event.clientY;
    var wx = button.offsetWidth;
    x = x - button.offsetLeft - wx / 2;
    y = y - button.offsetTop - wx / 2;
    circle.style.cssText =
        "width: " +
        wx +
        "px;height: " +
        wx +
        "px;top: " +
        y +
        "px;left: " +
        x +
        "px";
  
    // 启动动画
    circle.classList.add("ripple");
    setTimeout(() => circle.remove(), 1000);
}

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const playAudio = function (buffer) {
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start();
};
const getBuffer = function (url) {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.open("GET", url, true);
        request.responseType = "arraybuffer";
        request.onload = () => {
        audioContext.decodeAudioData(request.response, (buffer) =>
            buffer ? resolve(buffer) : reject("decoding error")
            );
        };
        request.onerror = (error) => reject(error);
        request.send();
    });
};

var ottocount = 0;
let isReplaced = false;

function otto(event) {
    let kj = event.currentTarget;
    const coverImg = kj.querySelector("img");

    // 第一阶段：点击10次切换图片
    if (!isReplaced) {
        ottocount++;
        
        if (ottocount >= 10) {
            // 切换图片逻辑
            coverImg.style.opacity = 0;
            setTimeout(() => {
                coverImg.src = "img/top2.jpg";
                coverImg.style.opacity = 1;
                isReplaced = true;
                ottocount = 0;  // 重置计数器用于第二阶段
            }, 500);
        } else {
            // 添加抖动效果
            kj.classList.add("shaky");
            setTimeout(() => {
                kj.classList.remove("shaky");
            }, 1000);
        }
    }
    // 第二阶段：切换后点击5次跳转
    else {
        ottocount++;
        if (ottocount >= 5) {
            window.location.href = "/icetap";
        } else {
            // 添加抖动效果
            kj.classList.add("shaky");
            setTimeout(() => {
                kj.classList.remove("shaky");
            }, 1000);
        }
    }
}

  