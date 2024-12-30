const { makePottery } = require('./potteryWheel')
const { firePottery } = require('./kiln')

// Make 5 pieces of pottery at the wheel
const mug = makePottery("Mug", 4, 10)
let ornament = makePottery("Ornament", 2, 5)
let platter = makePottery("Platter", 7, 2)
let bowl = makePottery("Bowl", 12, 4)
let planter = makePottery("Planter", 50, 25)

const potteryWheelPieces = [mug, ornament, platter, bowl, planter]
// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 1200)
const firedOrnament = firePottery(ornament, 2500)
const firedPlatter = firePottery(platter, 1500)
const firedBowl = firePottery(bowl, 2200)
const firedPlanter = firePottery(planter, 2199)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

