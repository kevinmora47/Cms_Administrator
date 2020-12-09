$(document).ready(function () {
  $("#headerButton").click(function () {
    showHeaderButton();

  });
});

function showHeaderButton() {
  $("#chart").addClass("hide");
  $("#header-form").addClass("activate-header-form");
  $("#header-form-title").addClass("card-title xl");
  $("#header-form").addClass("activate-header-form");
  $("#lbl-name-header").addClass("profile-title");
  $("#header-form").addClass("header-form");
  $("#header-form-container").addClass("header-form-container");
  $("#input").addClass("input");
  $("#header-title").text("Editing Header");
  $("#btn-header").addClass("button");
}

function chargeHeader(){
  
}