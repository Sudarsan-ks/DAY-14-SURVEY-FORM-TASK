var container = document.createElement("div");
container.className = "container";
document.body.append(container);
var form = document.createElement("form");
form.id = "survey-form";
form.className = "survey-form";
container.append(form);

function create_h(name, content) {
    var htag = document.createElement(name);
    htag.innerHTML = content;
    return htag;
}

function create_br(brname) {
    var bre = document.createElement(brname);
    return bre
}

function create_label(labname, atrname1, atrvalue1, content) {
    var ele = document.createElement(labname);
    ele.setAttribute(atrname1, atrvalue1);
    ele.innerHTML = content;
    return ele;
}

function input_create(inname, atrname2, atrvalue2, holdername, holdcontent, idname) {
    var inp = document.createElement(inname);
    inp.setAttribute(atrname2, atrvalue2);
    inp.setAttribute(holdername, holdcontent)
    inp.id = idname;
    return inp;
}

function input_createforfood(inname, atrname2, atrvalue2, val, valname, idname, iname, navl) {
    var inp = document.createElement(inname);
    inp.setAttribute(atrname2, atrvalue2);
    inp.setAttribute(val, valname);
    inp.setAttribute(iname, navl);
    inp.id = idname;
    return inp;
}

function table_creat_thtd(thname, scop, co, thigs) {
    var thtd = document.createElement(thname);
    thtd.setAttribute(scop, co);
    thtd.innerHTML = thigs;
    return thtd;
}

var table1 = document.createElement("table");
table1.className = "table";

var thea = document.createElement("thead");
thea.className = "table-dark";
table1.append(thea);

var tabler1 = document.createElement("tr");
thea.append(tabler1);

var tbdy = document.createElement("tbody");
tbdy.id = "table-body";
table1.append(tbdy);

var btn = document.createElement("input");
btn.setAttribute("type", "submit");
btn.className = "btn btn-primary";
btn.id = "submit";



var formh = create_h("h3", "Form Submission:");
var br1 = create_br("br");
var br2 = create_br("br");
var br3 = create_br("br");
var br4 = create_br("br");
var br5 = create_br("br");
var br6 = create_br("br");
var br7 = create_br("br");
var br8 = create_br("br");
var br9 = create_br("br");
var br10 = create_br("br");
var br11 = create_br("br");
var br12 = create_br("br");
var br13 = create_br("br");
var br14 = create_br("br");
var br15 = create_br("br");
var br16 = create_br("br");
var br17 = create_br("br");
var br18 = create_br("br");
var br19 = create_br("br");
var br20 = create_br("br");
var firstname = create_label("label", "for", "first-name", "First Name:");
var lastname = create_label("label", "for", "last-name", "Last Name:");
var add1 = create_label("label", "for", "address1", "Address Line 1:");
var add2 = create_label("label", "for", "address2", "Address Line 2:");
var pin = create_label("label", "for", "pincode", "Pin:");
var gen = create_label("label", "for", "gender", "Gender:");
var male = create_label("label", "for", "male", "Male");
var female = create_label("label", "for", "female", "Female");
var food = create_label("label", "for", "food", "Choose Food:");
var fninput = input_create("input", "type", "first-name", "placeholder", "First Name", "first-name");
var lninput = input_create("input", "type", "last-name", "placeholder", "Last Name", "last-name");
var ad1input = input_create("input", "type", "address1", "placeholder", "Address Line 1", "address1");
var ad2ninput = input_create("input", "type", "address2", "placeholder", "Address Line 2", "address2");
var pininput = input_create("input", "type", "pincode", "placeholder", "PIN", "pincode");
var che1 = input_createforfood("input", "type", "checkbox", "value", "Biryani", "food", "name", "food");
var che2 = input_createforfood("input", "type", "checkbox", "value", "Curd rice", "food", "name", "food");
var che3 = input_createforfood("input", "type", "checkbox", "value", "Fast food", "food", "name", "food");
var Biryani = create_label("label", "for", "food", "Briyani");
var Curd = create_label("label", "for", "food", "Curd rice");
var Fast = create_label("label", "for", "food", "Fast food");
var state = create_label("label", "for", "statename", "State:");
var country = create_label("label", "for", "countryname", "Country:");
var stateinp = input_create("input", "type", "statename", "placeholder", "State", "statename");
var countryinp = input_create("input", "type", "countryname", "placeholder", "Country", "countryname");
var thh1 = table_creat_thtd("th", "scope", "col", "First Name");
var thh2 = table_creat_thtd("th", "scope", "col", "Last Name");
var thh3 = table_creat_thtd("th", "scope", "col", "Address");
var thh4 = table_creat_thtd("th", "scope", "col", "Pincode");
var thh5 = table_creat_thtd("th", "scope", "col", "Gender");
var thh6 = table_creat_thtd("th", "scope", "col", "Food");
var thh7 = table_creat_thtd("th", "scope", "col", "State");
var thh8 = table_creat_thtd("th", "scope", "col", "Country");
var thh9 = table_creat_thtd("th", "scope", "col", "Comments");
var txtlab = create_label("label", "for", "textarea", "Add comments:");
var txta = input_createforfood("input", "type", "textarea", "value", "please enter your comments....", "comments", "name", "textarea");



var gendiv = document.createElement("div");
gendiv.className = "gendiv";

var foodiv = document.createElement("div");
foodiv.className = "foodiv";


var maleradio = document.createElement("input");
maleradio.setAttribute("type", "radio");
maleradio.setAttribute("name", "gender");
maleradio.setAttribute("value", "Male");
maleradio.id = "radio";

var femaleradio = document.createElement("input");
femaleradio.setAttribute("type", "radio");
femaleradio.setAttribute("name", "gender");
femaleradio.setAttribute("value", "Female");
femaleradio.id = "radio";

form.append(formh, br1, firstname, br2, fninput, br3, lastname, br4, lninput, br5, add1, br6, ad1input, br7, add2, br8, ad2ninput, br9, pin, br10, pininput, br11, gen, gendiv, foodiv, state, br16, stateinp, br17, country, br18, countryinp, br12, txtlab, br20, txta, br19, btn, table1);
gendiv.append(maleradio, male, femaleradio, female);
foodiv.append(food, br13, che1, Biryani, br14, che2, Curd, br15, che3, Fast);
tabler1.append(thh1, thh2, thh3, thh4, thh5, thh6, thh7, thh8, thh9);


function displaydata() {
    clearall();
    var tab = document.getElementById("table-body");
    var fn = document.getElementById("first-name").value;
    var ln = document.getElementById("last-name").value;
    var ad1 = document.getElementById("address1").value;
    var ad2 = document.getElementById("address2").value;
    var pi = document.getElementById("pincode").value;
    var ge = document.querySelector("[name='gender']:checked").value;
    var fo = document.querySelector("[name='food']:checked").value;
    var st = document.getElementById("statename").value;
    var ct = document.getElementById("countryname").value;
    var com = document.getElementById("comments").value;

    const row = tab.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);
    const cell8 = row.insertCell(7);
    const cell9 = row.insertCell(8);

    cell1.textContent = fn;
    cell2.textContent = ln;
    cell3.textContent = `${ad1} ${ad2}`;
    cell4.textContent = pi;
    cell5.textContent = ge;
    cell6.textContent = fo;
    cell7.textContent = st;
    cell8.textContent = ct;
    cell9.textContent = com;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    displaydata();
});

function clearall() {
    var tab = document.getElementById("table-body");
    tab.innerHTML = "";
}

