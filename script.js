function checkPassword() {
    const juisteCode = "1234"; // Stel hier jouw gewenste code in
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        // Verberg de kluisafbeelding en invoervelden
        document.getElementById("kluisAfbeelding").style.display = "none";
        document.querySelector(".wachtwoord-container").style.display = "none";

        // Toon het 'Gefeliciteerd'-bericht
        const congratsMessage = document.getElementById("congratsMessage");
        congratsMessage.classList.remove("verborgen");
        congratsMessage.classList.add("fade-in");

        // Toon de geheime afbeelding en tekst na een fade-in
        setTimeout(() => {
            document.querySelector(".geheim-afbeelding").classList.add("fade-in");
            document.getElementById("secretText").classList.remove("verborgen");
            document.getElementById("secretText").classList.add("fade-in");
        }, 2000); // Wacht 2 seconden voordat de afbeelding en tekst zichtbaar worden
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
