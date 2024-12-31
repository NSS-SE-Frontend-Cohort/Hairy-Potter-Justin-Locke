let potteryToSell = [];

export const toSellOrNotToSell = (potteryPiece) => {
    if (!potteryPiece.cracked) {
        potteryPiece.price = potteryPiece.weight >= 6 ? 40 : 20;
        potteryToSell.push(potteryPiece)
    }

    return potteryPiece;

}

export const usePottery = () => {
    return [...potteryToSell];
}