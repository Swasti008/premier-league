//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var managerDetails = [managerName, managerAge, currentTeam, trophiesWon];
  return managerDetails;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation.length == 0){
    return null;
  }
  var formationObject = {
    defender : formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return formationObject;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var Debute = players.filter((player) => player.debut == year)
  // console.log(debutePlayer)
  return Debute;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var Position = players.filter((player) => player.position == position)
  // console.log(debutePlayer)
  return Position;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let Award = players.filter((player) => {
    let Won = false;
    for (let i = 0; i < player.awards.length; i++) {
      if(player.awards[i].name == awardName){Won = true;} 
    }
    return Won;
  });
  return Award;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  let Times= players.filter((player) => {
    let count=0;
    for (let i=0; i < player.awards.length; i++){
      if (player.awards[i].name == awardName){count++;}
    }
    return (count==noOfTimes)
  })
  return Times;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  let AwardName = filterByAward(awardName);
  let Country = AwardName.filter((player) => {
    player.country == country
  })
  return Country;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByAwardsTeamAndAge(minAwards, team, maxAge){
  let filteredPlayers = players.filter(player => {
    return player.awards.length >= minAwards && player.team === team && player.age < maxAge;
  });
  return filteredPlayers;
}

//Progression 9 - Sort players in descending order of their age
players.sort((a, b) => b.age - a.age);

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function sortPlayersByAwards(teamName) {
  let teamPlayers = players.filter(player => player.team === teamName);
  teamPlayers.sort((a, b) => b.awards.length - a.awards.length);
  return teamPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortPlayersByAwardTimesAndCountry(awardName, times, country) {
  let filteredPlayers = filterByAwardxTimes(awardName, times);
  let countryPlayers = filteredPlayers.filter(player => player.country === country);
  countryPlayers.sort((a, b) => a.name.localeCompare(b.name)); 
  return countryPlayers;
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortPlayersByAgeAndAwards(age) {
  let olderPlayers = players.filter(player => player.age > age);
  olderPlayers.sort((a, b) => a.name.localeCompare(b.name)); 
  olderPlayers.forEach(player => {
    player.awards.sort((x, y) => y.year - x.year); 
  });
  return olderPlayers;
}
