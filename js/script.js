document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;

    if (page === "home") initHomePage();
    if (page === "athletics") initAthleticsPage();
    if (page === "dining") initDiningPage();
});

/* ====================== DATA ====================== */

const eventsData = [
    "Tabletop Tuesday: Tuesdays at 6 PM, PLC",
    "Worship on the Hill: Tuesdays at 8 PM, Grand River Chapel",
    "Pursue: Wednesdays at 7:30 PM, Gano Chapel",
    "Revive: Thursdays at 7 PM, The Perch",
    "Forge: Thursdays at 7:30 PM, Freshman Triangle"
];


const factsData = [
    "Founded in 1849.",
    "Campus sits on 200 acres.",
    "Over 40 majors offered.",
];

const athleticsTeams = [
    "Football", "Basketball", "Swimming", "Track & Field", "Soccer"
];

const athleticsGames = [
    "Basketball vs. MU – Tues 7 PM",
    "Football vs. Central – Sat 1 PM",
    "Swim Meet at KU – Wed 5 PM"
];

const diningHours = {
    caf: "Mon–Fri: 7am–7pm | Sat–Sun: 8am–6pm",
    cage: "Daily: 10am–10pm",
    beak: "Daily: 7am–11pm",
    twentyFour: "Vending machines (Library, Union, Dorms)"
};

/* ====================== HOME PAGE ====================== */

function initHomePage() {
    const eventsDiv = document.getElementById("eventsList");
    const factsDiv = document.getElementById("factsList");

    eventsDiv.innerHTML = eventsData
        .map(e => `<p class="mb-2">• ${e}</p>`)
        .join("");

    factsDiv.innerHTML = factsData
        .map(f => `<p class="mb-2">• ${f}</p>`)
        .join("");

    loadWeather();



}

/* ===================== ATHLETICS PAGE ===================== */

function initAthleticsPage() {
    document.getElementById("teamsList").innerHTML = athleticsTeams
        .map(t => `<p>• ${t}</p>`).join("");

    document.getElementById("gamesList").innerHTML = athleticsGames
        .map(g => `<p>• ${g}</p>`).join("");
}

/* ===================== DINING PAGE ===================== */

function initDiningPage() {
    document.getElementById("cafHours").textContent = diningHours.caf;
    document.getElementById("cageHours").textContent = diningHours.cage;
    document.getElementById("beakHours").textContent = diningHours.beak;
    document.getElementById("twentyFourHours").textContent = diningHours.twentyFour;
}
