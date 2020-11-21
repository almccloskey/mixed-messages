function randomIndex (arr) {
    let index = Math.floor(Math.random() * (arr.length - 1));
    return index
}

const firstPhrase = ['You should ', 'You are ', 'Your life '];

// const shouldPhrase = ['trust ', 'go ', 'stop '];
//     const trustPhrase = ['no one.', 'yourself!', 'the wind...'];
//     const goPhrase = ['to sleep. Goodnight!', 'for a walk!', 'back to school?'];
//     const stopPhrase = ['listening to you inner demons.', 'giving yourself such a hard time!', 'for a second and smell the flowers...'];

// const arePhrase = ['having ', 'a ', 'doing ']
//     const havingPhrase = ['a good day.', 'a terrible time right now, sorry!', 'a baby. Quick, call 911!']
//     const 

const options = [
    { 
        phrase: 'You should ', 
        options: [
            { 
                phrase: 'trust ', 
                options: [
                    { 
                        phrase: 'no one.',
                        phrase: 'yourself!',
                        phrase: 'the wind...'
                    }
                ]
            }  
        ]
    }
]

let message = generateMessage(options) 

function generateMessage (arr) {
    let chosen = arr[randomIndex(arr)],
        message = chosen.phrase;
    if(chosen.options) {
        message += generateMessage(chosen.options);
    }

    return message;
}

console.log(message);