console.log('Hello World')

// Aly's Pokemon Game
let myPokemon = {
    name: 'Pikachu',
    level: 3,
    health: 100,
    attack: 50,
    tackle: function() {
        console.log('The pokemon tackle the target pokemon');
        console.log("targetPokemon");
    }
};

function Pokemon(name, level, health, attack, heal) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.attack = attack;
    this.heal = heal;
}

Pokemon.prototype.attackCompetitor = function(opponent) {
    console.log(`${this.name} tackles ${opponent.name}!`);
    opponent.health -= this.attack; 
    console.log(`${opponent.name}'s health is now reduced to ${opponent.health}`);
};

let pikachu = new Pokemon('Pikachu', 3, 100, 70);
let gengar = new Pokemon('Gengar', 5, 100, 60);
let bulbasaur = new Pokemon('Bulbasaur', 3, 100, 40);
let squirtle = new Pokemon('Squirtle', 2, 100, 30);
let snorlax = new Pokemon('Snorlax', 4, 100, 80);

let trainer_one = {
    name: 'Ash',
    age: 19,
    pokemonList: [],

    addPokemon: function(pokemon) {
        this.pokemonList.push(pokemon);
        console.log(`${pokemon.name} was added to ${this.name}'s team.`);
    }
};

console.log("New trainer added: Ash");
console.log(`Trainer Name (Dot Notation): ${trainer_one.name}`);
console.log(`Trainer Age (Bracket Notation): ${trainer_one['age']}`);

trainer_one.addPokemon(pikachu);
trainer_one.addPokemon(bulbasaur);
trainer_one.addPokemon(snorlax);

let trainer_two = {
    name: 'Aly',
    age: 19,
    pokemonList: [],

    addPokemon: function(pokemon) {
        this.pokemonList.push(pokemon);
        console.log(`${pokemon.name} was added to ${this.name}'s team.`);
    }
};

console.log("New trainer added: Aly");
console.log(`Trainer 2 Name (Dot Notation): ${trainer_two.name}`);
console.log(`Trainer 2 Age (Bracket Notation): ${trainer_two['age']}`);

trainer_two.addPokemon(gengar);
trainer_two.addPokemon(squirtle);

Pokemon.prototype.healPokemon = function(target) {
    console.log(`${this.name} heals ${target.name}!`);
    // Increase the target's health, ensuring it doesn't exceed the maximum health
    target.health += this.heal;
    if (target.health > 100) {
        target.health = 100;
    }
    console.log(`${target.name}'s health is now restored! `);
};

pikachu.attackCompetitor(gengar);
snorlax.healPokemon(pikachu);

gengar.attackCompetitor(bulbasaur);
squirtle.healPokemon(gengar);

bulbasaur.attackCompetitor(squirtle);
snorlax.healPokemon(bulbasaur);

squirtle.attackCompetitor(snorlax);
bulbasaur.healPokemon(squirtle);

snorlax.attackCompetitor(pikachu);
gengar.healPokemon(snorlax);

function isTrainerTwoDefeated(trainer) {
    for (let i = 0; i < trainer.pokemonList.length; i++) {
        if (trainer.pokemonList[i].health > 0) {
            return false;
        }
    }
    return true;
}

if (isTrainerTwoDefeated(trainer_two)) {
    console.log("Trainer Ash's team wins!");
} else {
    console.log("Trainer Aly's team is still in the game!");
}
