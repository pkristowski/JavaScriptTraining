//http://newsapi.org/v2/top-headlines?country=pl&apiKey=d4d7d0c29df84cc3aff659bcbdb64c54
import React from 'react';

export default function ShowNews() {

    var title = "";
    var url = "";
    var text = "";
    var content = [];

    fetch('http://newsapi.org/v2/top-headlines?country=pl&apiKey=d4d7d0c29df84cc3aff659bcbdb64c54') // Call the fetch function passing the url of the API as a parameter
        .then((resp) => resp.json())
        .then(function (data) {

            console.log(data.articles[0].title);
            var length = data.articles.length;
            console.log("długość: ", length);
            // var articleNumber = Math.floor((Math.random() * length) + 1);
                title = data.articles[0].title;
                text = data.articles[0].description;
                url = data.articles[0].url;

                content.push(<div>{title}</div>);

        })
        .catch(function (error) {
            console.log(error);
        });

    console.log("Title: ", content);
    return (
        <div class="article">
            <div className="news">
                {title}
            </div>

        </div>
    );
}
