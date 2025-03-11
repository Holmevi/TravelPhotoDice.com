import { travelPhotos } from "./photodata.js";

/*
// Function to count the motive tags
function countMotiveTags(photos) {
    const tagCount = {};

    photos.forEach(photo => {
        photo.motive_tags.forEach(tag => {
            if (tagCount[tag]) {
                tagCount[tag]++;
            } else {
                tagCount[tag] = 1;
            }
        });
    });

    return tagCount;
}

// Function to sort tags by count in descending order
function sortTagsByCount(tagCounts) {
    return Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
}

const motiveTagCounts = countMotiveTags(travelPhotos);
const sortedTagCounts = sortTagsByCount(motiveTagCounts);

console.log(sortedTagCounts);

// End
*/

let undefinedMotiveTags = travelPhotos.filter(function( element ) {
    return element.motive_tags == undefined;
});
console.log("Detected undefined motive_tags in photodata.js: ", undefinedMotiveTags);

const ratedPhotos = travelPhotos.filter((e) => e.rating > 5);

let lastPhoto = null;
let randomPosition = null;
let selectedPhotos = ratedPhotos;
let filter = 'All';
let filterType = 'Tag';  // Tag, Country, Location

const displayPhoto = document.querySelector('#photo');
displayPhoto.addEventListener('click', photoClick);

    const allButton = document.querySelector('#all-button');
    allButton.addEventListener('click', allClick);

        const allMenu = document.querySelector('#all-menu');

            const countrySelect = document.querySelector('#country-select');
            countrySelect.addEventListener('change', countryChange);

            const lastButton = document.querySelector('#last-button');
            lastButton.addEventListener('click', lastClick);

            const topButton = document.querySelector('#top-button');
            topButton.addEventListener('click', topClick);

    const natureButton = document.querySelector('#nature-button');
    natureButton.addEventListener('click', natureClick);

        const natureMenu = document.querySelector('#nature-menu');

            const coastButton = document.querySelector('#coast-button');
            coastButton.addEventListener('click', coastClick);

            const jungleButton = document.querySelector('#jungle-button');
            jungleButton.addEventListener('click', jungleClick);

            const lakeButton = document.querySelector('#lake-button');
            lakeButton.addEventListener('click', lakeClick);
            
            const waterfallButton = document.querySelector('#waterfall-button');
            waterfallButton.addEventListener('click', waterfallClick);

            const sunsetButton = document.querySelector('#sunset-button');
            sunsetButton.addEventListener('click', sunsetClick);  

            const viewpointButton = document.querySelector('#viewpoint-button');
            viewpointButton.addEventListener('click', viewpointClick);

    const resortButton = document.querySelector('#resort-button');
    resortButton.addEventListener('click', resortClick);

        const resortMenu = document.querySelector('#resort-menu');

            const beachButton = document.querySelector('#beach-button');
            beachButton.addEventListener('click', beachClick);
            
            const poolButton = document.querySelector('#pool-button');
            poolButton.addEventListener('click', poolClick);

            const hotelButton = document.querySelector('#hotel-button');
            hotelButton.addEventListener('click', hotelClick);
            
            const eatButton = document.querySelector('#eat-button');
            eatButton.addEventListener('click', eatClick);

            const drinkButton = document.querySelector('#drink-button');
            drinkButton.addEventListener('click', drinkClick);

            const irishCoffeeButton = document.querySelector('#irish-coffee-button');
            irishCoffeeButton.addEventListener('click', irishCoffeeClick);
            
    const cityButton = document.querySelector('#city-button');
    cityButton.addEventListener('click', cityClick);

        const cityMenu = document.querySelector('#city-menu');

            const cultureButton = document.querySelector('#culture-button');
            cultureButton.addEventListener('click', cultureClick);

            const highriseButton = document.querySelector('#highrise-button');
            highriseButton.addEventListener('click', highriseClick);

            const shoppingButton = document.querySelector('#shopping-button');
            shoppingButton.addEventListener('click', shoppingClick);

            const coffeeButton = document.querySelector('#coffee-button');
            coffeeButton.addEventListener('click', coffeeClick);

            const dessertButton = document.querySelector('#dessert-button');
            dessertButton.addEventListener('click', dessertClick);

            const dinnerButton = document.querySelector('#dinner-button');
            dinnerButton.addEventListener('click', dinnerClick);

    const sponsorButton = document.querySelector('#sponsor-button');
    sponsorButton.addEventListener('click', sponsorClick);

        const sponsorMenu = document.querySelector('#sponsor-menu');

        const mapButton = document.querySelector('#map-button');
        mapButton.addEventListener('click', mapClick);

    const countryButton = document.querySelector('#country-button');
    countryButton.addEventListener('click', countryClick);
    
    const locationButton = document.querySelector('#location-button');
    locationButton.addEventListener('click', locationClick);

    const smallDateField = document.querySelector('#small-date-field');
    smallDateField.addEventListener('click', smallDateClick);

    const bigDateField = document.querySelector('#big-date-field');
    bigDateField.addEventListener('click', bigDateClick);

    const adButton = document.querySelector('#ad-button');
    adButton.addEventListener('click', adClick);

    const adBottomButton = document.querySelector('#ad-bottom-button');
    adBottomButton.addEventListener('click', adBottomClick);

    const mapBottomButton = document.querySelector('#map-bottom-button');
    mapBottomButton.addEventListener('click', mapBottomClick);

    const binguButton = document.querySelector('#bingu');
    binguButton.addEventListener('click', binguClick);

