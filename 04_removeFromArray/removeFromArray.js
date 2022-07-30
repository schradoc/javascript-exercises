// const removeFromArray = function(myArray, remove) {
//     for (var i = 0 ; i < myArray.length ; i++){
//         if (myArray[i] === remove) {
//             myArray.splice(i,1);
//         }
//     }
//     return myArray;
// }

const removeFromArray = function(...args){
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        if(!args.includes(item)){
            newArray.push(item);
        }
    });
  return newArray
}
// Do not edit below this line
module.exports = removeFromArray;