alert("Hello World");

function changh1(){
    $('h1').html("This is changed by SNA after 3 seconds of pageload");
}

setTimeout(() => {
    changh1();
}, 3000);