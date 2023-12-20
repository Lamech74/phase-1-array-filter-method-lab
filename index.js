// Code your solution here
// findMatching function
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // fuzzyMatch function
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // matchName function
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }

  const drivers = [
    { name: 'John', hometown: 'New York' },
    { name: 'Jane', hometown: 'Los Angeles' },
    { name: 'Doe', hometown: 'Chicago' },
  ];
  
  console.log(findMatching(['John', 'Jane', 'Doe'], 'jane')); // Output: ['Jane']
  console.log(fuzzyMatch(['John', 'Jane', 'Doe'], 'jo')); // Output: ['John', 'Doe']
  console.log(matchName(drivers, 'Jane')); // Output: [{ name: 'Jane', hometown: 'Los Angeles' }]
  