function showMailingPopUp() {
    require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us12.list-manage.com","uuid":"0dc087707a26b4c7a6a9b4cf1","lid":"8e0a1785b5"}) })
    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};

document.getElementById("open-popup").onclick = function() {console.log("hello"); showMailingPopUp()};