const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  // databaseURL: "https://small-talk-ftbybf.firebaseio.com"
});

const { SessionsClient } = require("dialogflow");

//api endpoint for get requests
exports.dialogflowGateway = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const { queryInput, sessionId } = request.body;

    const sessionClient = new SessionsClient({ credentials: serviceAccount });
    const session = sessionClient.sessionPath("small-talk-ftbybf", sessionId);

    const responses = await sessionClient.detectIntent({ session, queryInput });

    const result = responses[0].queryResult;

    response.send(result);
  });
});

const { WebhookClient } = require("dialogflow-fulfillment");

exports.dialogflowWebhook = functions.https.onRequest(
  async (request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log(JSON.stringify(request.body));

    // Import Admin SDK
    var admin = require("firebase-admin");

    // Get a database reference to our blog
    var db = admin.firestore();
    console.log(agent.query);
    console.log(request.body.queryResult.fulfillmentText);

    let data = {
      userMessage: agent.query,
      botMessage: request.body.queryResult.fulfillmentText,
      date: Date.now()
    };
    db.collection("messages")
      .doc("ID")
      .set(data);

    const result = request.body.queryResult;
    //these are responses that will be given if we have webook
    //fulfullment enabled for our intent
    //instead of whatever we specify in the dialog flow console
    function welcome(agent) {
      agent.add(`Welcome to my agent!`);
    }

    function fallback(agent) {
      agent.add(`Sorry, can you try again?`);
    }

    //this will update db with new information user will provide
    async function userOnboardingHandler(agent) {
      const db = admin.firestore();
      const profile = db.collection("users").doc("jeffd23");

      const { name, color } = result.parameters;

      await profile.set({ name, color });
      agent.add(`Welcome aboard my friend!`);
    }

    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", welcome);
    intentMap.set("Default Fallback Intent", fallback);
    intentMap.set("UserOnboarding", userOnboardingHandler);
    agent.handleRequest(intentMap);
  }
);
