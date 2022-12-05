// var obj = {
//     name: "Bunmi",
//     code: 121,
//     interests: ['Read','Travel']
// }

// // for (const {key,value} in obj) {
// //     console.log(key,value)
    
// // }

// console.log(Object.entries(obj))


// let arr = [1,2,3,4,5];

// const newArray = (arr) =>{
//     const ne = arr.map((value,index)=>{
//         if (index == arr.length - 1) {
//             return value + 1;
//         }else{
//             return value;
//         }
//     })
//     return ne;
// }

// console.log(newArray(arr))

const numResult = (arr) =>{
    let stringNumber = arr.join('');
    let numNumber = Number(stringNumber);
    let res = numNumber + 1;
    let str = res.toString();//12456
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(Number(str[i]))
        
    }
    return result;
}

console.log(numResult([1,9,9]))