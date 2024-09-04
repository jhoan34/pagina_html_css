/*
let arr = [1,2,8,9,7,8,2,5,5,5,5,5,5,2,2,3,3,5,5,];

function duplicate (arr) {
    let duplicate = []
    let normal = []
    for(let i = 0; i < arr.length; i++){
        if(normal.includes(arr[i])){
            duplicate.push(arr[i])

        }else{
            normal.push(arr[i])
        }
    }
    console.log(duplicate.sort(),"lllllllllllll")
    console.log(normal, "eeeeeeeeeee")


}

duplicate(arr)
*/

const arr = [0,1]

function fibo (num) {
  for(let i = 2; i <= num; i++){
    arr.push(arr[i-1] + arr[i-2])
  }
    
}


fibo(10)

console.log(arr)