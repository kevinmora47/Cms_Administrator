chargeHeader();

document.getElementById("btn-header").onclick = function (e) {
    editHeader();
}
async function chargeHeader() {
    let response = await fetch("https://localhost:5001/api/Header");
    let data = await response.json();
    console.log(data);
    document.getElementById("id-header").value = data[0].idHeader;
    document.getElementById("input").value = data[0].legendName;
    document.getElementById("sub-title-input").value = data[0].subLegendName;
    document.getElementById("button-input").value = data[0].plans;
}



async function editHeader() {

    fetch("https://localhost:5001/api/Header", {
        method: "PUT",
        body: JSON.stringify({
            idHeader: document.getElementById("id-header").value,
            companyName:"",
            legendName:document.getElementById("input").value,
            subLegendName:document.getElementById("sub-title-input").value,
            plans:document.getElementById("button-input").value
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
        })
        
        )
        .then(json => console.log(json));
        cleanInputs();
}


function cleanInputs(){
    document.getElementById("id-header").value = '';
    document.getElementById("input").value = '';
    document.getElementById("sub-title-input").value = '';
    document.getElementById("button-input").value ='';
}
