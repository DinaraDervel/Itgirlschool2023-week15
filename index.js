const body = document.querySelector('body');
const cities = ['Пуэрто-Вальярта', "Челябинск", "Екатеринбург", "Белград"];
const temperatures = [];
const degreeSign = String.fromCharCode(176);

(() => {
    const div = document.createElement('div');
    body.appendChild(div);
    let i = 0;
    for (city of cities) {
        temperatures[i++] = prompt(`Введите температуру в ${city}`);
    }
    i = 0;
    for (city of cities) {
        const tempInCity = document.createElement('p');
        tempInCity.textContent = `Температура в городе ${city}: ${temperatures[i++]}${degreeSign}C`;
        div.appendChild(tempInCity);
    }
    const maxTemp = document.createElement('h2');
    maxTemp.textContent = `Максимальная температура: ${maxOfArray(temperatures)}${degreeSign}C`;
    body.appendChild(maxTemp);
    const minTemp = document.createElement('h2');
    minTemp.textContent = `Минимальная температура: ${minOfArray(temperatures)}${degreeSign}C`;
    body.appendChild(minTemp);
})();

function maxOfArray(array) {
    const min = -1000;
    let max = min;
    for (elem of array) max = (+elem > max) ? +elem : max;
    return max;
}

function minOfArray(array) {
    const max = 1000;
    let min = max;
    for (elem of array) min = (+elem < min) ? +elem : min;
    return min;
}