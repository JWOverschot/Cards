
// Load JSON data
(async () => {
    const response = await fetch('storage/data/cards.json')
    const data = await response.json()

    await loadTemplate()
})();

// Load and set template
async function loadTemplate() {
    const response = await fetch('components/card/card.html')
    const data = await response.text()

    const parser = new DOMParser()
    const temp = parser.parseFromString(data, 'text/html')

    for (let node of temp.body.children) {
        document.getElementsByTagName('body')[0].append(node)
    }
}