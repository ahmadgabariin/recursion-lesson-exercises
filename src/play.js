const arr1 = [1, 2, 3,77,6]
const arr2 = []

const swap = function(arr1 ,arr2) {
    if (arr1.length === 0) { 
        return 
    }
    let savedCell = arr1[arr1.length - 1]
    arr1.pop()
    swap(arr1,arr2)
    arr2.push(savedCell)
}

swap(arr1 , arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3] 