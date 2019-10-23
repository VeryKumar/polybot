var botui = new BotUI('my-botui-app');

document.addEventListener('DOMContentLoaded', ()=> {
    
    renderPage()
    
    let submitForm = document.querySelector('.botui-actions-select')
    let loginContainer = document.querySelector('#login-page')

    function loginPage(){
        loginContainer.innerHTML +=
        `
        
        `
    }
    
    function login(event) {
        botui.remove()
        

    }
    submitForm.addEventListener('submit', ())





})




function renderPage() {
    botui.message.add({
        delay:500,
        loading: true,
        content: 'Hello'
    }).then(()=> {
        botui.action.select({
            action: {
                placeholder : "What would you like to do?", 
                value: 'Scroll down to look at what you can do.', // Selected value or selected object. Example: {value: "TR", text : "Türkçe" }
                searchselect : true, // Default: true, false for standart dropdown
                label : 'text', // dropdown label variable
                options : [
                                {value: "EN", text : "Continue Talking to Me." },
                                {value: "ES", text : "Sign Up" },
                                {value: "TR", text : "Login" }
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
            console.log(res.value); // will print "one" from 'value'
          })
    })
}