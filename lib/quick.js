function quickSort (list, left = 0, right = list.length - 1) {
  let wall = 0

  if (list.length > 1) {
    wall = partition(list, left, right)

    if (wall - 1 > left) {
      quickSort(list, left, wall - 1)
    }

    if (right > wall) {
      quickSort(list, wall, right)
    }
  }

  return list
}

function partition (list, left, right) {
  const pivot = list[Math.floor((left + right) / 2)]

  while (true) {
    while (pivot > list[left]) {
      left++
    }

    while (list[right] > pivot) {
      right--
    }

    if (right >= left) {
      swap(list, left, right)
      left++
      right--
      break
    }
  }

  return left
}

function swap (list, left, right) {
  const tmp = list[left]
  list[left] = list[right]
  list[right] = tmp
  return list
}

module.exports = quickSort
