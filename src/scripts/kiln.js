export const firePottery = (potteryObject, temperatureOfKiln) => {
    potteryObject.fired = true;
    potteryObject.cracked = null;
    if (temperatureOfKiln <= 2200) {
        potteryObject.cracked = false;
    } else {
        potteryObject.cracked = true;
    }

    return potteryObject;
}