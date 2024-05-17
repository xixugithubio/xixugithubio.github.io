document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progressBar');
    const progressContainer = progressBar.parentNode; // 获取进度条的容器

    let width = 0;
    const interval = setInterval(fillProgress, 20);

    function fillProgress() {
        if (width >= 100) {
            clearInterval(interval);
            fadeOutProgress();
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }

    function fadeOutProgress() {
        progressContainer.style.opacity = 0; // 透明度设置为0，作用于整个容器
        setTimeout(() => {
            progressContainer.style.display = 'none'; // 隐藏容器
        }, 2000); // 等待透明度过渡完成
    }
});
