const modelFilter = (talentArr, location) => {

  // Make inputs lower case to make function case insensitive
  const lowerCaseLocation = location.toLowerCase()

  // Use array.map() method to alter each location value in the JSON input array
  const lowerCaseTalentArr = talentArr.map(model => {
    model.location = model.location.toLowerCase()
    return model
  })

  // Use array.filter() method to filter and return an array of objects with models that match the search location
  const filteredModels = lowerCaseTalentArr.filter(model => {
    return model.location === lowerCaseLocation
  })

  // Return the names of the models that match the search location
  for (let i = 0; i < filteredModels.length; i++) {
    return filteredModels[i].name
  }

}

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
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
      }
    ]

    //Typical location searches
    const location1 = 'SpringField'
    const location2 = 'PHILIDELPHIA'
    const location3 = 'los angeles'

    const output1 = 'Homer Simpson'
    const output2 = 'Frank Reynolds'
    const output3 = 'Diane Nguyen'

    expect(modelFilter(talentArr, location1)).toEqual(output1)
    expect(modelFilter(talentArr, location2)).toEqual(output2)
    expect(modelFilter(talentArr, location3)).toEqual(output3)
  })
})
