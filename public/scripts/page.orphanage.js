//create map

const options ={
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
const map = L.map('mapid', options).setView([-15.8114666,-47.9907921], 15);

// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    //create icon

    const icon = L.icon({
        iconUrl:"./public/images/map-marker.svg",
        iconSize: [58,68],
        iconAnchor: [29,68],
        popupAnchor: [170,2]
    })

    //create popuo overlay

    
    //create and add marker
L.marker([-15.8114666,-47.9907921], {icon})
    .addTo(map)
    .bindPopup(popup)
    .openPopup();

    /* imagens */

    function selectImage(event){
        const button = event.currentTarget

        // remover todas as classes .active //
        const buttons = document.querySelectorAll(".images button")
        console.log(buttons)
        buttons.forEach(removeActiveClass)

        function removeActiveClass(button){
            button.classList.remove("active")

        }

        // selecionar a image clicada //
        const image = button.children[0]
        const imageContainer = document.querySelector(".orphanage-details > img")

        // atualizar o container de imagem //
        imageContainer.src = image.src


        // adicionar a classe .active para esse botão //
            button.classList.add('active')

    }