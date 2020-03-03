
// BEST PRICE

var timeoutID;
var timeoutTime = 10000;

function startTimer() {
    timeoutID = window.setTimeout(goOnInactive, timeoutTime);
}

function resetTimer(e) {
    window.clearTimeout(timeoutID);
    startTimer();
}

function goOnInactive() {
    if(!sessionStorage.noModalFares) {
        $("#modal-best-price").modal();
        sessionStorage.setItem('openModalFaresNow', '1');
    }
}

function removeEL() {
    document.removeEventListener("mousemove", resetTimer, true);
    document.removeEventListener("mousedown", resetTimer, true);
    document.removeEventListener("keypress", resetTimer, true);
    document.removeEventListener("DOMMouseScroll", resetTimer, true);
    document.removeEventListener("mousewheel", resetTimer, true);
    document.removeEventListener("touchmove", resetTimer, true);
    document.removeEventListener("MSPointerMove", resetTimer, true);
}

function setItUp() {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("DOMMouseScroll", resetTimer, false);
    document.addEventListener("mousewheel", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
    document.addEventListener("MSPointerMove", resetTimer, false);
    startTimer();
}    

$(document).ready(function() {
    $("#modal-best-price").on("hidden.bs.modal", function () {
        sessionStorage.setItem('noModalFares', '1');
        sessionStorage.removeItem('openModalFaresNow');
    });
    if(!sessionStorage.openModalFaresNow && !sessionStorage.noModalFares) setItUp();
    else if(sessionStorage.openModalFaresNow) $("#modal-best-price").ready(function() {
        window.clearTimeout(timeoutID);
        removeEL();
        $("#modal-best-price").modal();
    });
});

// BEST PRICE END