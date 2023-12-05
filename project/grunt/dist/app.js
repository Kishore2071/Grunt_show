/*Processed by SNA Labs on 26/7/2022 @ 17:26:16*/
$('p').html("This is run by admin.js SNA");
$(document).ready(function(){
    alert("All set");
})
alert("Hello World");

function changh1(){
    $('h1').html("This is changed by SNA after 3 seconds of pageload");
}

setTimeout(() => {
    changh1();
}, 3000);
//# sourceMappingURL=app.js.map