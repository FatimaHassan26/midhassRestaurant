export default function createContact() {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-page');

    const foodSlideshow = document.createElement('div');
    foodSlideshow.classList.add('contact-section');
    foodSlideshow.innerHTML='Food SlideShow'

    const operationHours = document.createElement('div');
    operationHours.classList.add('contact-section', 'operation-hours');

    const orTitle = document.createElement('h1');
    orTitle.textContent='Hours of Operation';

    const orContent= document.createElement('p');
    orContent.textContent = "Thursday to Sunday\nWe only Offer Pickup.\nCall/Text 281-902-2535 to place your order.";

    orContent.style.whiteSpace = "pre-line";
    const map = document.createElement('div');
    map.classList.add('contact-section', 'map');
    map.innerHTML = 'ADD MAP'
    operationHours.append(orTitle, orContent)

    contactPage.append(foodSlideshow, operationHours, map);
    return contactPage;
}