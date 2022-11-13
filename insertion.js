// max to min //
const arr=[3, 6, -40, 75, 0, 27, 89, -51, -109, 47];
let l=arr.length;
for (let i=1; i<l; i++){
const currentV=arr[i];
let p=i;
while(p>0 && arr[p-1]<currentV){
    arr[p]=arr[p-1];
    p--;
}arr[p]=currentV;
}console.log(arr)

// min to max //
const arr=[3, 6, -40, 75, 0, 27, 89, -51, -109, 47];
let l=arr.length;
for (let i=1; i<l; i++){
const currentV=arr[i];
let p=i;
while(p>0 && arr[p-1]>currentV){
    arr[p]=arr[p-1];
    p--;
}arr[p]=currentV;
}console.log(arr)

// name //
const arr=["kriss", "ann", "john", "lisa", "mark", "daniel", "tomas"];
for (let i=0; i<arr.length; i++){
const currentV=arr[i];
let p=i;
while(p>0 && arr[p-1]>currentV){
    arr[p]=arr[p-1];
    p--;
}arr[p]=currentV;
}console.log(arr)
