'use stric';
function loadItem() {
    return fetch('/data/data.json')
        .then(response => response.json())
        .then(json => json.item);//json에서 item 받아오기
}
function displayItems(items) {
    const container = document.querySelector('.items');
    const html = items.map(items => createHtmlString(items)).join('');
    console.log(items);
    console.log(html);
    container.innerHTML = items.map(item => createHtmlString(item)).join('');
}

function createHtmlString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}">
        <span>${item.gender}, ${item.size}</span>
    </li>
`;
}
function onButtonclick(event, items) {
    console.log(event);
    console.log(items);
    const data = event.target.dataset;
    const key = data.key;
    const value = data.value;
    const test = items.filter(item => item[key] === value);
    console.log(test);
    displayItems(test);
    console.log(event.target.dataset.key);
    console.log(event.target.dataset.value);

}
function filterItems(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', () => onButtonclick(event, items));

}

loadItem()//
    .then(items => {
        console.log(items);
        displayItems(items);
        filterItems(items);
    })
    .catch(console.log);
