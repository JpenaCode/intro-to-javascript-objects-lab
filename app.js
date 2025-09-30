const pokemon = require('./data.js')


const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}





// Exercise 1

// console.dir(pokemon, { maxArrayLength: null })
// console.log(pokemon[58])



// Exercise 2
// console.log(game)




// /*
// Exercise 3
// 1. Add a new property to the `game` object. Let's call it "difficulty".
// 2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


// Solve Exercise 3 here:



game.playerDifficulty = `Hard`

// console.log(game)



/*
// Notes:
// game. - Chooses the entire game where we're working in

// playerDifficulty - is the new property 

// = `Hard` - is the variable of that new property






// /*
// Exercise 4
// 1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
// 2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


// Solve Exercise 4 here:
// */

// game.party.push(pokemon[3])
// console.log(game)





// Notes:
// game. - Picks the actual game which holds the array we need to update

// party - Picks the array we're working with

// .push() - Places what we're choosing at the end of the array

// pokemon[3] - uses the index number to choose charmander as our stater




/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/




// Option 1:
// I came up with this option like exercise 4

// game.party.push(pokemon[3], pokemon[146], pokemon[91], pokemon[59])




//Option 2: 
// After reasearch I think this more fits inline with what we're trying to learn.


const chosenIndexes = [3, 148, 93, 61];

for (let i = 0; i < chosenIndexes.length; i++) {
  game.party.push(pokemon[chosenIndexes[i]])
}



/*
// const chosenIndexes = [3, 146, 91, 59]; - is the pokemon party array I want

// for - is the loop

// let i = 0 - tells the loop to start on the first index of the array

// i < chosenIndexes.length - tells the loop to only run the length of the array

// i++ - tells the loop that once it runs the loop once, start on the next index of the array

// game.party.push(pokemon[chosenIndexes[i]] - like exercise 4 puts the chosen pokemon in the party in the terminal
/*





/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

const gyms = game.gyms
for (let i = 0; i < gyms.length; i++) {
    if (gyms[i].difficulty < 3)
    gyms[i].completed = true
}


// Notes:

// const gyms = game.gyms -makes a new variable using the gyms array
// for (let i = 0; i < gyms.length; i++) - same notes as exercise 5
// if - condition 
// gyms[i] - gyms array
// .difficulty - tells the loop that this the what were looking at for the condition
// < 3 - the actual condition, less than 3
// gyms[i].completed - tells the loop start at the first gym and if it's less than 3 and completed then mark as true





/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. 
When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/


game.party.splice( 0, 1, pokemon[4])

// Notes:
// game - pulls from the whole game
// .party - digs in to find party
// .splice - is what we're practicing and it give the command to replace
// 0 - is what index to start with to make the change in the array
// 1 - how many index are we changing
// pokemon[4] - calls on the 4th pokemon in the data.js




/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

for (let i = 0; i < game.party.length; i++) {
      console.log(game.party[i].name)
}

// Notes:

// for - loop im able to go throught all my parties names
// console.log - prints what i want printed 
// game.party[i] - calls on the party indexes
// .name - prints all the names and only the names





/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

// for (let i = 0; i < pokemon.length; i++) {
//     if (pokemon[i].starter)  
//     console.log(pokemon[i].name)
// }


// Notes:
// for (let i = 0; i < pokemon.length; i++) - same as before but were calling on the pokemon FileList, not the game
// if (pokemon[i].starter) - were giving the condition to look for the starter pokemon
// console.log(pokemon[i].name) - prints the starter pokemon names




/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/



game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemonObj)
}

game.catchPokemon(pokemon[75])
console.log(game.party)


// Notes: 
// For this exercise I really had to look everything up. I don't know if we learned methods but I had to look up the template.

// The template I found:

// objectName.methodName = function(parameters) {

// }

// game - object
// .catchPokemon - the actual method
// = function () - all methods are followed by functions
// pokemonObj - is the parameter and the label the exercise asks for
// game.catchPokemon(pokemon[75]) - using the new parameter i can call which pokemon i want to catch





/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/


game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemonObj);
  for (let i = 0; i < game.items.length; i++) {
    if (game.items[i].name === "pokeball") {
      game.items[i].quantity -= 1
    }
  }
}

game.catchPokemon(pokemon[26])
console.log(game.party)
console.log(game.items)


// Notes:
// game.catchPokemon = function(pokemonObj) - this is the method in Exercise 10
// game.party.push(pokemonObj) - this adds the pokemon to my party
// for (let i = 0; i < game.items.length; i++) - this is the loop that goes through the item array
// if (game.items[i].name === "pokeball") - this tells the loop to check the pokeballs
// game.items[i].quantity -= 1 - this subtracts 1 from my pokeball count
// game.catchPokemon(pokemon[26]) - this cathces Raichu




/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/


for (let i = 0; i < gyms.length; i++) {
  if (gyms[i].difficulty < 6) {
    gyms[i].completed = true
  }
}


console.log(game.gyms)


// Notes:
// for (let i = 0; i < gyms.length; i++) - this is the look that runs through the gyms array
// if - tells the loop theres going to be a condition
// gym[i] - is the indexes in the gym array
// .difficulty - tells the loop to look at the difficulty
// < 6 - we need to make only 6 gyms completed so anything bigger than that will be false
// gyms[i].completed = true - this is the actual condition, gyms 1-6 are completed


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects 
have a value of `false` on their `completed` property, the logged value would be: 
`{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/



game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0 }

  for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].completed) {
      gymTally.completed++
    } else {
      gymTally.incomplete++
    }
  }

  console.log(gymTally)
}

game.gymStatus()

// Notes:
// game.gymStatus = function() - this is the new method
// const gymTally = { completed: 0, incomplete: 0 } - this is the gym tally counter and both the completed and incompleted tally start at o
// for (let i = 0; i < game.gyms.length; i++) - this is the loop that runs through the gyms array
// if (game.gyms[i].completed) - this says that if a gym is marked completed...
// gymTally.completed - ... then mark it as 1 point in the completed tally 
// ++ - once that one gym is mark moved on to the next
// else {gymTally.incomplete++ - and if it's marked incompleted add 1 tally to the incomplete tally
// game.gymStatus(); - this prints the tally in the terminal


/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/


game.partyCount = function() {
  return game.party.length
}

console.log("party count:", game.partyCount())


// Notes:
// game.partyCount = function() - this is the new method
//   return game.party.length - this tells the loop to print the number of pokemon in my party
// console.log("party count:", game.partyCount()) - logs the count in the terminal




/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/



for (let i = 0; i < gyms.length; i++) {
  if (gyms[i].difficulty < 8) {
    gyms[i].completed = true
  }
}


// Notes:
// this is the same as exercise 12 but now all the gyms are completed


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game)
