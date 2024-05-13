window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav");
  var scrollPosition = window.scrollY;
  var toTop = document.getElementById("scroll-up");

  // Add a class to change navbar background color when scrolled down
  if (scrollPosition > 150) {
    nav.classList.add("scrolled");
    toTop.innerHTML =
      '<a href="/#home" class="fixed bottom-0 right-0 pr-8 pb-8 z-30 transition duration-500" id="scroll-up"><div class="flex justify-center items-center w-fit h-fit bg-zinc-700 rounded-md hover:bg-zinc-600 transition duration-300"><span class="material-symbols-outlined text-3xl text-cyan-500 hover:text-cyan-400 transition duration-300">arrow_upward_alt</span></div></a>';
  } else {
    // Remove the class when scrolled back to the top
    nav.classList.remove("scrolled");
    toTop.innerHTML = "";
  }
});

// var plus1 = document.getElementById("plus-button-one").innerHTML;
// var div1 = document.getElementById("hca-info").innerHTML;
// var plus2 = document.getElementById("plus-button-two").innerHTML;
// var div2 = document.getElementById("labmx").innerHTML;
// var plus3 = document.getElementById("plus-button-three").innerHTML;
// var div3 = document.getElementById("ice").innerHTML;
// var plus4 = document.getElementById("plus-button-four").innerHTML;
// var div4 = document.getElementById("uagrad").innerHTML;

function handleClickOne() {
  var plus = document.getElementById("plus-button-one");
  var div = document.getElementById("hca-info");
  var plus2 = document.getElementById("plus-button-two").innerHTML;
  var div2 = document.getElementById("labmx").innerHTML;
  var plus3 = document.getElementById("plus-button-three").innerHTML;
  var div3 = document.getElementById("ice").innerHTML;
  var plus4 = document.getElementById("plus-button-four").innerHTML;
  var div4 = document.getElementById("uagrad").innerHTML;
  html = `<div class="flex flex-col item-center m-8 transition duration-500 bg-indigo-950 rounded-md p-8"><div class="flex flex-row">`;
  html += `<span class="material-symbols-outlined pr-2 text-purple-400">location_on</span><p class="text-gray-400"> Nashville, TN</p>`;
  html += `</div><div class="flex lg:flex-row md:flex-row sm:flex-col justify-between sm:items-center"><div class="mt-4 w-3/4 pr-4">Revamping system of 200+ .NET microservices and moving logic into Apache Nifi using Java. Solving problems with the current system and implementing solutions while recreating the services on the new platform.</div>`;
  html += `<div class="relative flex justify-center items-center w-32 h-28 bg-white rounded-md p-2"><img alt="HCA logo" src="./assets/hcalogo.png" />`;
  html += `</div></div><div class="flex flex-row text-white my-6"><div class="bg-blue-800 p-2 rounded-full text-gray-300 mr-2">Java</div><div class="bg-blue-800 p-2 rounded-full text-gray-300 mx-2">C#</div><div class="bg-blue-800 p-2 rounded-full text-gray-300 mx-2">SQL</div></div</div>`;

  if (plus2 === "-") {
    div2 = null;
    plus2 = "+";
  }
  // If the content is open, close it
  if (plus.innerHTML === "-") {
    div.innerHTML = null;
    plus.innerHTML = "+";
  } else {
    // If the content is closed, display it
    plus.innerHTML = "-";
    div.innerHTML = html;
  }
}

