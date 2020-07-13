fetch("https://picsum.photos/v2/list?page=2&limit=100")
    .then((resp) => resp.json())
    .then(function (data) {
        for (let index = 0; index < data.length; index++) {
            console.log(data[index].author);

        }
        var input = document.getElementById("input");
        document.getElementById("input").addEventListener('click', function () {
            document.getElementById("picture").innerHTML = "";
            var output = document.getElementById('output');
            output.value = Object.values(data[input.value]);
            var elem = document.createElement("img");
            elem.setAttribute("src", data[input.value].download_url);
            elem.setAttribute("height", "768");
            elem.setAttribute("width", "1024");
            document.getElementById("picture").append(elem);
        });

        // console.log(data);
    });
