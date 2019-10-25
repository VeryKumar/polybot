// // var botui = new BotUI('my-botui-app');
// // Import the appropriate class
// const { WebhookClient } = require('dialogflow-fulfillment');

//  //Create an instance
// const agent = new WebhookClient({request: request, response: response});

// var dialogflow = require('dialogflow').v2beta1;
// const app = dialogflow("../functions/service-account.json");


const dialogflowURL = 'https://us-central1-small-talk-ftbybf.cloudfunctions.net/dialogflowGateway'

const dialogflow = require('dialogflow');
const uuid = require('uuid');

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
    async function runSample(projectId = 'small-talk-ftbybf') {
  // A unique identifier for the given session
    const sessionId = uuid.v4();

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: 'hello',
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };


  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }
}

// 