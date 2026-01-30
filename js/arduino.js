const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');
const overlay = document.querySelector('.overlay');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('show');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('show');
  overlay.classList.remove('show');
});

function copyCode(button) {
    // 修正：按鈕就在 .code-block 裡面，所以要找的是按鈕的父元素內的 <code>
    // 或者直接找按鈕下一個兄弟節點 pre 裡面的 code
    const codeContainer = button.parentElement.querySelector('code');
    
    if (!codeContainer) {
        console.error("找不到程式碼區塊！");
        return;
    }

    const text = codeContainer.innerText;

    navigator.clipboard.writeText(text).then(() => {
        // 成功後的視覺回饋
        const originalHTML = button.innerHTML; // 保留原本的圖示
        button.innerText = "已複製！";
        button.style.backgroundColor = "#2ecc71";

        setTimeout(() => {
            button.innerHTML = originalHTML; // 恢復圖示
            button.style.backgroundColor = "";
        }, 2000);
    }).catch(err => {
        console.error('複製失敗: ', err);
    });
}