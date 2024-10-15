Feature('Homepage');

Scenario('showing homepage with all musics list',  () => {
    const I = actor();

    I.amOnPage('/');

    I.see('Be Focus and Productive');
    I.see('Not just an ordinary headphones. It\'s designed for meditation.')
    I.see('Choose Your Productive Music Favorite');

    // wait 5 seconds unit musics items appeared
    I.waitForElement('.music-list__item', 5);

    // list of title musics
    I.see('Coverless Book');
    I.see('Lofi Orchestra');
    I.see('For a Dream');
    I.see('Good Night');
});
