const getGeoCode = require('./utils/geocode');
const getWeather = require('./utils/weather');

const sInputLocation = process.argv[2];

const getWeatherForLocation = (sLocation) => {

    getGeoCode(sLocation, (error, {sLatitude, sLongitude, sLocationFound} ) => {

        getWeather(sLatitude, sLongitude, (error, {currently}) => {

            console.log('Weather for: ' + sLocationFound);
            console.log(currently);
        })

    })
}

getWeatherForLocation(sInputLocation);
