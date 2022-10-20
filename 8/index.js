const arr = [5, 9, 13, 43, 2, 7];
arr.sort((a, b) => {
    return a - b
})

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}