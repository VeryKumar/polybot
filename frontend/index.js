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
        botCard.innerHTML =
        `
        <div class="card">
            <img src="https://thumbs.gfycat.com/WebbedBeautifulIrishwaterspaniel-size_restricted.gif" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Small Talk</h5>
                <p class="card-text">Try talking with Small-Talk he can hold a conversation can you.</p>
                <button class="active" type="button" id="small-talk">Talk to with Small Talk</button>
            </div>
        </div>
        <div class="card">
            <img src="https://i.giphy.com/media/3owzWj2ViX6FJj5xMQ/giphy.webp" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Jar Jar Binks</h5>
                <p class="card-text">Are Yousa Ready For Dis?</p>
                <button class="active" type="button" id="jar-btn">Talk to with Small Talk</button>
            </div>
        </div>
        <div class="card">
            <img src="https://media1.giphy.com/media/l9VH4YLOFjTaS1Uw3m/giphy.gif" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Hogan</h5>
                <p class="card-text">Let's hang and bang brother!</p>
                <button class="active" type="button" id="hogan-btn">Talk to with Small Talk</button>
            </div>
            <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        `
         let smallTalkBtn = document.querySelector('#small-talk')
         smallTalkBtn.addEventListener('click', (event)=>{
            let cardDeck = document.querySelector('.card-deck')
            cardDeck.remove()
            let showBot = document.querySelector('#bot-show')
            showBot.innerHTML =
            `
            <iframe
            allow="microphone;"
            width="350"
            height="430"
            style="float:center"
            src="https://console.dialogflow.com/api-client/demo/embedded/uareasmolcat">
            </iframe>
            `
         })

         let JarJarBtn = document.querySelector('#jar-btn')
         JarJarBtn.addEventListener('click', (event)=>{
            let cardDeck = document.querySelector('.card-deck')
            cardDeck.remove()
            let showBot = document.querySelector('#bot-show')
            showBot.innerHTML =
            `
            <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/3abae38f-7207-495f-a753-9814834a3186">
            </iframe>
            `
         })

        let HoganBtn = document.querySelector('#hogan-btn')
        HoganBtn.addEventListener('click', (event)=>{
            let cardDeck = document.querySelector('.card-deck')
            cardDeck.remove()
            let showBot = document.querySelector('#bot-show')
            showBot.innerHTML =
            `
            <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/c45f698a-9344-4bde-ab74-701ca16e3b9f">
             </iframe>
            `
         })




    }



    // call back function for event listener
    const handleHomeClick = (event) => {
        botDiv.remove()
        renderBots()
    }

    let homeClick = document.querySelector('.nav-link')

    // event listener for home button click
    homeClick.addEventListener('click',  handleHomeClick)

    // const renderFunny = () => {
    //     let funnyErrorContainer = document.querySelector('#funny-error')
    //     funnyErrorContainer.innerHTML =
    //     `
    //     <iframe src="https://giphy.com/embed/FqdGGgugkC4Xm" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/typing-tech-sci-fi-FqdGGgugkC4Xm">via GIPHY</a></p>
    //     `
    // }

    // const funnyError = (event) => {
    //     botDiv.remove()
    //     renderFunny()
    // }

    // logoClick.addEventListener('click', funnyError)
    

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
}).then(() =>{
    botui.message.add({ // show a message
// human: true,
content: 'Whats your name?'
})
}).then(function () { // wait till its shown
return botui.action.text({ // show 'text' action
    action: {
    placeholder: 'Your name'
    }
});
}).then(function (res) { // get the result
botui.message.add({
    content: 'Hi ' + res.value
});
}).then(()=> {
    botui.action.select({
        delay: 1000,
        action: {
            placeholder : "What would you like to do?",
            // value: 'Scroll down to look at what you can do.', // Selected value or selected object. Example: {value: "TR", text : "Türkçe" }
            searchselect : true, // Default: true, false for standart dropdown
            label : 'text', // dropdown label variable
            options : [
                            // {value: "Talk to Bot", text : "Talk to A Bot" },
                            // {value: "Sign-Up", text : "Learn More About Our Bots" },
                            {value: "Bot", text : "Talk to A Bot" }
                            // {value: "DE", text : "" },
                            // {value: "FR", text : "Français" },
                            // {value: "IT", text : "Italiano" },
                      ],
            button: {
              icon: 'check',
              label: 'OK',
            }
          }
      }).then(function (res) { // will be called when a button is clicked.
        // debugger
        if(res.value == "Bot"){
        let submitForm = document.querySelector('.botui-actions-select')
        submitForm.addEventListener('submit', botPage(event))


    
        function display(){
        let loginContainer = document.querySelector('#login-page')
        loginContainer.innerHTML =
        `
        <div class="card">
            <button class="active" type="button" id="small-talk">Talk to with Small Talk</button>
        </div>
        <div class="card">
            <button class="active" type="button" id="jarjar">Talk to with JarJar Binks</button>
        </div>
        <div class="card">
            <button class="active" type="button" id="hogan">Talk to with Hogan</button>
        </div>
        `
        
        let btn1 = document.querySelector('#small-talk')
        btn1.addEventListener('click', (event)=>{
            loginContainer.remove()
            let botDiv = document.getElementById('my-botui-app')
            botDiv.remove()
            let showBot = document.querySelector('#bot-container')
            showBot.innerHTML =
            `
            <iframe
            allow="microphone;"
            width="350"
            height="430"
            style="float:center"
            src="https://console.dialogflow.com/api-client/demo/embedded/uareasmolcat">
            </iframe>
            `

            // // debugger
            // let iframe = document.getElementsByTagName('iframe')[0].contentWindow
            
            // let iframeWindow = iframe.contentWindow.document
            // let inputForm = document.querySelector('#agentDemoForm')
            // inputForm.addEventListener('keypress', (event) => {
            //     // debugger
            //     let chatBox = document.querySelector('#result')
            //     let userRequest = chatBox.querySelector('#user-request')
            //     // debugger
            //     let serverResponse = chatBox.querySelector('#server-response')
            //     let flow = document.querySelector('.transcript')
            //     let flowList = document.createElement('li')        
        })

            // flowList.innerHTML =
            // `
            // <li>`${}`</li>
            // `

        let btn2 = document.querySelector('#jarjar')
        btn2.addEventListener('click', (event)=>{
            let loginContainer = document.querySelector('#login-page')
            loginContainer.remove()
            let botDiv = document.getElementById('my-botui-app')
            botDiv.remove()
            let showBot = document.querySelector('#bot-container')
            showBot.innerHTML =
            `
            <iframe
            allow="microphone;"
            width="350"
            height="430"
            style="float:center"
            src="https://console.dialogflow.com/api-client/demo/embedded/3abae38f-7207-495f-a753-9814834a3186">
            </iframe>
            `
        })

        let btn3 = document.querySelector('#hogan')
        btn3.addEventListener('click', (event)=>{
            let loginContainer = document.querySelector('#login-page')
            loginContainer.remove()
            let botDiv = document.getElementById('my-botui-app')
            botDiv.remove()
            let showBot = document.querySelector('#bot-container')
            showBot.innerHTML =
            `
            <iframe
            allow="microphone;"
            width="350"
            height="430"
            style="float:center"
            src="https://console.dialogflow.com/api-client/demo/embedded/c45f698a-9344-4bde-ab74-701ca16e3b9f">
            </iframe>
            `
        })


    }
    
        function botPage(event) {
            event.preventDefault()
            display()
        }

        // login information 
        // document.getElementById('username').value
        // document.getElementById('password').value
        // document.getElementById('login')
        // 

        console.log(res.value); // will print "one" from 'value'
        } 
        

        // add esle if res.value == "Sign Up"
        // add else if res.value == "Login"
      })
})
}
// finds home click
let homeClick = document.querySelector('.nav-link')

let logoClick = document.querySelector('.navbar-brand')