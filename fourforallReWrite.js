//NOTE - 7/13/18 verified this works as it is. From this point onward, there should only be adding that needs to be done. The base functionality of this and every other 2v2, 3v1, etc. should only require name modifications and adding. Going to save a 7/13/18 iteration of this in Github.

var noRepeats = [];
//array for holding a list of games so you don't play the same game repeatedly
var mp4Nums = [];
var mp5Nums = [];
var mp6Nums = [];
//array for holding a list of Mario Party minigames so you don't get a repeat.

var countPartyFour;
var Butt = 'ASS';



function FourForAll() {

if(noRepeats.length == 8){noRepeats = [];};
if(mp4Nums.length == 7){mp4Nums = [];};
if(mp5Nums.length == 7){mp5Nums = [];};
if(mp6Nums.length == 7){mp6Nums = [];};
//If the no repeats array reaches a certain length, empty it!
//default value for now in noRepeats is 8. Any other value is used for testing. mp4Nums number is up for changing.

var count = Math.floor(Math.random() * four.length);
//generate a random number for selecting a game in array
console.log(count);

if(noRepeats.indexOf(count) === -1){
//if the game is not in the no repeats array, then

  if (count == 0){
    //if the result is Mario Party 4, 0 in the array


    mp4Repeats(count);
    //check the MP4 repeat function for repeating minigames, passing in the count variable....I think
    console.log(countPartyFour);
    console.log(fourPartyFour[countPartyFour]);
    $("#FFA").html(four[count] + fourPartyFour[countPartyFour])
    //print MP4 plus the minigame
    noRepeats.push(count);
    return;
    //abort mission because otherwise it'll blow up
  }




$("#FFA").html(four[count]);
//print the chosen game onto the site
noRepeats.push(count);
//push the chosen game into the no repeat array
console.log(noRepeats.length);

}else{

  FourForAll();
  //run function again to retry a random number to push...I think. I'm not even sure this is necessary but it's not blowing up so
}

}

function mp4Repeats(count){
  //repeatable function to check against MP4 games array
  countPartyFour = Math.floor(Math.random() * fourPartyFour.length);
  if (mp4Nums.indexOf(countPartyFour) === -1){
    //if MP4 minigame is not in no repeats array


    mp4Nums.push(countPartyFour);
    console.log(mp4Nums.length);
    //push the MP4 minigame into the array
    $("#FFA").html(four[count] + fourPartyFour[countPartyFour])
    //Print Mario Party 4 and the game
  }else{
    mp4Repeats();
    //run the function again to try another random minigame number

  }
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
  "Balloon of Doom"
];

var four = ["Mario Party 4: ",
"Super Smash Bros. Melee Free For All, Items On",
"Super Smash Bros. Melee Free For All, No Items",
"Day of Reckoning 2, Free For All, No Custom Wrestlers",
"Mario Golf, Free For All, Two Holes",
"Mario Kart, Double Dash, Free for All",
"F-Zero",
"Star Fox Assault",
"Bomberman Generation",
"1080 Snowboarding: Avalanche", //pending FFA 2v2 check
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
"Mario Superstar Baseball"/* //HR Contest game?
"Mario Party 5: " + fourPartyFive[countPartyFive],
"Mario Party 6: " + fourPartySix[countPartySix],
"Mario Party 7: " + fourPartySeven[countPartySeven],
*/
];
