"use strict";

function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`
}

function getGreeting(timeOfDay) {

  let greeting = timeOfDay === 'morning' ? 'Good morning'
                : timeOfDay === 'afternoon' ? 'Good afternoon'
                : timeOfDay === 'evening' ? 'Good evening'
                : 'What time is it?';
                
  return `${greeting}`
}

function createGreeting(firstName, lastName, timeOfDay) {

  let name = formatName(firstName, lastName);
  let greeting = getGreeting(timeOfDay);

  return `${greeting}, ${name}`
}

console.log( createGreeting('Ava', 'Stone', 'morning') );
console.log( createGreeting('Noah', 'Kim', 'evening') );
console.log( createGreeting('Mina', 'Patel', 'afternoon') );
