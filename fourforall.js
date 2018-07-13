var noRepeats = [];
//array for holding a list of games so you don't play the same game repeatedly
var mp4Nums = [];
//array for holding a list of Mario Party 4 games so you don't get a repeat.
var PartyFour;
var countPartyFour;

function FourForAll (){
  $("#FFA").html();
  //should blank out current game selection
  if(noRepeats.length == 8){noRepeats = [];}
  if(mp4Nums.length == 5){mp4Nums = [];}
  //if the no repeats arrays reach a certain length, empty them!

  var count = Math.floor(Math.random() * four.length);
  //generate random number for poking around in the game choice array
  console.log(count);

if(noRepeats.indexOf(count) === -1){
//if the game is not in the no repeats array, then

  if(count == 0){
  //if the game chosen is Mario Party 4 (place 0 in game array), then
    countPartyFour = Math.floor(Math.random() * fourPartyFour.length);
    //generate a random number between 0 and the length of the mario party 4 4-for-all games
    console.log(countPartyFour)
    if(mp4Nums.indexOf(countPartyFour) !== -1){
    //if MP4 no repeat array sees that the minigame chosen isn't in the array
      mp4Nums.push(countPartyFour);
      //push the minigame into the no repeat array
      console.log(mp4Nums);
      $("#FFA").html(four[count] + fourPartyFour[countPartyFour]);
      //Display Mario Party 4 plus the minigame chosen
    }
    noRepeats.push(count);
    //Push Mario Party 4 into the no game repeat array
  }
}else{
  noRepeats.push(count);
  //Push whatever other game is chosen into the no game repeat array
  $("#FFA").html(four[count]);
  //Display the chosen non-Mario Party game on the site
}


console.log(four[count]);
console.log(fourPartyFour[countPartyFour]);
console.log(PartyFour);
console.log(noRepeats.length);



}

var fourPartyFour = [
  "Mario Speedwagons",
  "Slime Time",
  "Mario Medley",
  "Domination",
  "Avalanche",
  "Photo Finish",
  "Booksquirm",
  "Three Throw",
  "Take a Breather",
  "Stamp Out",
  "Mr. Blizzard's Brigade",
  "Trace Race",
  "Chain Chomp Fever",
  "Paths of Peril",
  "Bowser's Bigger Blast",
  "Butterfly Blitz",
  "Rumble Fishing",
  "Bob-omb Breakers",
  "Darts of Doom",
  "Fruits of Doom",
  "Balloon of Doom",
];

//Note: Make a separate array for all the Mario Party Minigames and have each Mario Party game as its own entity
//Need Bowser Amiibo for Bowser things, Toad Amiibo for stars, Koopa Amiibo for in-game shop (Shop random items in game)
//Look up how to make a randomly generated game board?

//List in wallet + Zoids Battle Frontier (if FFA + 2v2), F-Zero, Star Fox Assault, Bomberman, 1080 Snowboarding, Army Men, Burnout, Extreme G, Kirby Air Ride, FIFA Street, GrooveRider: Slot Car Thunder, Baseball game HR Contest, GoldenEye, Mario Baseball, Medabots, Mat Hoffman's Pro BMX 2, Tony Hawk?, NBA Street (1, 2, 3), NFL Street (1, 2) Need for Speed Carbon/Underground/2, Most Wanted, Robotech: Battlecry, SSX games, Def Jam, Wave Race,

var four = ["Mario Party 4: " + fourPartyFour[countPartyFour],
"Super Smash Bros. Melee Free For All, Items On",
"Super Smash Bros. Melee Free For All, No Items",
"Day of Reckoning 2, Free For All, No Custom Wrestlers",
"Mario Golf, Free For All, Two Holes",
"Mario Kart, Double Dash, Free for All",
"F-Zero",
"Star Fox Assault",
"Bomberman Generation",
"1080 Snowboarding: Avalanche"/*, //pending FFA 2v2 check
"Army Men: Sarge's Heroes", //Pending 4 player check
"Burnout 2", //pending 4 player check
"Extreme G 3", //P4PC
"Kirby Air Ride",
"FIFA Street 2", //P4PC
"Digimon Rumble Arena 2", //P4PC
"ESPN International Winter Sports 2002", //P4PC - Maybe like a list of single events
"Gotcha Force", //P4PC - not sure if this one'll work or Not
"Def Jam Vendetta", //P4PC
"Def Jam: Fight for NY", //P4PC
"GrooveRider: Slot Car Thunder", //P4PC
"Tony Hawk's Pro Skater 4", //P4PC
"Super Monkey Ball 2", //Has Challenge mode and party games for list
"SSX 3", //P4PC
"Monster Jam: Maximum Destruction", //P4PC
"Mario Superstar Baseball" //HR Contest game?
"Mario Party 5: " + fourPartyFive[countPartyFive],
"Mario Party 6: " + fourPartySix[countPartySix],
"Mario Party 7: " + fourPartySeven[countPartySeven],
*/
]
