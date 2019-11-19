const photo = {
    photographer: 'Nathan',
    equipment: 'Canon',
    format: 'digital',
};

let {
    photographer,
    ...remaining //quirk, don't put comma, otherwise: rest element must be last error is thrown 
} = photo