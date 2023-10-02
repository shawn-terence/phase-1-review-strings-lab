// Write your code in this file!
const currentUser = 'Grace Hopper';

let welcomeMessage = "Welcome to Flatbook, " + `${currentUser}!`;
console.log(welcomeMessage);

let excitedWelcomeMessage = welcomeMessage.toLocaleUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
console.log(shortGreeting)