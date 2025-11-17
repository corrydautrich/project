document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;

    switch (page) {
        case "home":
            initHomePage();
            break;
        case "athletics":
            initAthleticsPage();
            break;
        case "dining":
            initDiningPage();
            break;
        default:
            console.log("Page not recognized.");
    }
});

/* ====================== HOME PAGE ====================== */
function initHomePage() {
    console.log("Home page loaded.");

    const eventsBtn = document.getElementById("loadEventsBtn");
    const factsBtn = document.getElementById("loadFactsBtn");

    if (eventsBtn) {
        eventsBtn.addEventListener("click", () => {
            alert("Loading on-campus events... (placeholder)");
        });
    }

    if (factsBtn) {
        factsBtn.addEventListener("click", () => {
            alert("Loading historical facts... (placeholder)");
        });
    }
}

/* ===================== ATHLETICS PAGE ===================== */
function initAthleticsPage() {
    console.log("Athletics page loaded.");

    const teamsBtn = document.getElementById("loadTeamsBtn");
    const scheduleBtn = document.getElementById("loadScheduleBtn");

    if (teamsBtn) {
        teamsBtn.addEventListener("click", () => {
            alert("Loading athletic teams... (placeholder)");
        });
    }

    if (scheduleBtn) {
        scheduleBtn.addEventListener("click", () => {
            alert("Loading this week's games/meets... (placeholder)");
        });
    }
}

/* ===================== DINING PAGE ===================== */
function initDiningPage() {
    console.log("Dining page loaded.");

    const hoursBtns = document.querySelectorAll(".hours-btn");

    hoursBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            alert(`Showing hours for ${btn.dataset.location} (placeholder)`);
        });
    });
}
