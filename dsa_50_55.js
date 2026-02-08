// DSA_50: Segregate 0s and 1s
let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0];

let i = 0;
let j = 0;

while(i < arr.length) {
    if (arr[i] == 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
        j ++;
    }
    i ++;
}

console.log(arr);

// DSA_51: Reverse an arra
let arr = [1, 2, 3, 4, 5, 6];

let i = 0; let j = arr.length - 1;

while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}

console.log(arr);

// DSA_52: Left rotate an array by 1
let arr = [1, 2, 3, 4, 5];

let copy = arr[0];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
}

arr[arr.length - 1] = copy;

console.log(arr);
