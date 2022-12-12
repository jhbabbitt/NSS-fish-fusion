const { mongerInventory } = require("./fishmonger.js")
const restaurantFish = mongerInventory()
const fishString = (restaurantFishObject) => {
    let fishMenuString = `<h1>Menu</h1>\n<article class="menu">\n`
    for (fish of restaurantFishObject) {
        fishMenuString += `<h2>${fish.species}</h2>\n\t<section class="menu__item">${fish.species} Soup</section>\n\t<section class="menu__item">${fish.species} Sandwich</section>\n\t<section class="menu__item">Grilled ${fish.species}</section>\n`
    }
    fishMenuString += `</article>`
    return fishMenuString
}
const fishMenu = () => {
    const finalFishMenuString = fishString(restaurantFish)
    return finalFishMenuString
}
module.exports = { fishMenu }
