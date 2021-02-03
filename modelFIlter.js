// Input 1 = JSON (array of objects), Input 2 = location (string, case insensitive)
// Output = Names of Models (string)
// Case insensitive = convert location string of both inputs to LowerCase
// Use array.map() method to filter through JSON array and return the models with matching location to a new array of data

const modelFilter = (talentArr, location) => {

  // Make inputs lower case to make function case insensitive
  const lowerCaseLocation = location.toLowerCase()

  // Use array.map() method to alter each location value in the JSON input array
  const lowerCaseTalentArr = talentArr.map(model => {
    model.location = model.location.toLowerCase()
    return model
  })

  console.log('New location input is:', lowerCaseLocation)
  console.log('New talent array input is:', lowerCaseTalentArr)

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
