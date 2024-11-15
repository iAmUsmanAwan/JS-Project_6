// Array of motivational quotes
const quotes = [
    "I love it when women go to school. It’s like seeing a monkey on rollerskates. It means nothing to them, but it’s so adorable for us.",

    "Oh it’s a girl. I’m so sorry. Where’s the trashcan?",

    "Why are you guys so anti-dictators?",

    "Do you want the Aladeen news or the Aladeen news?",

    "Who the fuck are you? Osama Bin Laden's best friend?",

    "You seem educated.",

    "$20 a day for the internet? What the fuck! And they accuse me of being an international criminal?",

    "Well, she let me aladeen in her face.",

    "People of Wadiya! I come here before you to tell the world that they shall bow down before our mighty nation! We are two months away from enriching weapons grade uranium!",

    "Hey let's go, I don't want to miss the finale of the Real Housewives Of Jahalavakalinda!",

    "See? This is what happens when you set the safety switch to Aladeen instead of to Aladeen!",

    "Hey average American shopper! If you give me your clothes I will make a sizable donation in your name to Al Qaeda!",

    "Actually in Wadiya it's a capital offense.",

    "Have you consulted Professor Bobeye about this?",

    "Please. That stuff never sticks.",

    "Is there any way you could lend me some money? Maybe... 20 million dollars?",

    "Don't worry, nobody gonna suspect anything. It's a great plan, pointy.",

    "Don't worry, I am Wadiya's number one actor. You don't win four Wadiyan Golden Globes for nothing.",

    "My performance in 'Aladeen Jones and the Temple of Doom' was outstanding.",

    "Have you seen 'You've Got Mail Bomb'?",

    "Are you sure you don't want to stay for some cuddles?",

    "What are \"civil rights\"?",

    "You are right, Nadal. I will become the greatest dictator of all, the envy of madmen everywhere!",

    "Why does nobody ever tell me anything?",

    "I'm okay! It's my job to get shot in the head!",

    "Indulge me. For one second, pretend that I'm an idiot.",

    "Democracy? Never, dictatorship forever!",

    "You're a fucking genius. You're the greatest dictator ever.",

    "You're not a fucking idiot. You're the greatest dictator ever!",

    "How do you even make that leap? Tamir to David.",

    "I'll give you that one, I do look ridiculous.",

    "You are such a schmuck!",

    "Sub Saharan, can you have 150 child warriors here by 5:00pm?",

    "You go to the bathroom after Osama, you will realize the true meaning of terrorism.",

    "Are you having a boy or an abortion?",

    "You're HIV-Aladeen.",

];

// Function to generate a random quote
function generateQuote() {
    //? Select a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];   // selects a random quote from the quotes array using the randomly generated index.
    
    //? Display the random quote
    document.getElementById("quote").textContent = randomQuote;

    //? Change background color
    const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;  
    //* generates a random color using the HSL (Hue, Saturation, Lightness) color model. It creates a string representation of an HSL color with:
    // A random hue value between 0 and 360
    // A fixed saturation of 70%
    // A fixed lightness of 80%
    
    document.body.style.backgroundColor = randomColor;  // sets the background color of the webpage's body to the randomly generated color.
}
