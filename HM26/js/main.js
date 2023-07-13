
const voteTales = [
    { id: "vote-tale-1", emoji: '😄', count: 0 },
    { id: "vote-tale-2", emoji: '😊', count: 0 },
    { id: "vote-tale-3", emoji: '😐', count: 0 },
    { id: "vote-tale-4", emoji: '😕', count: 0 },
    { id: "vote-tale-5", emoji: '😢', count: 0 }
];

const root = document.getElementById('root');

root.addEventListener('click', (event) => {
    if (event.target.className === "vote-tale") {

        const voteTale = event.target;

        const option = voteTales.find(element => element.id === voteTale.id);
        option.count++;

        voteTale.childNodes[1].innerText = option.count;
    }
});


voteTales.forEach(tale => {

    const taleElement = document.createElement('div');
    const countElement = document.createElement('span');

    countElement.textContent = tale.count;
    countElement.className = "vote-count";

    taleElement.id = tale.id;
    taleElement.textContent = tale.emoji;
    taleElement.className = "vote-tale";

    taleElement.appendChild(countElement);
    root.appendChild(taleElement);
});
