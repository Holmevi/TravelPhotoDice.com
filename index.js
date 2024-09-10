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

    const natureButton = document.querySelector('#nature-button');
    natureButton.addEventListener('click', natureClick);

        const natureMenu = document.querySelector('#nature-menu');

            const coastButton = document.querySelector('#coast-button');
            coastButton.addEventListener('click', coastClick);

            const jungleButton = document.querySelector('#jungle-button');
            jungleButton.addEventListener('click', jungleClick);

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

            const testButton = document.querySelector('#test-button');
            testButton.addEventListener('click', testClick);

    const countryButton = document.querySelector('#country-button');
    countryButton.addEventListener('click', countryClick);
    
    const locationButton = document.querySelector('#location-button');
    locationButton.addEventListener('click', locationClick);

const locationType = document.querySelector('#location-caption');
const photoDate = document.querySelector('#photo-date');

function disableSubMenus() {
    natureMenu.style="display: none"
    resortMenu.style="display: none"
    cityMenu.style="display: none"
    allMenu.style="display: none"
    countrySelect.value=""
}

function photoClick() {
    let selectedPhoto = generatePhoto();
    showPhoto (selectedPhoto);
    /*
    var me = this;
    console.log(this);
    this.style.webkitAnimation = 'none';
    setTimeout(function() {
        me.style.webkitAnimation = '';
    }, 10);
    */
}

function allClick() {
    filterType = 'Tag';
    filter = 'All';
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
    disableSubMenus();
    allMenu.style="display: flex";
}

    function countryChange() {
        filterType = 'Country';
        filter = countrySelect.value;
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

function natureClick() {
    filterType = 'Tag';
    filter = 'Nature';
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
    disableSubMenus();
    natureMenu.style="display: flex";
}

    function coastClick() {
        filterType = 'Tag';
        filter = 'Coast';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function jungleClick() {
        filterType = 'Tag';
        filter = 'Jungle';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function sunsetClick() {
        filterType = 'Tag';
        filter = 'Sunset';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function viewpointClick() {
        filterType = 'Tag';
        filter = 'Viewpoint';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

function resortClick() {
    filterType = 'Tag';
    filter = 'Resort';
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
    disableSubMenus()
    resortMenu.style="display: flex";
}

    function beachClick() {
        filterType = 'Tag';
        filter = 'Beach';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function poolClick() {
        filterType = 'Tag';
        filter = 'Pool';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function hotelClick() {
        filterType = 'Tag';
        filter = 'Hotel';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function eatClick() {
        filterType = 'Tag';
        filter = 'Food';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function drinkClick() {
        filterType = 'Tag';
        filter = 'Drink';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

function cityClick() {
    filterType = 'Tag';
    filter = 'City';
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
    disableSubMenus()
    cityMenu.style="display: flex";
}

    function cultureClick() {
        filterType = 'Tag';
        filter = 'Culture';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function highriseClick() {
        filterType = 'Tag';
        filter = 'Highrise';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function shoppingClick() {
        filterType = 'Tag';
        filter = 'Shopping';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function coffeeClick() {
        filterType = 'Tag';
        filter = 'Coffee';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

    function testClick() {
        filterType = 'Tag';
        filter = 'Test';
        let selectedPhoto = generatePhoto();
        showPhoto(selectedPhoto);
    }

function countryClick() {
    filterType = 'Country';
    filter = countryButton.textContent;
    let selectedPhoto = generatePhoto();
    showPhoto(selectedPhoto);
}

function locationClick() {
    filterType = 'Location';
    filter = locationButton.textContent;
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
    displayPhoto.src = 'images/' + photo.photo_url;
    countryButton.textContent = photo.country;
    locationType.textContent = photo.location_type + ":";
    locationButton.textContent = photo.location;
    photoDate.textContent = photo.date;
};

let selectedPhoto = generatePhoto(ratedPhotos);
showPhoto(selectedPhoto);