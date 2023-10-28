const imgDisplay = document.querySelector(`img`);
const beginBtn = document.querySelector(`#begin`);
const uiBlocker = document.querySelector(`#ui-blocker`);
const ui = document.querySelector(`#ui`);
const menuBtn = document.querySelector(`#menu`);
const choiceBtns = document.querySelectorAll(`.option`);
const dialogueElement = document.querySelector(`#dialogue`);
const click = new Audio(`Sounds/launch.wav`);
const song = new Audio(`Sounds/launchSong.mp3`);

console.log(choiceBtns);
beginBtn.addEventListener(`click`, () => {
  uiBlocker.style.display = `none`;
  beginBtn.style.display = `none`;
  menuBtn.style.display = `inline-block`;
  for (btn of choiceBtns) {
    btn.style.display = `inline-block`;
  }
  startGame();
});

const startGame = () => {
  click.play();
  song.play();
  showSlide(`img1.jpg`);
  showDialogue(1);
};

const showSlide = (slide) => {
  const createSlide = document.createElement(`img`);
  createSlide.src = `images/${slide}`;
  ui.removeChild(ui.firstChild);
  ui.appendChild(createSlide);
};

const showDialogue = (storyNodeIndex) => {
  const storyNode = story.find(
    (nodeDialogue) => nodeDialogue.id === storyNodeIndex
  );
  dialogueElement.innerText = storyNode.dialogue;
};

const story = [
  {
    id: 1,
    dialogue:
      "It is nightfall. After a long journey through the country of Purus, after fighting off fiends and enemies alike, you find yourself tired, hungry, and low on water. You see a dimly lit town in the distance and decide to seek shelter for the night.",
    options: [
      {
        text: "Introduction",
        imgSlide: "img1.jpg",
      },
      {
        text: "Enter the town",
        nextText: 2,
        imgSlide: "img2.jpg",
      },
      {
        text: "Introduction",
        imgSlide: "img1.jpg",
      },
    ],
  },
  {
    id: 2,
    dialogue:
      'As you enter the town, you see what looks like a tavern. You say to yourself "Thank the heavens" as you stumble up the steps.',
    options: [
      {
        text: "Introduction",
        imgSlide: "img2.jpg",
      },
      {
        text: "Walk into the tavern",
        nextText: 3,
        imgSlide: "img3.jpg",
      },
      {
        text: "Introduction",
        imgSlide: "img2.jpg",
      },
    ],
  },
  {
    id: 3,
    dialogue:
      "You walk through the door, as you walk up to the bar, you see a fair maiden serving tables and can feel the gaze of the patrons upon you.",
    options: [
      {
        text: "Introduction",
        imgSlide: "img3.jpg",
      },
      {
        text: "Sit at the bar",
        nextText: 4,
        imgSlide: "img4.jpg",
      },
      {
        text: "Introduction",
        imgSlide: "img3.jpg",
      },
    ],
  },
  {
    id: 4,
    dialogue:
      'The bartender walks toward you. "Greetings traveller, you look worse for wear, let me get you a drink, it\'s on the house. So tell me, where are you from stranger?"',
    options: [
      {
        text: "Introduction",
        imgSlide: "img4.jpg",
      },
      {
        text: "Choose Your Race",
        nextText: 5,
        imgSlide: "assassin.jpg",
      },
      {
        text: "Introduction",
        imgSlide: "img4.jpg",
      },
    ],
  },
  {
    id: 5,
    dialogue:
      "The Shadows Ember, an elite class of assassins known for their cunning and prowess. They train bird of prey, and use their stealth to bring their enemies down swiftly.",
    options: [
      {
        text: "Luna Fox",
        nextText: 7,
        imgSlide: "mage.jpg",
      },
      {
        text: "Select Shadows Ember",
        nextText: 8,
        imgSlide: "img4.jpg",
      },
      {
        text: "Dragon Knight",
        nextText: 6,
        imgSlide: "warrior.jpg",
      },
    ],
  },
  {
    id: 6,
    dialogue:
      "The Dragon Knights, An elite class of warriors known for their strength and fearlessness. They use their battle cries to instill fear in their enemies and turn the tides of battle.",
    options: [
      {
        text: "Shadows Ember",
        nextText: 5,
        imgSlide: "assassin.jpg",
      },
      {
        text: "Dragon Knights (Unavailable)",
        setState: {
          info: {
            class: "Warrior",
            health: 150,
            agility: 7,
            strength: 10,
            intelligence: 5,
            speed: 6,
            luck: 4,
            charisma: 8,
          },
          inventory: {
            note: "You have no items in your inventory",
          },
          abilities: {
            note: "You have not learned any abilities yet",
          },
        },
        nextText: 6,
        imgSlide: "warrior.jpg",
      },
      {
        text: "Luna Fox",
        nextText: 7,
        imgSlide: "mage.jpg",
      },
    ],
  },
  {
    id: 7,
    dialogue:
      "The Luna Fox, A mysterious class mages known for their intelligence and magical ability, They wield the power of the elements to bring a quick end to their enemies. There are few that would oppose them.",
    options: [
      {
        text: "Dragon Knight",
        nextText: 6,
        imgSlide: "warrior.jpg",
      },
      {
        text: "Luna Fox (Unavailable)",
        setState: {
          info: {
            class: "Mage",
            health: 100,
            agility: 5,
            strength: 5,
            intelligence: 10,
            speed: 6,
            luck: 7,
            charisma: 7,
          },
          inventory: {
            note: "You have no items in your inventory",
          },
          abilities: {
            note: "You have not learned any abilities yet",
          },
        },
        nextText: 7,
        imgSlide: "mage.jpg",
      },
      {
        text: "Shadows Ember",
        nextText: 5,
        imgSlide: "assassin.jpg",
      },
    ],
  },
  {
    id: 8,
    dialogue:
      "Interesting, a member of the famous assassins guild? you must be quite skilled. My name is Daria, what is yours?",
    options: [
      {
        text: "Introduction",
        imgSlide: "img4.jpg",
      },
      {
        text: "Enter Name (Unavailable)",
        nextText: 8,
        imgSlide: "img4.jpg",
      },
      {
        text: "Introduction",
        imgSlide: "img4.jpg",
      },
    ],
  },
  {
    id: 9,
    dialogue: "Welcome Warrior, This is a hero's Tale",
    options: [
      {
        text: "disabled",
        // nextText: 6
      },
      {
        text: "disabled",
        // nextText: 7
      },
      {
        text: "disabled",
        // nextText: 5
      },
    ],
  },
];