const locationType = document.querySelector('#location-caption');

function disableSubMenus() {
    natureMenu.style="display: none"
    resortMenu.style="display: none"
    cityMenu.style="display: none"
    sponsorMenu.style="display: none"
    mapBottomButton.style="display: none"
    allMenu.style="display: none"
    countrySelect.value=""
}

// Global variabel för att lagra den förladdade bilden
let preloadedPhoto = null;

function photoClick() {
    let selectedPhoto;
    // Om vi redan har en förladdad bild, använd den
    if (preloadedPhoto) {
        selectedPhoto = preloadedPhoto;
        preloadedPhoto = null; // Töm variabeln efter användning
    } else {
        selectedPhoto = generatePhoto();
    }
    showPhoto(selectedPhoto);
    preloadNextPhoto(); // Förladda nästa bild i bakgrunden
}

// Funktion för att förladda nästa bild
function preloadNextPhoto() {
    // Hämta nästa bild enligt samma logik som generatePhoto()
    let nextPhoto = generatePhoto();
    // Skapa ett nytt Image-objekt och sätt dess src för att ladda bilden i bakgrunden
    let preloader = new Image();
    preloader.src = 'images/' + nextPhoto.photo_url;
    // Spara den förladdade bilden globalt så att vi kan använda den vid nästa klick
    preloadedPhoto = nextPhoto;
}

function allClick() {
    preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
    filterType = 'Tag';
    filter = 'All';
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
    disableSubMenus();
    allMenu.style="display: flex";
}

    function countryChange() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Country';
        filter = countrySelect.value;
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function lastClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Last';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function topClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Top';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

function natureClick() {
    preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
    filterType = 'Tag';
    filter = 'Nature';
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
    disableSubMenus();
    natureMenu.style="display: flex";
}

    function coastClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Coast';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function jungleClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Jungle';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function lakeClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Lake';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function waterfallClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Waterfall';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function sunsetClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Sunset';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function viewpointClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Viewpoint';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

function resortClick() {
    preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
    filterType = 'Tag';
    filter = 'Resort';
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
    disableSubMenus()
    resortMenu.style="display: flex";
}

    function beachClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Beach';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function poolClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Pool';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function hotelClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Hotel';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function eatClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Food';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function drinkClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Drink';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function irishCoffeeClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Irish Coffee';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

function cityClick() {
    preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
    filterType = 'Tag';
    filter = 'City';
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
    disableSubMenus()
    cityMenu.style="display: flex";
}

    function cultureClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Culture';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function highriseClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Highrise';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function shoppingClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Shopping';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function coffeeClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Coffee';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function dessertClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Dessert';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function dinnerClick() {
        preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
        filterType = 'Tag';
        filter = 'Dinner';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

