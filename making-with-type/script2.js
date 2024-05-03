document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.blocks-container');
    const numberOfBlocks = 20; // 创建100个色块

    for (let i = 0; i < numberOfBlocks; i++) {
        const block = document.createElement('div');
        block.classList.add('color-block');
        // 随机位置
        block.style.top = `${Math.random() * 100}%`;
        block.style.left = `${Math.random() * 100}%`;
        container.appendChild(block);
    }
});
