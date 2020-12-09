// Start of the clicks events.
document.getElementById("headerButton").onclick = function (e) {
  showHeaderButton();
  chargeHeader();
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
      idBanner: document.getElementById("id-banner").value,
      header: document.getElementById("input").value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(
    Swal.fire({
      width: '30%',
      height: '50%',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 2000
    }))
    .then(json => console.log(json));

}