//create map
const map = L.map('mapid').setView([-15.8114666, -47.9907921], 15);

// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


let marker;


//create and add marker
map.on('click', function (event) {
    const lat = event.latlng.lat;
    const lgn = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lgn]').value = lgn;


    // remover icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lgn], {
            icon
        })
        .addTo(map)
})


// upload photos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo está vazio. se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value == ""
    newFieldContainer.children[0].value = ""
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove()
}

    //troca do sim e não select yes or no
    function toggleSelect(event){
        // pegar o botao clicar

        //verificar se é sim ou não

        //retirar a classe .active (dos botões)
        document.querySelectorAll('.button-select button')
        .forEach((button) => button.classList.remove('active'))


        // colocar a class .active
        const button = event.currentTarget
        button.classList.add('active')

        // atualizar o input hidden com o valor selecionado
        const input = document.querySelector('[name="open_on_weekends"]')

        input.value = button.dataset.value

        //verificar se Sim ou Não

    }