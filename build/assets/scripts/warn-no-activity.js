// WARN NO ACTIVITY

var timeoutWarnNoActiveID;
var timeoutWarnNoActiveID1;
var timoeutRemoveEL;

function removeEventListenerTimer() {
    timoeutRemoveEL = window.setTimeout(removeWarnNoActiveEL, 150*1000);
}

function startWarnNoActiveTimer() {
    timeoutWarnNoActiveID = window.setTimeout(goWarnNoActive, 12*1000);
}

function startWarnGlobalTimer() {
    timeoutWarnNoActiveID1 = window.setTimeout(goWarnNoActive, 300*1000);
}

function resetWarnNoActiveTimer(e) {
    window.clearTimeout(timeoutWarnNoActiveID);
    startWarnNoActiveTimer();
}

function goWarnNoActive() {
    if(!sessionStorage.noModalNoActivity) {
        $("#modal-warn-no-activity").modal();
        sessionStorage.setItem('openModalNoActivity', '1');
        window.clearTimeout(timeoutWarnNoActiveID1);
        window.clearTimeout(timoeutRemoveEL);
        removeWarnNoActiveEL();
    }
}

function removeWarnNoActiveEL() {
    document.removeEventListener("mousemove", resetWarnNoActiveTimer, true);
    document.removeEventListener("mousedown", resetWarnNoActiveTimer, true);
    document.removeEventListener("keypress", resetWarnNoActiveTimer, true);
    document.removeEventListener("touchmove", resetWarnNoActiveTimer, true);
    document.removeEventListener("MSPointerMove", resetWarnNoActiveTimer, true);
    window.clearTimeout(timeoutWarnNoActiveID);
}

function setUpWarnNoActive() {
    document.addEventListener("mousemove", resetWarnNoActiveTimer, false);
    document.addEventListener("mousedown", resetWarnNoActiveTimer, false);
    document.addEventListener("keypress", resetWarnNoActiveTimer, false);
    document.addEventListener("touchmove", resetWarnNoActiveTimer, false);
    document.addEventListener("MSPointerMove", resetWarnNoActiveTimer, false);
    startWarnNoActiveTimer()
    startWarnGlobalTimer();
    removeEventListenerTimer();
}    

$(document).ready(function() {
    $("#modal-warn-no-activity").on("hidden.bs.modal", function () {
        sessionStorage.setItem('noModalNoActivity', '1');
        sessionStorage.removeItem('openModalNoActivity');
    });

    if(!sessionStorage.openModalNoActivity && !sessionStorage.noModalNoActivity) {
        setUpWarnNoActive();
    } else if(sessionStorage.openModalNoActivity) $("#modal-warn-no-activity").ready(function() {
        $("#modal-warn-no-activity").modal();
    });
});

// WARN NO ACTIVITY