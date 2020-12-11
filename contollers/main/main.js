// Start of the clicks events.
document.getElementById("headerButton").onclick = function (e) {
  showHeaderPanel();
}
document.getElementById("exchangeButton").onclick = function (e) {
  showExchagePanel();
}

// End of the clicks events.

function showHeaderPanel() {
  $("#chart").addClass("hide");
  $("#header-form").addClass("hide");
  $("#header-form").addClass("activate-header-form");
  $("#header-form-title").addClass("card-title xl");
  $("#header-form").addClass("activate-header-form");
  $("#lbl-name-header").addClass("profile-title top-space");
  $("#header-form").addClass("header-form");
  $("#header-form-container").addClass("header-form-container");
  $("#header-title").text("Editing Header");
  $("#input").addClass("input");
  $("#lbl-sub-title").addClass("profile-title");
  $("#sub-title-input").addClass("input")
  $("#lbl-button-title").addClass("profile-title");
  $("#button-input").addClass("input")
  $("#btn-header").addClass("button");
}

function showExchagePanel() {
  $("#header-title").text("Editing Exchange");
  $("#chart").addClass("hide");
  $("#header-form").addClass("hide");
  $("#exchange-form").addClass("header-form-container");
  $("#exchange-form").addClass("activatee-header-form");

}