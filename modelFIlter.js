// Input 1 = JSON (array of objects), Input 2 = location (string, case insensitive)
// Output = Names of Models (string)
// Case insensitive = convert location string of both inputs to LowerCase
// Use array.map() method to filter through JSON array and return the models with matching location to a new array of data

const modelFilter = (talentArr, location) => {
  console.log(talentArr)
  console.log(location)

}

//Test inputs
const talentArr = [
  {
    "name": "Homer Simpson",
    "location": "Springfield",
    "date_of_birth": "1956-05-12"
  },
  {
    "name": "Frank Reynolds",
    "location": "Philidelphia",
    "date_of_birth": "1944-11-17"
  },
  {
    "name": "Diane Nguyen",
    "location": "Los Angeles",
    "date_of_birth": "1980-03-19"
  },
  {
    "name": "Krusty the Clown",
    "location": "SpringField",
		"date_of_birth": "1957-10-29"
  }
]

const location = 'SpringField'

modelFilter(talentArr, location)
