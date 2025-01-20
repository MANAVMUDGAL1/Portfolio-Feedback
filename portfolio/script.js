document.getElementById("feedbackForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.getElementById("feedback").value;
    console.log("Feedback submitted:", feedback);
    if (feedback != '') {
        alert("Thank you for your feedback!");
        document.getElementById("feedback").value = "";
    }else{
        alert("please enter a feedback");
    }
});