function randomIndex (arr) {
    let index = Math.floor(Math.random() * (arr.length - 1));
    return index
}

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
        phrase: 'Your life ', 
        options: [
            { 
                phrase: 'is in ', 
                options: [
                    { 
                        phrase: 'the toilet.',
                        phrase: 'a really great way!',
                        phrase: 'one of the weirdest stretches to date.'
                    }
                ]
            },
            {
                phrase: 'will ',
                options: [
                    {
                        phrase: 'not end the way you think.',
                        phrase: 'start to pop off soon!',
                        phrase: 'continually surpise you. Am I right?'
                    }
                ]
            },
            {
                phrase: 'is not ',
                options: [
                    {
                        phrase: 'very long. Live it up!',
                        phrase: 'that bad.',
                        phrase: 'going great!'
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