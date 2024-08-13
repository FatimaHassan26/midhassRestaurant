import JollofRice from './jollof-rice-recipe-23.jpg'

export function createBox(title, imageSrc, items, prices){
    const Box = document.createElement('div');
    Box.classList.add('box');
    const riceImg = document.createElement('div');
    const Img = new Image();
    Img.src = imageSrc;
    Img.classList.add('menu-img')
    riceImg.append(Img)

    const priceElement = document.createElement('div');
    const Title = document.createElement('h3');
    Title.innerHTML= title;

    const PriceList= document.createElement('div');
    PriceList.classList.add('Lists');

    const Trays = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      Trays.appendChild(li);
    });
    
    const Prices = document.createElement('ul');
    prices.forEach(price => {
        const li = document.createElement('li');
        li.textContent = price;
        Prices.appendChild(li);
      });
    PriceList.append(Trays, Prices);

    priceElement.append(Title, PriceList);

    Box.append(riceImg, priceElement);
    return Box;
    
}


export default function createMenu(){
    const element = document.createElement('div');
    element.classList.add('menu-page');

    const items = ['Quarter Tray', 'Small Tray', 'Medium Tray', 'Large Tray', 'Small Cooler', 'Large Cooler'];

    const hero =document.createElement('div');
    hero.classList.add('hero');
    

    const heroTitle = document.createElement('div');
    heroTitle.classList.add('hero-content');
    heroTitle.innerHTML= 'Menu'

    hero.appendChild(heroTitle)
    //RICE
    const riceSection =  document.createElement('div');
    riceSection.classList.add('sub-section');
    
    //Rice subsection
    const riceHeader = document.createElement('h1');
    riceHeader.innerHTML= 'RICE'

    const riceBoxes = document.createElement('div');
    riceBoxes.classList.add('rice-boxes');

    //Jollof
    const jollofRice = createBox('Jollof Rice', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'] );

    //Friedice
    const friedRice = createBox('Fried Rice', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'] );

    //CoconutRice
    const coconutRice = createBox('Coconut Rice', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'] )

    //WhiteRice
    const whiteRice = createBox('White Rice', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'] )

    //riceboxes append
    riceBoxes.append(jollofRice, friedRice, coconutRice, whiteRice);

    //rice section append
    riceSection.append(riceHeader, riceBoxes);

    
    //VEGETABLE
    const vegetableSection =  document.createElement('div');
    vegetableSection.classList.add('sub-section');
    //TITLE
    const vegHeader = document.createElement('h1');
    vegHeader.innerHTML= 'VEGETABLES'

    const vegBoxes = document.createElement('div');
    vegBoxes.classList.add('veg-boxes');

    //Eforiro
    const eforiro = createBox('Efo Riro', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'])

    //Efo Egusi
    const efoEgusi = createBox('Efo Egusi', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'])

    //Sauteed Spinach
    const sauteedSpinach = createBox('Sauteed Spinach', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'])

    vegBoxes.append(eforiro, efoEgusi, sauteedSpinach);
    vegetableSection.append(vegHeader, vegBoxes)


    //SOUPS AND STEWS
    const soupsandstewsSection =  document.createElement('div');
    soupsandstewsSection.classList.add('sub-section');
    //TITLE
    const soupsandstewsHeader = document.createElement('h1');
    soupsandstewsHeader.innerHTML= 'SOUPS AND STEWS'
    const soupsBoxes = document.createElement('div');
    soupsBoxes.classList.add('veg-boxes');
  //Eforiro
    const obe = createBox('Efo Riro', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'])

    //Efo Egusi
    const Egusi = createBox('Efo Egusi', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'])

    //Sauteed Spinach
    const Spinach = createBox('Sauteed Spinach', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'])

    soupsBoxes.append(obe, Egusi, Spinach);


    soupsandstewsSection.append(soupsandstewsHeader,soupsBoxes);

    //SWALLOWS
    const swallowsSection =  document.createElement('div');
    swallowsSection.classList.add('sub-section');
    //TITLE
    const swallowsHeader = document.createElement('h1');
    swallowsHeader.innerHTML= 'SWALLOWS'

    const swallowBoxes = document.createElement('div');
    swallowBoxes.classList.add('rice-boxes');
    //Jollof
    const eba = createBox('Eba', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'] );

    //Friedice
    const amala = createBox('Amala', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'] );

    //CoconutRice
    const poundo = createBox('Poundo', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'] )

    //WhiteRice
    const oatfufu = createBox('Oat Fufu', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'] )

    //riceboxes append
    swallowBoxes.append(eba, amala, poundo, oatfufu);

    swallowsSection.append(swallowsHeader, swallowBoxes);


    
    //SIDES
    const sidesSection =  document.createElement('div');
    sidesSection.classList.add('sub-section');
    //TITLE
    const sidesHeader = document.createElement('h1');
    sidesHeader.innerHTML= 'SIDES'

    const sidesBoxes = document.createElement('div');
    sidesBoxes.classList.add('rice-boxes');
    //Jollof
    const seba = createBox('Eba', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'] );

    //Friedice
    const samala = createBox('Amala', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'] );

    //CoconutRice
    const spoundo = createBox('Poundo', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'] )

    //WhiteRice
    const soatfufu = createBox('Oat Fufu', JollofRice, items, ['$15', '$25', '$40', '$60', '$80', '$160'] )

    //riceboxes append
    sidesBoxes.append(seba, samala, spoundo, soatfufu);

    sidesSection.append(sidesHeader, sidesBoxes);




    element.append(hero, riceSection, vegetableSection, soupsandstewsSection, swallowsSection, sidesSection)
    return element;
}
