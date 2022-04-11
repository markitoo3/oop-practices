const fakeData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weöres Sándor",
    titleFromInternet: "Énhasadás",
    textFromInternet: `Leélném velem az életemet
    Nekem írom a dalt, nekem énekelek
    Egy hete csak rám gondolok
    Éjszakánként rólam álmodozok`
}

const pdafi = fakeData.authorFromInternet
const pdyfi = fakeData.yearFromInternet


/* const {yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet} = fakeData

console.log(yearFromInternet, authorFromInternet); */

function funWithPoemData({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}) {
    console.log(yearFromInternet, authorFromInternet)
}

//funWithPoemData(fakeData)

const arr = ["hi", "hello", "hey", function(){
    console.log("ciao");
}, "hali"]

const firstItem = arr[0]
const secondItem = arr[1]

const [firstItemX, secondItemX, ...elseX] = arr

console.log(elseX);

const [,,, ourFun] = arr

ourFun()