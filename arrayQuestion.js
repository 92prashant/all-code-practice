//q1
/*let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of marks){
    sum+=val;
}
let avg = sum/marks.length;
console.log(`Average marks of the class is = ${avg}`);*/

//q2
let items = [250, 645, 300, 900, 50];
for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i]-=offer;
}
console.log(items);
