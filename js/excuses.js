const intro = [
  "Sorry I can't come, ",
  "Please forgive my absence, ",
  "This is going to sound crazy, but ",
  "Get this, ",
  "I can't go because ",
  "I know you're going to hate me, but ",
  "I was minding my own business and boom, ",
  "I feel terrible, but ",
  "I regretfully cannot attend, ",
  "This is going to sound like an excuse, but ",
];

const scapegoat = [
  "my nephew ",
  "the ghost of Stalin ",
  "the Pope ",
  "my ex ",
  "a high school marching band ",
  "a sad clown ",
  "the kid from The Sixth Sense ",
  "my Tinder date ",
  "aliens that look like Vladimir Putin ",
];

let initialScapegoatArrayLength = scapegoat.length;

const delay = [
  "just pooped in my bed!",
  "died in front of me!",
  "won't stop telling me knock knock jokes!",
  "is having a nervous breakdown in front of me right now!",
  "gave me syphilis!",
  "poured lemonade in my gas tank!",
  "just stabbed me!",
  "found my box of human teeth!",
  "stole my bicycle!",
  "posted my nudes on Instagram!",
];

/**
 * Add specific country data to "scapegoat" array  depending on user's
 * location. If no country information is found, generic international
 * data is inserted instead. This function will only run once when the
 * page is opened.
 */
const updateScapegoatArray = async () => {
  try {
    const response = await fetch("https://extreme-ip-lookup.com/json/");

    const data = await response.json();

    const excuse = await scapegoatFix(data);

    function scapegoatFix(data) {
      if (data.country === "United States") {
        scapegoat.push("Dan Rather ", "New England Patriots ");
      } else if (data.country === "Canada") {
        scapegoat.push("Peter Mansbridge ", "Toronto Maple Leafs ");
      } else {
        scapegoat.push("Christiane Amanpour", "Manchester United");
      }
    }
  } catch (error) {
    console.error("There was an error retrieving user location. Country-specific variables will not be included.");
  }
};

/**
 * Excuse making function. Will run the updateScapegoatArray()
 * function if the "scapegoat" array hasn't been updated yet.
 * Then it will create and add a randomized excuse into the DOM.
 */

const makeAnExcuse = async () => {
  if (initialScapegoatArrayLength === scapegoat.length) {
    await updateScapegoatArray();
  }
  document.getElementById("excuse").innerText =
    intro[random(intro.length)] + scapegoat[random(scapegoat.length)] + delay[random(delay.length)];
};

const random = num => {
  return Math.floor(Math.random() * num);
};

// COPY TEXT BUTTON FUNCTION
document.getElementById("make-copy").addEventListener("click", () => {
  const copyText = document.getElementById("excuse").innerText;
  navigator.clipboard.writeText(copyText);
  document.getElementById("copied").style.display = "block";
});

// GENERATE NEW EXCUSE WITH BUTTON CLICK
document.getElementById("new-excuse").addEventListener("click", () => {
  makeAnExcuse();
});

// RUN PROGRAM ON LOAD
makeAnExcuse();
