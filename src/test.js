let uncheckedNodes = [1,2,3,4,5,6,7,8,9,0]
let downTo = 5
// p = range(len(uncheckedNodes) - 1, downTo - 1, -1 )
// for i in p:
//     print(i)
 for (let i = uncheckedNodes.length - 1; i >= downTo-1;i--) {
     console.log(i)
 }