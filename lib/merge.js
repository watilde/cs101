function mergeSort (list) {
  if (list.length === 1) return list

  const middle = Math.floor(list.length / 2)
  const left = list.slice(0, middle)
  const right = list.slice(middle)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge (left, right) {
  let result = []
  while (left.length !== 1 && right.length !== 1) {
    if (left[0] < right[0]) {
      result.push(left.splice(0, 1)[0])
    } else {
      result.push(right.splice(0, 1)[0])
    }
  }

  return result.concat(left, right)
}

module.exports = mergeSort
