var alexa = require('alexa-app');
var app = new alexa.app();

//provides an introductory message to the user
app.launch(function (request, response) {
  //your own custom welcome message
  response.say("Hello there, welcome to crackly.");
  //include crackly sound
  response.shouldEndSession(false);
})

//body -- all the intents/things user can ask
app.intent('GetLunchSuggestions',
  {
    "slots": {},
    "utterances": [
      "what's for lunch",
      "where should {I|we} go for lunch"
    ]
  },
  function (request, response) {
    generate_suggestions(response);
    return;
  }
);

//functions
//one to generate emojis, one to generate sound
//condtion that reponse matches answer

function generate_suggestions(response) {
  var emoji = ["Thai",
    "Sushi", "😁", "🐶",
    "Chik-fil-a",
    "Smash Burgers",
    "Uncle Julio's"
  ];
  var rand = emoji[Math.floor(Math.random() * emoji.length)];
  response.say("How about some " + rand + " today?");
  response.send();
  return;
}

//error handling


// Connect to lambda
exports.handler = app.lambda();
if ((process.argv.length === 3) && (process.argv[2] === 'schema')) {
  console.log(app.schema());
  console.log(app.utterances());
}