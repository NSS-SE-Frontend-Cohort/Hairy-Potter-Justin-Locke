//variable to have the value of the primary key for each piece of pottery. Initial value of 1.
let primaryKey = 1;
//Define and export a function named makePottery.
//Function must accept Shape, weight, height as parameters
//function must return an object with shape, weight, height, id (increment each time the function is invoked) as properties.

export const makePottery = (shape, weight, height) => {
    
    const potteryPiece = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey
    };
    
    primaryKey += 1;

    return potteryPiece;
}
