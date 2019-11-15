const icon = {
    path: 'acme/bar.png'
}

function getIcon(icon) {
    const url = 'htpps://domain.com';
    const path = icon.path || 'otherpath/default.png';
    return `${url}${path}`;
}


// halt an expression when some error happens : use && logical operator 
const userConfig1 = {

}
const userConfig2 = {
    images = []
}
const userConfig3 = {
    images = [
        'one.png',
        'two.png'
    ]
}

const img = userConfig1.images[0] || 'default.png';
//will throw error 

function getFirstImg(userConfig) {
    let img = 'default.png'
    if (userConfig.images) {
        img = userConfig.images[0];
    }
    return img;
}
// problem, if the images array is empty 


function getFirstImg2(userConfig) {
    let img = 'default.png';
    if (userConfig.images) {
        if (userConfig.image.length) {
            img = userConfig.image[0];
        }
    }
    return img;
}
// above problem is a bit messy 


function getIconNeat(userConfig) {
    if (userConfig.images && userConfig.images.length > 0) {
        return userConfig.images[0];
    }

    return 'default.png';
}

function getImg3(userConfig) {
    const img = userConfig.image;
    return img && img.length > 0 ? img[0] : 'default.png';
}

const img4 = userConf.images;
// not undefiend and length is not zero
return img4 && img4.length && img4[0].indexOf('gif') < 0 ? img4[0] : 'default.png'

// although working but it is very unreadable 