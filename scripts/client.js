import Person from './Person';
import $ from 'jquery';

$(document).ready(init);

function init() {
 console.log('Totes READY!!!');
}

const instructor = new Person('Myron', 'Schippers', 37);
console.log(instructor);
