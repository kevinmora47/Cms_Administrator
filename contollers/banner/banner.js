get();
function get() {
    var url = "https://localhost:5001/api/Banner";
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (MyJson) {
        console.log(MyJson);
    });
}

