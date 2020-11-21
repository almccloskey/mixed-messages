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
            },
            {
                phrase: 'go ',
                options: [
                    {
                        phrase: 'to sleep. Goodnight!',
                        phrase: 'for a walk!',
                        phrase: 'back to school?'
                    }
                ]
            },
            {
                phrase: 'stop ',
                options: [
                    {
                        phrase: 'listening to you inner demons.',
                        phrase: 'giving yourself such a hard time!',
                        phrase: 'for a second and smell the flowers...'
                    }
                ]
            }
        ]
    },
    { 
        phrase: 'You are ', 
        options: [
            { 
                phrase: 'having ', 
                options: [
                    { 
                        phrase: 'a good day!',
                        phrase: 'a hard time, sorry..',
                        phrase: 'a baby! Go to the hospital!'
                    }
                ]
            },
            {
                phrase: 'a ',
                options: [
                    {
                        phrase: 'great person!',
                        phrase: 'complete wreck.',
                        phrase: 'person. Thats pretty much it.'
                    }
                ]
            },
            {
                phrase: 'doing ',
                options: [
                    {
                        phrase: 'listening to you inner demons.',
                        phrase: 'giving yourself such a hard time!',
                        phrase: 'for a second and smell the flowers...'
                    }
                ]
            }
        ]
    },
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
            },
            {
                phrase: 'go ',
                options: [
                    {
                        phrase: 'to sleep. Goodnight!',
                        phrase: 'for a walk!',
                        phrase: 'back to school?'
                    }
                ]
            },
            {
                phrase: 'stop ',
                options: [
                    {
                        phrase: 'listening to you inner demons.',
                        phrase: 'giving yourself such a hard time!',
                        phrase: 'for a second and smell the flowers...'
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