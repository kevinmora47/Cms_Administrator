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

     