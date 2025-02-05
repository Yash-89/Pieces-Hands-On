const facts = [
    "Honey never spoils.",
    "A group of flamingos is called a 'flamboyance'.",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "The Eiffel Tower can be 15 cm taller during the summer."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').innerText = facts[randomIndex];
});
