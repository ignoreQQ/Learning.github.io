// 動態生成的公告資訊
const announcements = [
    { title: "敬請期待！", content: "敬請期待！" },
    { title: "敬請期待！", content: "敬請期待！" },
    { title: "敬請期待！", content: "敬請期待！" }
];

// 將公告動態插入到網頁中
const announcementBoard = document.getElementById('announcement-board');
announcements.forEach(announcement => {
    const announcementItem = document.createElement('div');
    announcementItem.classList.add('announcement-item');
    announcementItem.innerHTML = `<h3>${announcement.title}</h3><p>${announcement.content}</p>`;
    announcementBoard.appendChild(announcementItem);
});

// 這裡可以添加其他 JavaScript 互動的部分，例如表單驗證等

var slideIndex = 0;
var slideInterval;
var progressBar = document.getElementById("progress-bar");

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function startSlideshow() {
  slideInterval = setInterval(showSlides, 3000); // 設定間隔為3秒
}

function stopSlideshow() {
  clearInterval(slideInterval);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n === undefined) {
    // 自動播放時
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
  } else {
    // 手動切換圖片時
    if (n < 1) {
      slideIndex = slides.length;
    } else if (n > slides.length) {
      slideIndex = 1;
    } else {
      slideIndex = n;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  // 更新進度條
  updateProgressBar();
}

function updateProgressBar() {
  var progress = (slideIndex / document.getElementsByClassName("mySlides").length) * 100;
  progressBar.style.width = progress + "%";
}
document.addEventListener("DOMContentLoaded", function () {
    showSlides();
  });
