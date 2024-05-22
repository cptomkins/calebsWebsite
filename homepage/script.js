document.addEventListener('DOMContentLoaded', () => {
    const toggleRotation = document.getElementById('toggleRotation');
    const rotationDisplays = document.querySelectorAll('.rotation-display');

    // Initially hide rotation displays
    rotationDisplays.forEach(display => {
        display.style.display = 'none';
    });

    toggleRotation.checked = false;

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

            // Initialize rotation display text
            let rotationDisplayText = "";

            switch (index) {
                case 0:
                    button.style.transform = `rotate3d(1, 1, 0, ${rotationX}deg)`;
                    rotationDisplayText = `(1, 1, 0, ${rotationX}deg)`
                    break;
                case 1:
                    button.style.transform = `rotate3d(1, 0, 1, ${rotationY}deg)`;
                    rotationDisplayText = `(1, 0, 1, ${rotationY}deg)`
                    break;
                case 2:
                    button.style.transform = `rotate3d(0, 1, 1, ${rotationZ}deg)`;
                    rotationDisplayText = `(0, 1, 1, ${rotationZ}deg)`
                    break;
                default:
                    button.style.transform = `rotateY(${rotationY}deg)`;
                    rotationDisplayText = `(0, 1, 0, ${rotationY}deg)`
                    break;
            }
            // Update the rotation display
            button.querySelector('.rotation-display').textContent = rotationDisplayText;
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

                let rotationDisplayText = "";

                switch (index) {
                    case 0:
                        button.style.transform = `rotate3d(1, 1, 0, ${rotationX}deg)`;
                        rotationDisplayText = `(1, 1, 0, ${rotationX}deg)`
                        break;
                    case 1:
                        button.style.transform = `rotate3d(1, 0, 1, ${rotationY}deg)`;
                        rotationDisplayText = `(1, 0, 1, ${rotationY}deg)`
                        break;
                    case 2:
                        button.style.transform = `rotate3d(0, 1, 1, ${rotationZ}deg)`;
                        rotationDisplayText = `(0, 1, 1, ${rotationZ}deg)`
                        break;
                    default:
                        button.style.transform = `rotateY(${rotationY}deg)`;
                        rotationDisplayText = `(0, 1, 0, ${rotationY}deg)`
                        break;
                }
                // Update the rotation display
                button.querySelector('.rotation-display').textContent = rotationDisplayText;
            }, 50);
        });

        const heading = document.querySelector('h1');
        const subtitle = document.querySelector('.subtitle');
        const buttonContainer = document.querySelector('.button-container');
        const buttons = document.querySelectorAll('.button');

        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();

                // Fade out the heading first
                heading.style.transition = 'opacity 0.3s ease-in-out'; // Faster fade for heading
                heading.style.opacity = 0;
                subtitle.style.transition = 'opacity 0.3s ease-in-out';
                subtitle.style.opacity = 0;

                // Fade out the button container after a short delay
                setTimeout(() => {
                    buttonContainer.style.transition = 'opacity 0.5s ease-in-out';
                    buttonContainer.style.opacity = 0;

                    // Navigate after everything has faded out
                    setTimeout(() => {
                        window.location.href = button.href;
                    }, 500);
                }, 200); // 200ms delay before fading out buttons
            });
        });

    });
});
