const userNames = [{
        id: 1,
        name: "Ameer Hamza",
        email: "hamza@gmail.com",
        username: "ameernormie",
        password: "abc",
    },
    {
        id: 2,
        name: "Rafay Ahmed",
        email: "rafay@gmail.com",
        username: "rafayjanjua",
        password: 123,
    },
    {
        id: 3,
        name: "Shafiq Ahmed",
        email: "shafiq@gmail.com",
        username: "shafiqcoder",
        password: 456,
    },
];

function register() {
    var fName = document.getElementById("fName").value;
    var uName = document.getElementById("uName").value;
    var email = document.getElementById("email").value;
    var pw = document.getElementById("pw").value;
    if (fName === "" || uName === "" || email === "" || pw === "") {
        alert("Please fill all the fields..")
    } else {
        //Resolving conflict
        const email_exist = userNames.find(person => person.email === email);
        const pw_exist = userNames.find(person => person.password === pw);
        if (email_exist === undefined && pw_exist === undefined) {
            console.log("Good to go");
            var new_object = {};
            new_object.id = userNames.length + 1;
            new_object.fullname = fName;
            new_object.username = uName;
            new_object.email = email;
            new_object.password = pw;
            console.log(pw + "reg")
            userNames.push(new_object);
            console.log(userNames);
        } else {
            alert("User already exist! Try again..")
        }

    }

}
document.body.style.background = "aqua";

function getUserName(user_name, user_password) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const user = userNames.find((user) => user.username === user_name);
            // TypeGuard
            if (!user) {
                // We will reject the promise if user is not found
                rej("No user found!")
            }
            // On this line, We are sure that the user exists
            if (user.password === user_password) {
                res("Success: User found!")
            } else {
                rej("Password is not correct")
                console.log(user_password + "log")
            }
        }, 3000);
    });
}

function getStyle(id, name) {
    var element = document.getElementById(id);
    return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
}

/**
 * Takes an id of element and toggles it's display
 * 
 * @param {string} ID 
 */
function showOrHideElement(id, type) {
    var element = document.getElementById(id);
    element.style.display = type;
}

setTimeout(function() { showOrHideElement('myDiv', "none"); }, 0);


function signin() {
    showOrHideElement('myDiv', "block");
    showOrHideElement('sign', "none")
}



function login() {

    document.getElementById("result").innerHTML = "";
    showOrHideElement('myDiv', "none");
    // loading === true
    document.getElementById("loading").innerHTML = "We are verifying your credentials! Please wait...";
    document.getElementById("loading").style.fontSize = "x-large";
    var p = document.getElementById("pw").value;
    var u = document.getElementById("uName").value;
    getUserName(u, p)
        .then(function(user) {
            document.getElementById("result").innerHTML = JSON.stringify(user, null, 2);
        })
        .catch(function(err) {
            document.getElementById("result").innerHTML = err;
        })
        .finally(() => {
            document.getElementById("loading").innerHTML = "";
            showOrHideElement('myDiv', "block");
        })
}

// showOrHideElement('myDiv', "none")