function handleClickTwo() {
  var plus = document.getElementById("plus-button-two");
  var div = document.getElementById("labmx");
  html = `<div class="flex flex-col item-center m-8 transition duration-500 bg-indigo-950 rounded-md p-8"><div class="flex flex-row">`;
  html += `<span class="material-symbols-outlined pr-2 text-purple-400">location_on</span><p class="text-gray-400"> Tuscaloosa, AL</p>`;
  html += `</div><div class="flex lg:flex-row md:flex-row sm:flex-col justify-between sm:items-center"><div class="mt-4 w-3/4 pr-4">Administered MIS program technology and assisted Capstone teams with internal application hosting. Worked with teams to troubleshoot and resolve hardware/software issues.</div>`;
  html += `<div class="relative flex justify-center items-center w-32 h-28 bg-white rounded-md p-2"><img alt="UA logo" src="./assets/ualogo.png" />`;
  html += `</div></div><div class="flex flex-row text-white my-6"><div class="bg-blue-800 p-2 rounded-full text-gray-300 mr-2">Networking</div><div class="bg-blue-800 p-2 rounded-full text-gray-300 mx-2">Powershell</div><div class="bg-blue-800 p-2 rounded-full text-gray-300 mx-2">Linux</div><div class="bg-blue-800 p-2 rounded-full text-gray-300 mx-2">Nginx</div></div</div>`;

  // If the content is open, close it
  if (plus.innerHTML === "-") {
    div.innerHTML = null;
    plus.innerHTML = "+";
  } else {
    // If the content is closed, display it
    plus.innerHTML = "-";
    div.innerHTML = html;
  }
}

function handleClickThree() {
  var plus = document.getElementById("plus-button-three");
  var div = document.getElementById("ice");
  html = `<div class="flex flex-col item-center m-8 transition duration-500 bg-indigo-950 rounded-md p-8"><div class="flex flex-row">`;
  html += `<span class="material-symbols-outlined pr-2 text-purple-400">location_on</span><p class="text-gray-400"> Corolla, NC</p>`;
  html += `</div><div class="flex lg:flex-row md:flex-row sm:flex-col justify-between sm:items-center"><div class="mt-4 w-3/4 pr-4">Designed and developed a full-stack application to manage deliveries and customer information. Also led successful advertising campaigns resulting in 700% business growth.</div>`;
  html += `<div class="relative flex justify-center items-center w-32 h-28 bg-white rounded-md p-2"><img alt="Corolla Ice Delivery logo" src="./assets/icedelivery.jpg" />`;
  html += `</div></div><div class="flex flex-row text-white my-6"><div class="bg-blue-800 p-2 rounded-full text-gray-300 mr-2">React Native</div><div class="bg-blue-800 p-2 rounded-full text-gray-300 mx-2">NodeJS</div><div class="bg-blue-800 p-2 rounded-full text-gray-300 mx-2">SQL</div><div class="bg-blue-800 p-2 rounded-full text-gray-300 mx-2">React</div></div</div>`;

  // If the content is open, close it
  if (plus.innerHTML === "-") {
    div.innerHTML = null;
    plus.innerHTML = "+";
  } else {
    // If the content is closed, display it
    plus.innerHTML = "-";
    div.innerHTML = html;
  }
}

function handleClickFour() {
  var plus = document.getElementById("plus-button-four");
  var div = document.getElementById("uagrad");
  html = `<div class="flex flex-col item-center m-8 transition duration-500 bg-indigo-950 rounded-md p-8"><div class="flex flex-row">`;
  html += `<span class="material-symbols-outlined pr-2 text-purple-400">location_on</span><p class="text-gray-400"> Tuscaloosa, AL</p>`;
  html += `</div><div class="flex lg:flex-row md:flex-row sm:flex-col justify-between sm:items-center"><div class="mt-4 w-3/4 pr-4">Received both my Bachelor of Science in Commerce and Business Administration and Master of Science in Management Information Systems, graduating with a 3.98 GPA.</div>`;
  html += `<div class="relative flex justify-center items-center w-32 h-28 bg-white rounded-md p-2"><img alt="UA logo" src="./assets/ualogo.png" />`;
  html += `</div></div><div class="flex flex-row text-white my-6"><div class="bg-blue-800 p-2 rounded-full text-gray-300 mr-2">HTML/CSS</div><div class="bg-blue-800 p-2 rounded-full text-gray-300 mx-2">C#</div><div class="bg-blue-800 p-2 rounded-full text-gray-300 mx-2">Python</div><div class="bg-blue-800 p-2 rounded-full text-gray-300 mx-2">SQL</div><div class="bg-blue-800 p-2 rounded-full text-gray-300 mx-2">MongoDB</div></div</div>`;

  // If the content is open, close it
  if (plus.innerHTML === "-") {
    div.innerHTML = null;
    plus.innerHTML = "+";
  } else {
    // If the content is closed, display it
    plus.innerHTML = "-";
    div.innerHTML = html;
  }
}
