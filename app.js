let header = document.querySelector('header');
let headerAnchor = document.querySelectorAll('header nav ul li a');

window.addEventListener('scroll', () => {
  if (window.pageYOffset != 0) {
    // 0表示滾輪於網頁最頂端
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    header.style.color = 'white';

    headerAnchor.forEach((a) => {
      a.style.color = 'white';
    });
  } else {
    header.style = '';
    // 回到最頂端時清除style inline設定

    headerAnchor.forEach((a) => {
      a.style.color = '#09777d';
    });
    // 修改為原先的藍綠色
  }
});
