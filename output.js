const duration = 6;
const intersections_number = 4;
const streets_number = 5;
const cars_number = 2;
const bonus_points = 1000;

const streets_descriptions = [
    {
        first_intersection: 2, 
        second_intersection: 0, 
        name: 'rue-de-londres',
        time: 1, 
    },
    {
        first_intersection: 0, 
        second_intersection: 1, 
        name: 'rue-d-amsterdam',
        time: 1, 
    },
    {
        first_intersection: 3, 
        second_intersection: 1, 
        name: 'rue-d-athenes',
        time: 1, 
    },
    {
        first_intersection: 3, 
        second_intersection: 1, 
        name: 'rue-de-rome',
        time: 2, 
    },
    {
        first_intersection: 2, 
        second_intersection: 3, 
        name: 'rue-de-moscou',
        time: 3, 
    },
];

const paths = [
    {
        number: 4,
        streets: ['rue-de-londres', 'rue-d-amsterdam', 'rue-de-moscou', 'rue-de-rome']
    },
    {
        number: 3,
        streets: ['rue-d-athenes', 'rue-de-moscou', 'rue-de-londres']
    }
];

let simple_solution = '';
const separator = '\n';
simple_solution += `${intersections_number}\n`;

for(let i=0; i<intersections_number; i++) {
    const incomming_streets = streets_descriptions.reduce((prev, curr) => {
        return curr?.first_intersection === i || curr?.second_intersection === i ?
            [...prev, curr?.name] :
            prev

    }, []);
    simple_solution += `${i}${separator}${incomming_streets.length}${separator}`;
    
    incomming_streets.forEach(value => {
        simple_solution += `${value}  1${separator}`;
    });
}

const fs = require('fs');
fs.writeFile('result.txt', simple_solution.trim(), () => {});