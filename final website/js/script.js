//Quotes
let quotes=[

           'How happy is the blameless vestals lot! The world forgetting, by the world forgot. Eternal sunshine of the spotless mind! Each prayr accepted, and each wish resignd. (Alexander Pope)',
           'Your time is limited, so don’t waste it living someone else’s life. Dont be trapped by dogma which is living with the results of other peoples thinking. (Steve Jobs)',
           'The big lesson in life, baby, is never be scared of anyone or anything. (Frank Sinatra)',
           'The unexamined life is not worth living. (Socrates)',
           'My mama always said, life is like a box of chocolates. You never know what youre gonna get. (Forest Gump)',
           'Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. (Buddha)',
           'Life would be tragic if it werent funny. (Stephen Hawking)',
           'When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down happy.  They told me I didn’t understand the assignment, and I told them they didnt understand life. (John Lennon)',
           'Life is short, and it is here to be lived. (Kate Winslet)',
           'As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others. (Audrey Hepburn)',
           'The more man meditates upon good thoughts, the better will be his world and the world at large. (Confucius)',
           'You’re only human. You live once and life is wonderful, so eat the damned red velvet cupcake. (Emma Stone)',
           'The minute that you’re not learning I believe you’re dead. (Jack Nicholson)',
           'The more you praise and celebrate your life, the more there is in life to celebrate. (Oprah Winfrey)',
           'Find people who will make you better. (Michelle Obama)',
           'Be here, now! (Baba Ram Dass)',
           'Treat everyone you meet like God in drag. (Baba Ram Dass)',
           'If a million people see my movie, I hope they see a million different movies. (Quentin Tarantino)',
           'I do not always know what I want, but I do know what I dont want. (Stanley Kubrick)',
           '*** ***** **** ***** ***** **** ** *** **** **** ***** ***** **** (Tyler Durden)',
           'You talking to me?. (Travis Bickle)',
           'Heres Johnny! (Jack Torrence)',
           'The very basic core of a mans living spirit is his passion for adventure. The joy of life comes from our encounters with new experiences, and hence there is no greater joy than to have an endlessly changing horizon, for each day to have a new and different sun. (Christopher McCandless)',
           'Today was a good day. (Ice Cube)',
           'The purpose of our lives is to be happy. (Dalai Lama)'

];



function displayQuote(){
    //create an index of a random number
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);

    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <p>${quotes[index]}</p>
   </div>

    `;
    div.innerHTML=quote;

}
