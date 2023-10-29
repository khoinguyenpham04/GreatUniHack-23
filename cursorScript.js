const fakeCursor1 = document.querySelector(".fake-cursor1");
const fakeCursor2 = document.querySelector(".fake-cursor2");
const fakeCursor3 = document.querySelector(".fake-cursor3");
const fakeCursor4 = document.querySelector(".fake-cursor4");

const randomOffsetX = Math.floor(Math.random() * 61) - 30; // Random value between -30 and 30
const randomOffsetY = Math.floor(Math.random() * 61) - 30; // Random value between -30 and 30

const randomOffsetX2 = Math.floor(Math.random() * 61) - 30; // Random value between -30 and 30
const randomOffsetY2 = Math.floor(Math.random() * 61) - 30; // Random value between -30 and 30

const randomOffsetX4 = Math.floor(Math.random() * 61) - 30; // Random value between -30 and 30
const randomOffsetY4 = Math.floor(Math.random() * 61) - 30; // Random value between -30 and 30


document.addEventListener("mousemove", (e) => {

    
    fakeCursor1.style.left =1000 -  ((e.pageX + randomOffsetX)*1.5) + "px";
    fakeCursor1.style.top = 1000 - ((e.pageY + randomOffsetY)*1.5) + "px";

    
    fakeCursor2.style.left = 1000 - e.pageY - randomOffsetX2 + "px";
    fakeCursor2.style.top = e.pageX - randomOffsetY2 + "px";

    fakeCursor3.style.left = ((e.pageY)/2 + (e.pageX)/2 - randomOffsetX2) + "px";
    fakeCursor3.style.top = ((e.pageX)/2 + (e.pageY)/2 - randomOffsetY2) + "px";

    fakeCursor4.style.left = 1400 - (e.pageX + randomOffsetX4) + "px";
    fakeCursor4.style.top = 800 - (e.pageY + randomOffsetY4) + "px";

});


