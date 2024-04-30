function submitFeedback() {
    // Fetch form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;

    // Simple validation
    if (name.trim() === "" || email.trim() === "" || feedback.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Display confirmation message
    document.getElementById("feedbackForm").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
}