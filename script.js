const inviteButton = document.getElementById("inviteButton");
const heroInvite = document.getElementById("heroInvite");
const setupInvite = document.getElementById("setupInvite");

// Replace this with WILD's real Discord invite later.
const WILD_INVITE_URL = "#";

function openInvite(event) {
    event.preventDefault();

    if (WILD_INVITE_URL === "#") {
        return;
    }

    window.open(WILD_INVITE_URL, "_blank");
}

inviteButton.addEventListener("click", openInvite);
heroInvite.addEventListener("click", openInvite);
setupInvite.addEventListener("click", openInvite);
