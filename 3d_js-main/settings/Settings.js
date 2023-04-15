class Settings {
    constructor(figure, graph_3D) {
        let settings = document.querySelector('.settings');

        let figureColorH1 = document.createElement('h1');
        figureColorH1.innerHTML = "Фигура";
        figureColorH1.classList.add('colorH1');
        let figureColor = document.createElement("input");
        figureColor.setAttribute('type', 'color');
        figureColor.classList.add('inputColor');
        figureColor.value = "#d6ecf6";
        let figureColorDiv = document.createElement('div');
        figureColorDiv.classList.add('divContainer');
        figureColorDiv.appendChild(figureColorH1);
        figureColorDiv.appendChild(figureColor);
        settings.appendChild(figureColorDiv);

        let pointsColorH1 = document.createElement('h1');
        pointsColorH1.innerHTML = "Точки";
        pointsColorH1.classList.add('colorH1');
        let pointsColor = document.createElement("input");
        pointsColor.setAttribute('type', 'color');
        pointsColor.classList.add('inputColor');
        pointsColor.value = "#d6ecf6";
        let pointsColorDiv = document.createElement('div');
        pointsColorDiv.classList.add('divContainer');
        pointsColorDiv.appendChild(pointsColorH1);
        pointsColorDiv.appendChild(pointsColor);
        settings.appendChild(pointsColorDiv);

        let edgesColorH1 = document.createElement('h1');
        edgesColorH1.innerHTML = "Грани";
        edgesColorH1.classList.add('colorH1');
        let edgesColor = document.createElement("input");
        edgesColor.setAttribute('type', 'color');
        edgesColor.classList.add('inputColor');
        let edgesColorDiv = document.createElement('div');
        edgesColorDiv.classList.add('divContainer');
        edgesColorDiv.appendChild(edgesColorH1);
        edgesColorDiv.appendChild(edgesColor);
        settings.appendChild(edgesColorDiv);

        let button = document.createElement("button");
        button.classList.add("button-53");
        settings.appendChild(button);

        button.addEventListener("click", function () {
            if (figureColor.value) {
                figure.figureColor = figureColor.value;
            }
            if (pointsColor.value) {
                figure.pointsColor = pointsColor.value;
            }
            if (edgesColor.value) {
                figure.edgesColors = edgesColor.value;
            }
            graph_3D.renderScene();
        });
    }
}
