class CubeSettings extends Settings {
    constructor(figure, graph_3D) {
        let settings = document.querySelector('.settings');
        settings.innerHTML = ''
        super(figure, graph_3D);
    }
}
