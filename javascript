document.getElementById("eventForm").addEventListener("submit",function (e){
    e.preventDefault();
    //prevent real submission
    //Hide the form
    document.getElementById("eventForm").style.display = "none";
    //Show success message
    document.getElementById("msgSuccess").style.display = "block";
});