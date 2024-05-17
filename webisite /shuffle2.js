document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('animated-text');
    var scale = 1;
    var step = 0.01; // 变化步长，可以根据需要调整该值

    function animate() {
        if (scale >= 1.5 || scale <= 0.5) {
            step = -step; // 反转拉伸方向
        }
        scale += step;
        element.style.transform = 'scaleX(' + scale + ')';
        requestAnimationFrame(animate); // 请求下一帧动画
    }

    requestAnimationFrame(animate); // 开始动画循环
});

