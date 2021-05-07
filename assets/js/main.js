// Creare un oggetto che descriva uno studente, con le seguenti proprietà:
// nome,cognome,età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Create an object that lists Name - Surname - Age of a student.
var student = {
    "Name" : "Luke",
    Surname : "Skywalker",
    Age : 26
}
// Display the object properties on screen through a for-in loop.
for(var key in student){
    document.getElementById("student").innerHTML += key + ": " + student[key] + "<br>"   
}
// Create an array to contain more objects "student".
var students = [
    {
        "Name" : "Leia",
        Surname : "Skywalker",
        Age : 26
    },
    {
        "Name" : "Naruto",
        Surname : "Uzumaki",
        Age : 16
    },
    {
        "Name" : "Sasuke",
        Surname : "Uchiha",
        Age : 16
    },
    {
        "Name" : "Sheldon",
        Surname : "Cooper",
        Age : 27
    }
];
