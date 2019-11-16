// remove inactive members, normalize the email addresses and finally send email with a side-effect 
const sailors = [{
        name: 'yi hong',
        active: true,
        email: 'yh@yhproductions.io',
    },
    {
        name: 'alex',
        active: true,
        email: '',
    }, {
        name: 'nathan',
        active: false,
        email: '',
    },
];


// using chaining 
sailors
    .filter(member => member.active)
    .map(member => member.email || `${member.name}@club.com`)
    .forEach(sailor => sendEmail(sailor))