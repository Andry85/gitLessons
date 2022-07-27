window.onload = function() {

var ctx = document.getElementById('died').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [
            '14.03', 
            '15.03', 
            '16.03', 
            '17.03', 
            '18.03', 
            '19.03', 
            '20.03', 
            '21.03', 
            '22.03', 
            '23.03',
            '24.03', 
            '25.03', 
            '26.03', 
            '27.03', 
            '28.03',
            '29.03',
            '30.03',
            '31.03'
        ],
        datasets: [{
            label: 'Кількість жертв короновіруса COVID-19',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1,],
            fill: false,
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx1 = document.getElementById('illnes').getContext('2d');
var chart = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [
            '14.03', 
            '15.03', 
            '16.03', 
            '17.03', 
            '18.03', 
            '19.03', 
            '20.03', 
            '21.03', 
            '22.03', 
            '23.03',
            '24.03', 
            '25.03', 
            '26.03', 
            '27.03', 
            '28.03',
            '29.03',
            '30.03',
            '31.03'
        ],
        datasets: [{
            label: 'Кількість заражених короновірусом COVID-19',
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgb(75, 192, 192)',
            data: [3,],
            fill: false,
        }]
    },

    // Configuration options go here
    options: {}
});



}

class Bird {
	
	
	constructor(options) {
		this.wings = options.wings;
		this.lags = options.lags;
		this.color = options.color;
		this._weight = options.weight;
		
	}
	
	countWings() {
		console.log(this.wings);
		console.log(this.lags);
		console.log(this.color);
	}
	
	get weight() {
		return this._weight;
	}
	
	set weight(v) {
		this._weight = v;
	}
}

let dug = new Bird({
	wings: 2,
	lags: 2,
	color: 'white',
	weight: 5
});



class HouseBird extends Bird {
	constructor(options, eating) {
		super(options);
		this.meel = eating.meel;
	}
}

let chicken = new HouseBird({
	wings: 2,
	lags: 2,
	color: 'blue',
}, {
	meel: 'wheat'
});


function run(a) {
	console.log(a+b);
	b=a;
}

run(6);




