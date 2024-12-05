function checkPassword() {
    const juisteCode = "AAA123"; // Stel hier jouw gewenste code in
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        // Toon de geheime inhoud
        const secretContent = document.getElementById("secretContent");
        secretContent.classList.remove("verborgen");

        // Voeg het fade-in-effect toe aan de afbeelding
        const geheimAfbeelding = document.querySelector(".geheim-afbeelding");
        geheimAfbeelding.classList.add("fade-in");
    } else {
        // Waarschuwing bij foutieve code
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
