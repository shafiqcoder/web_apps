var x = 1;
var array = Array();
function add_element_to_array() {
    array[x] = [document.getElementById("text1").value, document.getElementById("text2").value, document.getElementById("text3").value, document.getElementById("text4").value]
    // console.log(array[x][1])
    if (text1.value === "" || text2.value === "" || text3.value === "" || text4.value === "") {
        alert("Please enter all details")
    } else {
        alert("New Student: " + array[x] + " Added at Roll Number " + x);
        x++;
        // document.getElementById("text1").value = "";
        // document.getElementById("text2").value = "";
        // document.getElementById("text3").value = "";
        // document.getElementById("text4").value = "";
    }
}
function display_array() {
    // var Sname = document.getElementById("text1").value;
    // var Fname = document.getElementById("text2").value;
    // var listItem = document.createElement("td");
    // listItem.innerHTML = Sname;
    // // listItemf.innerHTML = Fname;
    // list.appendChild(listItem);
    // // list.appendChild(listItemf);
    if (text1.value === "" || text2.value === "" || text3.value === "" || text4.value === "") {
        alert("Please enter all details")
    } else {
        var table = document.getElementById("table");
        // var array = array[x];
        // function incrementer() {
        //     k = 0;
        //     k++;
        //     return k;
        // }
        var k;


        var array = [["", document.getElementById("text1").value, document.getElementById("text2").value, document.getElementById("text3").value, document.getElementById("text4").value]];
        for (var i = 0; i < array.length; i++) {
            // create a new row
            var newRow = table.insertRow(table.length);
            for (var j = 0; j < array[i].length; j++) {
                // create a new cell
                var cell = newRow.insertCell(j);
                // console.log(typeof (cell));
                // add value to the cell
                cell.innerHTML = array[i][j];
                document.getElementById("text1").value = "";
                document.getElementById("text2").value = "";
                document.getElementById("text3").value = "";
                document.getElementById("text4").value = "";
            }
        }
    }
    //     var e = "<hr/>";
    //     for (var y = 1; y < array.length; y++) {
    //         e += "Roll Number " + y + " = " + array[y] + "<br/>";
    //         document.getElementById("Result").innerHTML = e;
    //     }
    //     // console.log(array[x][1])
}