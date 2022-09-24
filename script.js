/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);

--
let element_list = document.getElementById('list');
let new_li = document.createElement('li');
new_li.innerText = 'Banana';

element_list.appendChild(new_li);
let new_li2 = document.createElement('li');
new_li2.innerText = 'Orange';

element_list.appendChild(new_li2);
let new_li3 = document.createElement('li');
new_li3.innerText = 'Strawberry';

element_list.appendChild(new_li3);

var text;


text = ['The history of London, the capital city of England and the United Kingdom, extends over 2000 years. In that time, it has become one of the world\'s most significant financial and cultural capital cities. It has withstood plague, devastating fire, civil war, aerial bombardment, terrorist attacks, and riots.  The City of London is the historic core of the Greater London metropolis, and is today its primary financial district, though it represents only a small part of the wider metropolis. ', 'Foundations and prehistory  Some recent discoveries indicate probable very early settlements near the Thames in the London area. In 1993, the remains of a Bronze Age bridge were found on the Thames\'s south foreshore, upstream of Vauxhall Bridge.[1] This bridge either crossed the Thames or went to a now lost island in the river. Dendrology dated the timbers to between 1750 BCE and 1285 BCE.[2] In 2001, a further dig found that the timbers were driven vertically into the ground on the south bank of the Thames west of Vauxhall Bridge.[3]  In 2010, the foundations of a large timber structure, dated to between 4800 BCE and 4500 BCE[4] were found, again on the foreshore south of Vauxhall Bridge.[5] The function of the mesolithic structure is not known. All these structures are on the south bank at a natural crossing point where the River Effra flows into the Thames.[6]  Archaeologist Leslie Wallace notes, "Because no LPRIA [Late pre-Roman Iron Age] settlements or significant domestic refuse have been found in London, despite extensive archaeological excavation, arguments for a purely Roman foundation of London are now common and uncontroversial."[7] ', 'In 1475, the Hanseatic League set up its main English trading base (kontor) in London, called Stalhof or Steelyard. It existed until 1853, when the Hanseatic cities of Lübeck, Bremen and Hamburg sold the property to South Eastern Railway.[15] Woollen cloth was shipped undyed and undressed from 14th/15th century London to the nearby shores of the Low Countries, where it was considered indispensable.[16]  During the Reformation, London was the principal early centre of Protestantism in England. Its close commercial connections with the Protestant heartlands in northern continental Europe, large foreign mercantile communities, disproportionately large number of literate inhabitants and role as the centre of the English print trade all contributed to the spread of the new ideas of religious reform. Before the Reformation, more than half of the area of London was the property of monasteries, nunneries and other religious houses.[17] '];

let element_story = document.getElementById('story');
text.push(text[0]);
element_story.innerText = text.shift();


document.getElementById('previous').addEventListener('click', (event) => {
  let element_story2 = document.getElementById('story');
  text.push(text[0]);
  element_story2.innerText = text.shift();

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_story3 = document.getElementById('story');
  text.push(text[0]);
  element_story3.innerText = text.shift();

});
var links;


links = ['https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png', 'https://codeyourfuture.io/wp-content/uploads/2020/08/Logo-BBC.png', 'https://codeyourfuture.io/wp-content/uploads/2020/08/Logo-Capgemini.png'];

links.push(links[0]);
let element_image = document.getElementById('image');
element_image.setAttribute("src", links.shift());


document.getElementById('next').addEventListener('click', (event) => {
  links.push(links[0]);
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", links.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  links.unshift(links[0]);
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", links.shift());

});
