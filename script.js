document.addEventListener('DOMContentLoaded', () => {
    const apple = document.getElementById('apple2d');
    let speed = 4; 

    function updateRotation() {
        apple.style.animation = `spin ${speed}s linear infinite`;
    }

    updateRotation();
});
