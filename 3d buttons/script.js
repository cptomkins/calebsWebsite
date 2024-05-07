document.addEventListener('DOMContentLoaded', () => {
    const toggleRotation = document.getElementById('toggleRotation');
    const rotationDisplays = document.querySelectorAll('.rotation-display');

    toggleRotation.addEventListener('change', () => {
        rotationDisplays.forEach(display => {
            display.style.display = toggleRotation.checked ? 'block' : 'none';
        });
    });

    document.querySelectorAll('.button').forEach((button, index) => {
        let rotationX = 0;
        let rotationY = 0;
        let rotationZ = 0;
        let intervalId = setInterval(() => {
            rotationX = (rotationX + 1) % 360;
            rotationY = (rotationY + 1) % 360;
            rotationZ = (rotationZ + 1) % 360;

            switch (index) {
                case 0:
                    button.style.transform = `rotate3d(1, 1, 0, ${rotationX}deg)`;
                    break;
                case 1:
                    button.style.transform = `rotate3d(1, 0, 1, ${rotationY}deg)`;
                    break;
                case 2:
                    button.style.transform = `rotate3d(0, 1, 1, ${rotationZ}deg)`;
                    break;
                default:
                    button.style.transform = `rotateY(${rotationY}deg)`;
                    break;
            }
            // Update the rotation display
            button.querySelector('.rotation-display').textContent = `(${rotationX}, ${rotationY}, ${rotationZ})`;
        }, 75);

        button.addEventListener('mouseover', () => {
            clearInterval(intervalId);
            button.style.transform = 'rotateY(0deg)';
            button.querySelector('.rotation-display').textContent = `(0, 0, 0)`;
        });

        button.addEventListener('mouseout', () => {
            intervalId = setInterval(() => {
                rotationX = (rotationX + 1) % 360;
                rotationY = (rotationY + 1) % 360;
                rotationZ = (rotationZ + 1) % 360;

                switch (index) {
                    case 0:
                        button.style.transform = `rotate3d(1, 1, 0, ${rotationX}deg)`;
                        break;
                    case 1:
                        button.style.transform = `rotate3d(1, 0, 1, ${rotationY}deg)`;
                        break;
                    case 2:
                        button.style.transform = `rotate3d(0, 1, 1, ${rotationZ}deg)`;
                        break;
                    default:
                        button.style.transform = `rotateY(${rotationY}deg)`;
                        break;
                }
                // Update the rotation display
                button.querySelector('.rotation-display').textContent = `(${rotationX}, ${rotationY}, ${rotationZ})`;
            }, 50);
        });
    });
});
