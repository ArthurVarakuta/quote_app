let quotes =
    [{
        "id": 1,
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts."
    },
        {
            "id": 2,
            "quote": "We make a living by what we get, but we make a life by what we give."
        },
        {
            "id": 3,
            "quote": "Continuous effort - not strength or intelligence - is the key to unlocking our potential."
        },
        {
            "id": 4,
            "quote": "You have enemies? Good. That means you've stood up for something, sometime in your life."
        },
        {
            "id": 5,
            "quote": "I am easily satisfied with the very best."
        },
        {
            "id": 6,
            "quote": "The price of greatness is responsibility."
        },
        {
            "id": 7,
            "quote": "Success always demands a greater effort."
        },
        {
            "id": 8,
            "quote": "We are all worms. But I believe that I am a glow-worm."
        },
        {
            "id": 9,
            "quote": "If you're going through hell, keep going."
        },
        {
            "id": 10,
            "quote": "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen."
        },
        {
            "id": 11,
            "quote": "To improve is to change; to be perfect is to change often."
        },
        {
            "id": 12,
            "quote": "In war, you can only be killed once, but in politics, many times."
        },
        {
            "id": 13,
            "quote": "History will be kind to me for I intend to write it."
        },
        {
            "id": 14,
            "quote": "The best argument against democracy is a five-minute conversation with the average voter."
        },
        {
            "id": 15,
            "quote": "Politics is the ability to foretell what is going to happen tomorrow, next week, next month, and next year. And to have the ability afterward to explain why it didn't happen."
        },
        {
            "id": 16,
            "quote": "We shall defend our island..."
        },
        {
            "id": 17,
            "quote": "Success consists of going from failure to failure without loss of enthusiasm."
        },
        {
            "id": 18,
            "quote": "Never give in, never give in, never, never, never, never—in nothing, great or small, large or petty—never give in except to convictions of honour and good sense."
        },
        {
            "id": 19,
            "quote": "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty."
        },
        {
            "id": 20,
            "quote": "The greatest lesson in life is to know that even fools are right sometimes."
        },
        {
            "id": 21,
            "quote": "To build may have to be the slow and laborious task of years. To destroy can be the thoughtless act of a single day."
        }];

const slider_wrapper = document.querySelector('.slider_wrapper');
const button_back = document.querySelector('.button-back');
const button_forward = document.querySelector('.button-forward');
const slider_element = document.querySelector('.slider-element');
const slider_body = document.getElementById('slider_body')
let quote_counter = 0;

function quote_counter_check() {
        if (quote_counter >= quotes.length || quote_counter < 1) {
        quote_counter = 0;
    }
}

function get_next_quote(quotes) {
    return quotes[quote_counter++];
}

function get_prev_quote(quotes) {
    return quotes[quote_counter--];
}

function clear_all_quote_elements() {
    slider_body.innerHTML = '';
}

function create_quote(quote) {
    quote_counter_check();
    const quote_card = document.createElement('li');
    quote_card.setAttribute('id', quote.id);

    quote_card.innerHTML = `
       <ul class="slider-body" id="slider_body">
        <li id="${quote_counter}" class="slider-element ">${quote.quote}</li>
    </ul>
    `;
    slider_body.appendChild(quote_card);
}

slider_wrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains("button-forward")) {

        quote_counter_check();
        clear_all_quote_elements();
        create_quote(get_next_quote(quotes));
    }
    if (e.target.classList.contains("button-back")) {

        quote_counter_check();
        clear_all_quote_elements();
        create_quote(get_prev_quote(quotes))
    }
})

