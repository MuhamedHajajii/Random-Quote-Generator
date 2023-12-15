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
  `“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”`,
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
  `― Steve Jobs`,
  `― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches`
];
var quoteArrayImgs = [
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/1.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/2.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/3.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/4.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/5.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/6.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/7.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/8.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/9.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/10.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/11.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/12.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/13.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/14.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/15.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/16.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/17.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/18.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/19.jpg" alt="">`,
  `<img style="border-radius:50% ;width:150px;height:150px;" src="./imges/20.jpg" alt="">`
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
  var quoteArrayImgss =  quoteArrayImgs[randNumber];
  document.getElementById('quoteimgs').innerHTML = quoteArrayImgss;
  document.getElementById('authorOutput').innerHTML = ArrayName;
  document.getElementById('quoteOutput').innerHTML = quoteName;
}