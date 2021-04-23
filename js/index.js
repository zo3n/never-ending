const neTitle = document.getElementById("ne-title");
const neMain = document.getElementById("ne-main");
const neParagraph = document.getElementById("ne-paragraph");


let titleForward = true;
let endWord = "Never Ending "; // you must have space on the end so that next sequences aren't sticked to previous ones
let titleUpdateTime = 64; // ms per letter
let pgUpdateTime = 64; // ms per letter


function UpdateTitle()
{
    
    let currentTitle = neTitle.innerHTML;
    
    if (titleForward)
    {
        
        neTitle.innerHTML += endWord[currentTitle.length];
        
        if (neTitle.innerHTML.length === endWord.length)
        {
            titleForward = false;
        }

    } else {

        if (currentTitle.length > 1)
        {

            neTitle.innerHTML = endWord.substr(0, currentTitle.length - 1);

        } else if (currentTitle.length === 1) {

            neTitle.innerHTML = "";
            titleForward = true;

        }
        

    }

    // Also update tab title
    document.title = neTitle.innerHTML;

}


function UpdateParagraph()
{
    let currentTitle = neParagraph.innerHTML
    let letterIndex = currentTitle.length % (endWord.length - 0);
    let letter = endWord.substring(letterIndex, letterIndex + 1);
    neParagraph.innerHTML += letter;
}


function Boot()
{
    setInterval(UpdateTitle, titleUpdateTime, 0);
    setInterval(UpdateParagraph, pgUpdateTime, 0);
}

Boot();