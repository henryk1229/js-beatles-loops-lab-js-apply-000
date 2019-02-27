var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) { var array = []; for (let i = 0, l = musicians.length; i < l; i++) { array.push(`${musicians[i]} plays ${instruments[i]}`) } return array } 
function johnLennonFacts(array) { var shoutFacts = []; let i = 0; while (i < array.length) { shoutFacts.push(`${array[i]}!!!`); i++ } return shoutFacts } 
function iLoveTheBeatles(num) { var array = []; let i = 0; do { array.push("I love the Beatles!"); num++ } while (num < 15); return array } 