var quoteArray = [
  `“Be yourself; everyone else is already taken.”`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
  `“So many books, so little time.”`,
  `“A room without books is like a body without a soul.”`,
  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
  `“You've gotta dance like there's nobody watching,
  Love like you'll never be hurt,
  Sing like there's nobody listening,
  And live like it's heaven on earth.”`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
  `“You only live once, but if you do it right, once is enough.”`,
  `“Be the change that you wish to see in the world.”`,
  `“In three words I can sum up everything I've learned about life: it goes on.”`,
  `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
  `“Don’t walk in front of me… I may not follow
  Don’t walk behind me… I may not lead
  Walk beside me… just be my friend”`,
  `“If you tell the truth, you don't have to remember anything.”`,
  `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
  `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
  `“A friend is someone who knows all about you and still loves you.”`,
  `“To live is the rarest thing in the world. Most people exist, that is all.”`,
  `“Always forgive your enemies; nothing annoys them so much.”`,
  `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`
];
var quoteArrayName = [
  `― Oscar Wilde`,
  `― Marilyn Monroe`,
  `― Albert Einstein`,
  `― Frank Zappa`,
  `― Marcus Tullius Cicero`,
  `― Bernard M. Baruch`,
  `― William W. Purkey`,
  `― Dr. Seuss`,
  `― Mae West`,
  `― Mahatma Gandhi`,
  `― Robert Frost`,
  `― J.K. Rowling, `,
  `― Albert Camus`,
  `― Mark Twain`,
  `― C.S. Lewis, The Four Loves`,
  `― Maya Angelou`,
  `― Elbert Hubbard`,
  `― Oscar Wilde`,
  `― Oscar Wilde`,
  `― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches`
];

var usedIndexs = [];

function generateQuote () {
  if (usedIndexs.length -1 == quoteArray.length -1) {usedIndexs = [];}

  var checkUsedIndex = false;
  do {
    var randNumber = Math.floor(Math.random()*quoteArray.length);
    if (usedIndexs.includes(quoteArray[randNumber]) == false) {checkUsedIndex = true} ;
  } while (checkUsedIndex == false)

usedIndexs.push(quoteArray[randNumber]);
  var quoteName =  quoteArray[randNumber];
  var ArrayName =  quoteArrayName[randNumber];
  document.getElementById('quoteOutput').innerHTML = quoteName;
  document.getElementById('authorOutput').innerHTML = ArrayName;
}