document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const texts = document.querySelectorAll('.zoom-text');
    const animationDuration = 1000; // 动画持续时间

    // 执行放大缩小动画
    function zoomText(text) {
        text.style.fontSize = '61px'; // 放大文本
        setTimeout(() => {
            // 如果没有鼠标悬停，则缩小文本
            if (!text.matches(':hover')) {
                text.style.fontSize = '40px'; // 缩小文本
            }
        }, animationDuration);
    }

    // 开始下一个文本的动画
    function nextTextAnimation() {
        if (currentIndex < texts.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        zoomText(texts[currentIndex]);
    }

    texts.forEach(text => {
        text.addEventListener('transitionend', (event) => {
            if (event.propertyName === 'font-size') {
                nextTextAnimation();
            }
        });

        // 也可以选择在鼠标离开时缩小字体
        text.addEventListener('mouseleave', () => {
            if (text.style.fontSize !== '37px') {
                text.style.fontSize = '37px'; // 缩小文本
            }
        });
    });

    // 开始第一个文本的动画
    zoomText(texts[currentIndex]);
});
