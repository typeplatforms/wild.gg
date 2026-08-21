const WILD_INVITE_URL = "#";

document.querySelectorAll("[data-invite]").forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        if (WILD_INVITE_URL === "#") {
            return;
        }

        window.open(WILD_INVITE_URL, "_blank");
    });
});
