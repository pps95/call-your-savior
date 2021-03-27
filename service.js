const saviors = [
    'SUPERMAN',
    'THOR', 
    'ROBIN',
    'IRONMAN',
    'GHOSTRIDER',
    'CAPTAINAMERICA',
    'FLASH',
    'WOLVERINE',
    'BATMAN',
    'HULK',
    'BLADE',
    'PHANTOM', 
    'SPIDERMAN',
    'BLACKWIDOW',
    'HELLBOY',
    'PUNISHER'
];
/* Letters to match against Digits */
// const one = '@.?',
const two = 'ABC';
const three = 'DEF';
const four = 'GHI';
const five = 'JKL';
const six = 'MNO';
const seven = 'PQRS';
const eight = 'TUV';
const nine = 'WXYZ';
// const zero = '0'

const mapper = {
    '2': two.split(''),
    '3': three.split(''),
    '4': four.split(''),
    '5': five.split(''),
    '6': six.split(''),
    '7': seven.split(''),
    '8': eight.split(''),
    '9': nine.split(''),
};

const heros = saviors.map((savior) => savior.split(''));

let code = '';

const recursive = (filtered = heros, position = 0) => {

    if(code[position] == 1 || code[position] == 0){
        return '1 or 0 Not Alloewd';
    }

    if(!code[position]){
        return filtered[0].join('');
    }

    if(filtered.length && mapper[code[position]]){
        return recursive(filtered.filter(item => mapper[code[position]].includes(item[position])), position + 1);
    }else{
        return 'Invalid Code';
    }
}

const search = (message) => {
    code = message;
    return recursive();
}

module.exports = search;


