function Poem({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}) {
    this.year = yearFromInternet
    this.author = authorFromInternet
    this.title = titleFromInternet
    this.text = textFromInternet
    this.makePage = function () {
        console.log(`
            Title: ${this.title}

            ${this.text}

            Author: ${this.title}
            ${this.year}
        `);
    }
}


const fakeData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weöres Sándor",
    titleFromInternet: "Énhasadás",
    textFromInternet: `Leélném velem az életemet
    Nekem írom a dalt, nekem énekelek
    Egy hete csak rám gondolok
    Éjszakánként rólam álmodozok`
}



Poem.prototype.lang = "Hun"
const favouritePoemOfAndras = new Poem(fakeData)
/* favouritePoemOfAndras.favBy = "András Ránki"
*/
favouritePoemOfAndras.makePage()

