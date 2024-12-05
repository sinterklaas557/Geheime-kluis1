function checkPassword() {
    const juisteCode = "geheim123"; // Stel hier jouw gewenste code in
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        // Toon de geheime inhoud
        const secretContent = document.getElementById("secretContent");
        secretContent.classList.remove("verborgen");

        // Voeg fade-in animatie toe aan de afbeelding
        const geheimAfbeelding = document.querySelector(".geheim-afbeelding");
        geheimAfbeelding.classList.add("fade-in");
    } else {
        // Waarschuwing als het wachtwoord onjuist is
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
