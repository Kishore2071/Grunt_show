/*Processed by SNA Labs on 29/7/2022 @ 1:36:9*/
$('p').html("This is run by admin.j SNA");
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