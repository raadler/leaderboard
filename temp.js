function team(name, wins, losses) {
  name = name;
  rank = rank;
  wins = wins;
  losses = losses;
  output = console.log("name: " + name + "wins: " + wins + "losses: " + losses);
}

function addTeamNames(gameInfo) {
  var teamNamesArray = [];
  for(var i = 0; i < gameInfo.length; i++){
    var home = home_team[i];
    var away = away_team[i];
    teamNamesArray.push(home);
    teamNamesArray.push(away);
  }
  for(var i = 0; i < teamNamesArray.length; i++){
    for(var x = 0; x < i; x++){
      if (teamNamesArray[i] === teamNamesArray[x]){
        teamNamesArray.splice(i, 1);
      }
    }
  }
}


teamNamesArray = ["Patriots","Broncos","Broncos","Colts","Patriots","Colts","Steelers","Patriots"]
for(var i = 0; i < teamNamesArray.length; i++){
  for(var x = 0; x < i; x++){
    if(teamNamesArray[i] === teamNamesArray[x]){
      teamNamesArray.splice(i, 1);
    }
  }
}


function Team(name) {
  this.name = name;
}


var teamNamesArray = ["Patriots", "Broncos", "Colts", "Steelers"];
var teams = [];
for(var i = 0; i < teamNamesArray.length; i++){
  var name = teamNamesArray[i];
  var teamObject = new Team(name);
  teams.push(teamObject);
}


var addTeamNames;
var gameInfo = function(){
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ]
}

var data = gameInfo();

function Team(name) {
  this.name = name;
  this.wins = wins;
  this.losses = losses;
}

function addTeamNames(data) {
  var teamNamesArray = [];
  var teams = []
  for(var i = 0; i < data.length; i++){
    var home = data[i].home_team;
    var away = data[i].away_team;
    teamNamesArray.push(home);
    teamNamesArray.push(away);
  }
  for(var i = 0; i < teamNamesArray.length; i++){
    if (i > 0) {for(var x = 0; x < i; x++){
      if(teamNamesArray[i] === teamNamesArray[x]){
        teamNamesArray.splice(i, 1);
      }
    }}
  }
  for(var i = 0; i < teamNamesArray.length; i++){
    var name = teamNamesArray[i];
    var teamObject = new Team(name);
    teams.push(teamObject);
  }
}

function Team(name) {
  this.name = name;
}

function findTeam(name){
  var teams = [];
  var teamNamesArray = ["Patriots","Broncos","Colts","Steelers", "Foxes"];
  for(var i = 0; i < teamNamesArray.length; i++){
    var name = teamNamesArray[i];
    var teamObject = new Team(name);
    teams.push(teamObject);
  }

  for(i = 0; i < teams.length; i++){
    if(teams[i].name === name)
    {return teams[i];};
  }
}
findTeam("Broncos");
findTeam("Cats");

function addWinsAndLosses(data){
  for(var i = 0; i < data.length; i++){
    if(data[i].home_score > data[i].away_score){
      var homeTeam = findTeam(data[i].home_team);
      homeTeam.wins += 1;
      var awayTeam = findTeam(data[i].away_team);
      awayTeam.losses += 1;
    } else {
      var homeTeam = findTeam(data[i].home_team);
      homeTeam.losses += 1;
      var awayTeam = findTeam(data[i].away_team);
      awayTeam.wins += 1;
    }
  }
}


addWinsAndLosses(data);
