document.getElementById("traffic-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const errors = [];

    // Validate Full Name (only letters allowed)
    const name = document.getElementById("name").value.trim();
    const nameRegex = /^[A-Za-z\s]+$/;
    if (name === "") {
        errors.push("Full Name is required.");
    } else if (!nameRegex.test(name)) {
        errors.push("Full Name must only contain letters and spaces.");
    }

    // Validate Email (valid email format)
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        errors.push("Email Address is required.");
    } else if (!emailRegex.test(email)) {
        errors.push("Email Address must be in a valid format.");
    }

    // Validate Age (between 8 and 100)
    const age = document.getElementById("age").value.trim();
    if (age === "") {
        errors.push("Age is required.");
    } else if (isNaN(age) || age < 8 || age > 100) {
        errors.push("Age must be a number between 8 and 100.");
    }

    // Validate Gender
    const gender = document.getElementById("gender").value;
    if (gender === "") errors.push("Gender selection is required.");

    // Validate Traffic Frequency
    const trafficFrequency = document.getElementById("traffic-frequency").value;
    if (trafficFrequency === "") errors.push("Traffic Frequency selection is required.");

    // Validate Road Condition
    const roadCondition = document.getElementById("road-condition").value;
    if (roadCondition === "") errors.push("Road Condition selection is required.");

    // Validate Radio Buttons
    const trafficManagement = document.querySelector('input[name="traffic-management"]:checked');
    if (!trafficManagement) errors.push("Traffic Management satisfaction is required.");

    const incidentWitnessed = document.querySelector('input[name="incident-witnessed"]:checked');
    if (!incidentWitnessed) errors.push("Incident witnessed field is required.");

    // Validate Checkbox (Preferred Mode of Transport)
    const transportModes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (transportModes.length === 0) errors.push("Select at least one preferred mode of transport.");

    // Validate Preferred Route (minimum length of 5 characters)
    const preferredRoute = document.getElementById("preferred-route").value.trim();
    if (preferredRoute === "") {
        errors.push("Preferred route is required.");
    } else if (preferredRoute.length < 5) {
        errors.push("Preferred route must be at least 5 characters long.");
    }

    // Validate Suggestions (minimum length of 10 characters)
    const suggestions = document.getElementById("suggestions").value.trim();
    if (suggestions === "") {
        errors.push("Suggestions are required.");
    } else if (suggestions.length < 10) {
        errors.push("Suggestions must be at least 10 characters long.");
    }

    // Display Errors
    if (errors.length > 0) {
        alert("Please correct the following errors:\n\n" + errors.join("\n"));
        return false;
    }

    // If no errors, submit the form
    alert("Form submitted successfully!");
    this.submit();
});
