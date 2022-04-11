class Poem {
    constructor({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}) {
        this.year = yearFromInternet;
        this.author = authorFromInternet;
        this.title = titleFromInternet;
        this.text = textFromInternet;

    }

    makePage() {
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
const {yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet} = fakeData
const favouritePoemOfAndras = new Poem(fakeData)
favouritePoemOfAndras.makePage();


class ForeignPoem extends Poem {
    constructor({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}, translatorFromInternet) {
        super({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet})
        this.translator = translatorFromInternet
    }
    makePage() {
        console.log(`
            Title: ${this.title}

            ${this.text}

            Author: ${this.author}
            Translator: ${this.translator}
            ${this.year}
        `)
    }
}

const poemOfAndrás2 = new ForeignPoem(fakeData, 'Pisti')

poemOfAndrás2.makePage()