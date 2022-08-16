// constants

const URL = 'https://cors-anywhere.herokuapp.com/https://openweathermap.org/data/2.5/weather?q=';
const API_KEY = '900b111bf759049f45cf0fa4740e0d24';



const $main = $('main');
const $form = $('form');
const $input = $('input[type="text"]');
// event listeners
$form.on('submit', handleSubmit);

// functions
handleSubmit();

function handleSubmit(event) {
    event && event.preventDefault(''); 

    const city = $input.val('');
    
    // immediately exit the function if no title provided
    
    const promise = $.ajax(`${URL}${city}&appid=${API_KEY}`);
    
    
    
    promise.then(    
        function(data) {
            // success callback
            console.log('Data: ', data);
            render(data);
        }, 
        function(error) {
            // failure callback
            console.log('Error: ', error);
        }
        );
    }
    
    // test 
    
function render(weatherData) { // render means the process of visualizing data
    $main.html(`
        <h3>"City:${weatherData.city}" <h3>
        <p>"Temperature: ${weatherData.temperature}" <p>
        <p>"Feels like: ${weatherData.feelsLike}" <p>
        <p>"Weather: ${weatherData.weather}" <p>
    `)
}    

