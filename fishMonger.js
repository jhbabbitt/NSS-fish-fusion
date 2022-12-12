const { goFishing } = require("./fishingBoat.js")
const mongerFilterFishAmount = (boatInventory) => {
    const mongeredFish1 = []
    for  (const fish of boatInventory) {
        if (fish.amount >= 10) {
            mongeredFish1.push(fish)
        }
    }
    return mongeredFish1
}
const mongerFilterFishHighPrice = (boatInventory) => {
    const mongeredFish2 = []
    for (const fish of boatInventory) {
        if (fish.price <= 7.5) {
            mongeredFish2.push(fish)
        }
    }
    return mongeredFish2
}
const mongerFilterFishChef = (boatInventory, budget) => {
    const mongeredFish3 = []
    for (const fish of boatInventory) {
        if (fish.price <= budget) {
            mongeredFish3.push(fish)
        }
    }
    return mongeredFish3
}
const mongerTen = (boatInventory) => {
    for (const fish of boatInventory) {
        fish.amount = 10
    }
    return boatInventory
}
const newCatch = goFishing()
const filterOne = mongerFilterFishAmount(newCatch)
const filterTwo = mongerFilterFishHighPrice(filterOne)
const filterThree = mongerFilterFishChef (filterTwo, 7)

const mongerInventory = () => {
    const finalInventory = mongerTen(filterThree)
    return finalInventory
}
module.exports = { mongerInventory } 