function validateForm() {
    var fname = document.getElementById(`firstName`).value.length < 1 ? `First Name required!\n` : `First Name: ${document.getElementById(`firstName`).value}\n`;
    var lname = document.getElementById(`lastName`).value.length < 1 ? `Last Name required!\n` : `Last Name: ${document.getElementById(`lastName`).value}\n`;
    var gender = document.getElementById(`genderFemale`).checked || document.getElementById(`genderMale`).checked ? `Gender: ${document.querySelector(`input[name="gender"]:checked`).value}\n` : `Gender required!\n`;
    var nationality = document.getElementById(`nationality`).value.length < 1 ? `Nationality required!\n` : `Nationality: ${document.getElementById(`nationality`).value}\n`;
    var address = document.getElementById(`addr`).value.length < 1 ? `Address required!\n` : `Address: ${document.getElementById(`addr`).value}\n`;
    var medicalHistory = [];
    document.getElementsByName(`medicalHist`).forEach((el) => {
        if (el.checked) medicalHistory.push(el.value);
    });
    var txtMedicalHistory = medicalHistory.length > 0 ? `Medical History: ${medicalHistory.join(`, `)}\n` : `Medical History must be selected!\n`;
    var currentlyMedication = document.querySelector(`input[name="currentlyMed"]:checked`);
    var txtCurentlyMedication = "";
    if (currentlyMedication == undefined || currentlyMedication == null) txtCurentlyMedication = `Currently Medication must be selected!\n`;
    else if (currentlyMedication.value === "y") {
        txtCurentlyMedication = document.getElementById(`currentMed`).value.length < 1 ? `Currently Medication must be indicated!\n` : `Currently Medication: ${document.getElementById(`currentMed`).value}\n`;
    }
    alert(`${fname}${lname}${gender}${nationality}${address}${txtMedicalHistory}${txtCurentlyMedication}`);
}

(function () {
    `use strict`;
    document.getElementsByName(`currentlyMed`).forEach(function (e) {
        e.addEventListener(`change`, () => {
            var txtCurrentMed = document.getElementById(`currentMed`);
            if (e.value === "y") {
                if (txtCurrentMed.hasAttribute(`readonly`)) {
                    txtCurrentMed.removeAttribute(`readonly`);
                }
            } else if (e.value === "n") {
                txtCurrentMed.value = "";
                txtCurrentMed.setAttribute(`readonly`, true);
            }
        })
    })
})();