const start_date = document.getElementById("start_date");
const end_date = document.getElementById("end_date");

// afficher la date du jour dans le format du input
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
//ne pas pouvoir selectionner une date anterieur a today
start_date.min = today;

//Calculer la date de demain
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
// mettre en format input
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

// Calcul le prix total des nuits
const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  totalN.textContent = diffDays;
  total.textContent = diffDays * nightPrice.textContent;
};

// Affichage de la logique
start_date.addEventListener("change", () => {
  let day = new Date(start_date.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

end_date.addEventListener("change", () => {
  let day = new Date(end_date.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});
start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);
bookingCalc();