function sponsorClick() {
    preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
    filterType = 'Tag';
    filter = 'Ad';
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
    disableSubMenus()
    sponsorMenu.style="display: flex";
    mapBottomButton.style="display: flex";
}

function mapClick() {

}

function countryClick() {
    preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
    disableSubMenus()
    allMenu.style="display: flex";
    filterType = 'Country';
    filter = countryButton.textContent;
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
}

function locationClick() {
    preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
    disableSubMenus()
    allMenu.style="display: flex";
    filterType = 'Location';
    filter = locationButton.textContent;
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
}

function smallDateClick() {
    preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
    filterType = 'Info';
    filter = smallDateField.textContent;
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
}

function bigDateClick() {
    preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
    filterType = 'Info';
    filter = bigDateField.textContent;
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
}

function adClick() {
    preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
    filterType = 'Tag';
    filter = 'Ad';
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
}

function adBottomClick() {
    preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
    filterType = 'Tag';
    filter = 'Ad';
    disableSubMenus()
    sponsorMenu.style="display: flex";
    mapBottomButton.style="display: flex";
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
}

function mapBottomClick() {

}

function binguClick() {
    preloadedPhoto = null; // Återställ förladdad bild vid filterbyte
    filterType = 'Tag';
    filter = 'Bingu';
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
}

function generatePhoto() {
    if(filterType === 'Country') {
        selectedPhotos = ratedPhotos.filter(selected => {
            return selected.country.includes(filter);
        });
    } else if(filterType === 'Location') {
        selectedPhotos = ratedPhotos.filter(selected => {
            return selected.location.includes(filter);
        });
    } else if(filterType === 'Info') {
        selectedPhotos = ratedPhotos.filter(selected => {
            return selected.date.includes(filter);
        });
    } else {
        if(filter === 'All') {
            selectedPhotos = ratedPhotos;
        } else {
            selectedPhotos = ratedPhotos.filter(selected => {
            return selected.motive_tags.includes(filter);
        })};
    };

    while(randomPosition == lastPhoto) {
        let randomLength = selectedPhotos.length;
        randomPosition = Math.floor(Math.random() * randomLength);
    };

    let randomPhoto = selectedPhotos [ randomPosition ];
    lastPhoto = randomPosition;
    return randomPhoto;
};

function showPhoto(photo) {
    // Visa den aktuella bilden
    displayPhoto.src = 'images/' + photo.photo_url;
    countryButton.textContent = photo.country;
    locationType.textContent = photo.location_type + ":";
    locationButton.textContent = photo.location;

    const formattedDate = photo.date.replace(/\//g, '-');
    smallDateField.textContent = formattedDate;
    bigDateField.textContent = formattedDate;

    // Hantera ad-knappens visning och klick
    adButton.onclick = null;
    if (photo.ad && photo.ad !== 'none') {
        adButton.textContent = photo.ad;
        adBottomButton.textContent = photo.ad;
        adButton.style.display = 'inline-block';
        adBottomButton.style.display = 'inline-block';
        mapBottomButton.style.display = 'inline-block';

        mapButton.onclick = () => {
            if (photo.link && photo.link !== 'none') {
                window.open(photo.link, '_blank');
            } else {
                alert("No link available");
            }
        };

        mapBottomButton.onclick = () => {
            if (photo.link && photo.link !== 'none') {
                window.open(photo.link, '_blank');
            } else {
                alert("No link available");
            }
        };
    } else {
        adButton.textContent = 'Exclusive';
        adBottomButton.textContent = 'Exclusive';
        adButton.style.display = 'inline-block';
        adBottomButton.style.display = 'inline-block';
        mapBottomButton.style.display = 'none';

        adButton.onclick = () => {
            adClick(); // Ladda nästa sponsorbild
        };
    }
}

let selectedPhoto = generatePhoto(ratedPhotos);
showPhoto(selectedPhoto);