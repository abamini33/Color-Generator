const colorDisplay = document.getElementById("colorDisplay");

generatorBackground = () => {
    const rgb1 = Math.floor(Math.random() * 255);
    const rgb2 = Math.floor(Math.random() * 255);
    const rgb3 = Math.floor(Math.random() * 255);
    const rgbGenerator = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    colorDisplay.innerHTML = rgbGenerator;
    document.body.style.backgroundColor = rgbGenerator;
};

setInterval(generatorBackground, 1000);
