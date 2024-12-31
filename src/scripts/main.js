import { potteryData } from '../data/potteryData.js';
import { makePottery } from './potteryWheel.js';
import { firePottery } from './kiln.js';
import { toSellOrNotToSell, usePottery } from './potteryCatalog.js';
import { potteryList } from './potteryList.js';

// Make 5 pieces of pottery at the wheel
const potteryDesigns = potteryData.potteryDesigns;
let potteryWheelPieces = [];

potteryDesigns.forEach(design => {
    potteryWheelPieces.push(makePottery(design.shape, design.weight, design.height))
});


// Fire each piece of pottery in the kiln
const kilnTemps = [1200, 2500, 1500, 2200, 2199]
let counter = 0;
potteryWheelPieces.forEach(unfiredPiece => {
    firePottery(unfiredPiece, kilnTemps[counter]);
    counter ++;
});
// Determine which ones should be sold, and their price
potteryWheelPieces.forEach(firedPiece => {
    toSellOrNotToSell(firedPiece)
});
const sellablePottery = usePottery();

// Invoke the component function that renders the HTML list
const potterylist = document.getElementById('potteryList');
potterylist.innerHTML = potteryList();
