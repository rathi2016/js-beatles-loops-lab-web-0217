function theBeatlesPlay(musicians,instruments){
  const array = []
    for (let i = 0,l = musicians.length;i < l; i++){
      array.push(`${musicians[i]} plays ${instruments[i]}`)

    }
    return array

}
function johnLennonFacts(array){
  const arr = []
  let n = 0
  while(n < array.length){
  arr.push(`${array[n]}!!!`)
  n += 1
  }
 return arr
}

 function iLoveTheBeatles(n){
 const arr = []
 do {
   
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
 }
