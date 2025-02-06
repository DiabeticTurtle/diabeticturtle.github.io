// External JavaScript file for options

document.addEventListener('DOMContentLoaded', function () {
    // Get the container element
    var container = document.querySelector('.bg');

    // Define the environment and particle options
    var options = {
        "environment": {
            "gradient": "radial",
            "sensitivity": 0.28,
            "colorStart": [97, 25, 52, 1],
            "colorEnd": [0, 0, 0, 1],
            "WaterMark": "false"
        },
        "particle": {
            "life": 1.2,
            "power": 0.013,
            "texture": "https://res.cloudinary.com/naker-io/image/upload/v1566560053/heart_01.png",
            "number": 1004,
            "colorStart": [211, 66, 140, 0.33],
            "colorEnd": [208, 117, 107, 0.2],
            "sizeStart": 0.42,
            "sizeEnd": 0.84,
            "direction1": {
                "x": 0,
                "y": 100,
                "z": 100
            },
            "direction2": {
                "x": 0,
                "y": -100,
                "z": -100
            }
        }
    };

    // Add the data-option attribute to the container element
    if (container && typeof container.dataset !== 'undefined' && typeof container.dataset.option !== 'undefined') {
        container.setAttribute('data-option', JSON.stringify(options));
    } else {
        console.error('Container or option not found.');
    }
});
