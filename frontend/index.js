var botui = new BotUI('my-botui-app');
// ==================================== Global scoped BotUI ===================

// ==================================== DOM Loaded ======================
document.addEventListener('DOMContentLoaded', ()=> {
    renderHomePage()
    let botDiv = document.getElementById('my-botui-app')
    let botCard = document.querySelector('.card-deck')
    //define it here

    // renders bot cards
    const renderBots = () => {
        botCard.innerHTML +=
        `
        <div class="card">
            <img src="https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Small Talk</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        <div class="card">
            <img src="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Bot 2</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        <div class="card">
            <img src="https://t4.ftcdn.net/jpg/02/74/44/35/240_F_274443583_y78Jsnqc7YTLMnpzoX5J69COHOyPVFLJ.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Bot 3</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        `
        }
    // call back function for event listener
    const handleHomeClick = (event) => {
        botDiv.remove()
        renderBots()
    }

    
    // event listener for home button click
    homeClick.addEventListener('click',  handleHomeClick)
    

})

// ============== GETTING TO KNOW THE BASICS ========================
// botui.message.add({
//     delay: 500,
//     loading: true,
//     content: 'Hello from bot.'
// });

// botui.message.add({
//     human: true,
//     content: 'Hello from human.'
//   });

// botui.message.add({ // show a message
// // human: true,
// content: 'Whats your name?'
// }).then(function () { // wait till its shown
// botui.action.text({ // show 'text' action
//     action: {
//     placeholder: 'Your name'
//     }
// });
// })

// botui.message.add({ // show a message
// // human: true,
// content: 'Whats your name?'
// }).then(function () { // wait till its shown
// return botui.action.text({ // show 'text' action
//     action: {
//     placeholder: 'Your name'
//     }
// });
// }).then(function (res) { // get the result
// botui.message.add({
//     content: 'Your name is ' + res.value
// });
// });

// botui.message.add({
//   type: 'embed', // this is 'text' by default
//   content: 'https://www.youtube.com/embed/ZRBH5vHhm4c'
// });

// botui.action.text({
//     action: {
//       placeholder: 'Enter your text here'
//     }
//   }).then(function (res) { // will be called when it is submitted.
//     console.log(res.value); // will print whatever was typed in the field.
//   });

// ======================================== Getting to know the basics ============================================
// get botui to render from json
// write function to display correct text from 1 json obj


// an array of obj text that resides in that object
// write function to loop over each object and render each text
// data1 = {
//     "sessionId": "foo",
//     "queryInput": {
//         "text": {
//             "text": "Hi, who are you?",
//             "languageCode": "en-US"
//         }
//     }
// }
// data2 = {
//     "fulfillmentMessages": [
//         {
//             "platform": "PLATFORM_UNSPECIFIED",
//             "text": {
//                 "text": [
//                     "I'm a virtual being, not a real person."
//                 ]
//             },
//             "message": "text"
//         }
//     ],
//     "outputContexts": [],
//     "queryText": "Hi, who are you?",
//     "speechRecognitionConfidence": 0,
//     "action": "smalltalk.agent.acquaintance",
//     "parameters": {
//         "fields": {}
//     },
//     "allRequiredParamsPresent": true,
//     "fulfillmentText": "I'm a virtual being, not a real person.",
//     "webhookSource": "",
//     "webhookPayload": null,
//     "intent": {
//         "inputContextNames": [],
//         "events": [],
//         "trainingPhrases": [],
//         "outputContexts": [],
//         "parameters": [],
//         "messages": [],
//         "defaultResponsePlatforms": [],
//         "followupIntentInfo": [],
//         "name": "projects/small-talk-ftbybf/agent/intents/6fcd9648-9a31-4ae7-bcb5-7c3029b91bf0",
//         "displayName": "smalltalk.agent.acquaintance",
//         "priority": 0,
//         "isFallback": false,
//         "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
//         "action": "",
//         "resetContexts": false,
//         "rootFollowupIntentName": "",
//         "parentFollowupIntentName": "",
//         "mlDisabled": false
//     },
//     "intentDetectionConfidence": 1,
//     "diagnosticInfo": null,
//     "languageCode": "en-us",
//     "sentimentAnalysisResult": null
// }


// dataArr = [data1, data2]

// dataArr.forEach((obj)=> {
//     // console.log(obj)
//     // debugger
//     if (!!obj.fulfillmentMessages) {
//         botui.message.add({
//         delay:500,
//         loading: true,
//         content: obj.fulfillmentText })
//     } else { botui.message.add({
//         human: true,
//         content: obj.queryInput.text.text
//         }) 
//     }
// })

// ============================================ ABOVE LOGIC IS IMORTANT ==================
// debuggerd

// botui.message.add({
// human: true,
// // delay: 500,
// content: data1["queryInput"]["text"]["text"]
// }).then( () => {
//     botui.message.add({
//         loading: true,
//         delay: 500,
//         content: data2["fulfillmentMessages"][0]["text"]["text"][0]
//     })
// })




// debugger

// botui.message.add({
//     loading: true,
//     delay: 500,
//     content: data2["fulfillmentMessages"][0]["text"]["text"][0]
// })

// ==============================================================================

function renderHomePage(){
    botui.message.add({
    delay: 500,
    loading: true,
    content: 'Welcome to Smart-Chat 1.0. '
// })
// }).then( () => {
//     botui.message.add({
//         delay: 500,
//         loading: true,
//         content: ''
//     })
}).then( () => {
    botui.action.text({
        action: {
          placeholder: 'Enter your text here'
        }
      });
})
}
// finds home click
let homeClick = document.querySelector('.nav-link')