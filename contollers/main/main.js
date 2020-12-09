// Start of the clicks events.
document.getElementById("headerButton").onclick = function (e) {
  showHeaderButton();
  chargeHeader();
  console.log(chargeHeader());
}

document.getElementById("btn-header").onclick = function (e) {
  editHeader();
}


// End of the clicks events.

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

async function chargeHeader() {
  let response = await fetch("https://localhost:5001/api/Banner");
  let data = await response.json();
  document.getElementById("input").value = data[0].header;
  document.getElementById("id-banner").value = data[0].idBanner;
}

async function editHeader() {

  fetch("https://localhost:5001/api/Banner", {
    method: "PUT",
    body: JSON.stringify({
      idBanner:document.getElementById("id-banner").value,
      header: document.getElementById("input").value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json())
    .then(json => console.log(json));

}