function Validation(event){
    event.preventDefault()

    document.getElementById("nameerror").textContent = ""
    document.getElementById("emailerror").textContent = ""
    document.getElementById("regionerror").textContent = ""
    document.getElementById("messageerror").textContent = ""
    document.getElementById("checkboxerror").textContent = ""

    var isValid = true

    var name_checking = document.getElementById("name").value
    console.log(name_checking)


    // Name Validation 
    var char_counter = 0
    if(name_checking == ""){
        document.getElementById("nameerror").textContent = "Please Fill Your Name"
        isValid = false
    }
    else if(name_checking[0] == " "){
        document.getElementById("nameerror").textContent = "Name Should not Start With A Space"
        isValid = false
    }
    else{
        for(let i = 0; i  < name_checking.length; i++){
            if(name_checking[i] == " "){
            }
            else{
                char_counter++;
            }    
        }
        if(char_counter < 6){
            document.getElementById("nameerror").textContent = "Must have at least 6 characters for a name"
            isValid = false
        }
    }


    // email validation
    var email_checking = document.getElementById("email").value
    if(email_checking == "")
    {
        document.getElementById("emailerror").textContent = "Please input your email here"
        isValid = false
    }
    else if(!email_checking.endsWith("@gmail.com") && !email_checking.endsWith("@yahoo.com"))
    {
        document.getElementById("emailerror").textContent = "Please use Gmail or Yahoo account"
        isValid = false
    }
    for(let i = 0; i < email_checking.length; i++){
        if(email_checking[i] == " "){
            document.getElementById("emailerror").textContent = "Please Use an email without the spaces"
            isValid = false;
        }
    }
    


    // Region Validation
    var region_checking = document.getElementById("region").value
    if(region_checking == "")
    {
        document.getElementById("regionerror").textContent = "Please Input Your Country/Region"
        isValid = false
    }
    else if(region_checking[0] == " "){
        document.getElementById("regionerror").textContent = "Please start without a space"
        isValid = false
    }
    else if(region_checking.length > 85)
    {
        document.getElementById("regionerror").textContent = "Sorry There is no such regions or countries that is longer than 85 character"
        isValid = false
    }



    // message validation
    var message_checking = document.getElementById("message").value
    if(message_checking == "")
    {
        document.getElementById("messageerror").textContent = "Please Input your message"
        isValid = false
    }
    else{
        var front = 0;
        var word = 0;
        var space = 0;
        for(let i = 0; i < message_checking.length; i++){
            if(front == 1 && message_checking[i] == " "){
                space = 1;
            }
            else{
                word = word + space;
                front = 1;
                space = 0;
            }
        }
        word = word + 1
        if(word > 500 || word < 25){
            document.getElementById("messageerror").textContent = "Please Input Between 25-500 words"
            isValid = false
        }
    }


    // checkbox validation
    var check = document.getElementById("checkbox").checked
    if(check){
        if(!isValid){
            document.getElementById("checkboxerror").textContent = "Please fill the form, in order to receive a copy of the message"
        }
    }


    // if the form is valid
    if(isValid)
    {
        alert("Your Message has been send succesfully, please wait for our respond")
        window.location.href = "./contact.html";
        document.getElementById("submit").submit();
    }
}