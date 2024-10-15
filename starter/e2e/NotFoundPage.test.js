Feature('Not Found Page');

Scenario('showing not found page when visit unknown page',  () => {
    const I = actor();

    I.amOnPage('/#/it-should-not-found');

    I.see('Page Not Found (404)');
});
