import JollofRice from './jollof-rice-recipe-23.jpg'

export default function createHome(){
    const element = document.createElement('div');
    element.classList.add('homepage');

    const section1= document.createElement('div');
    section1.classList.add('section1');

    const sectionHeader = document.createElement('h1');
    sectionHeader.innerHTML= 'Welcome to Midhass Catering Services';

    const sectionContent = document.createElement('p');
    sectionContent.innerHTML= `
    Midhass Catering Services offers convenient and delicious home-cooked meals, specializing in authentic Nigerian cuisine.
    Available for pickup, we prepare a variety of traditional Nigerian dishes, ensuring a taste of home in every bite.
    Whether you're craving Jollof rice, Egusi soup, or other classic Nigerian meals, Midhass provides a reliable and tasty solution for your dining needs.
    Enjoy the comfort of homemade Nigerian food without the hassle of cooking!
`;
    section1.append(sectionHeader, sectionContent);

//Section 2
    const section2 = document.createElement('div');
    section2.classList.add('section2');

    const sec2element1= document.createElement('div');
    sec2element1.classList.add('sec2element1');

    const sec2element2= document.createElement('div');
    sec2element2.classList.add('sec2element2');

    const section2Header = document.createElement('h2');
    section2Header.innerHTML= 'Signature Dish'

    const section2Content = document.createElement('p');
    section2Content.innerHTML= `Nigerian Jollof Rice is a popular West African dish known for its rich, flavorful taste and vibrant red color. It is made primarily from rice cooked in a tomato-based sauce, which includes ingredients like tomatoes, onions, bell peppers, and a mix of spices such as thyme, bay leaves, and chili peppers. The dish often incorporates additional flavor from stock or broth, and it can be enhanced with vegetables like carrots and peas. 
    Jollof rice is usually served with fried plantains, grilled or fried chicken, fish, or beef. 
    It is a beloved dish in Nigeria and across West Africa, often prepared for special occasions and gatherings.`

    const JRImg = new Image();
    JRImg.src = JollofRice;
    JRImg.classList.add('main-img')
    sec2element1.append(section2Header, section2Content);
    sec2element2.appendChild(JRImg);

    section2.append(sec2element1, sec2element2);

    //Section 3
    const section3 = document.createElement('div');
    section3.classList.add('section3');

    const sec3content= document.createElement('div');
    sec3content.classList.add('sec3content');
    sec3content.innerHTML= 'Order Here';

    section3.append(sec3content);

    element.append(section1, section2, section3);

    return element
}