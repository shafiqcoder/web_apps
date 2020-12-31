let tabpanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");
for (let i = 0; i < tabpanes.length; i++) {
    tabpanes[i].addEventListener("click", function () {
        document.getElementsByClassName("tab-header")
        [0].getElementsByClassName("active")
        [0].classList.remove("active");
        tabpanes[i].classList.add("active");
        document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")
        [0].classList.remove("active");
        document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")
        [i].classList.add("active");
    });
}
const userNames = [{
    id: 1,
    name: "Ameer Hamza",
    username: "ameernormie",
    password: "abc",
},
{
    id: 2,
    name: "Rafay Ahmed",
    username: "rafayjanjua",
    password: 123,
},
{
    id: 3,
    name: "Shafiq ur Rehman",
    username: "shafiqcoder",
    password: 456,
},
];
function login() {
    let username = document.getElementById("userName").value;
    let pass = document.getElementById("pass").value;
    if (username === userNames[2].name && pass == userNames[2].password) {
        window.location.href = "./login.html";
    } else {
        window.location.href = "./404.html";
    }
}