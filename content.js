// content.js

// This function will be called whenever a problem is successfully submitted
function handleProblemSubmission(url) {
  // You can perform any actions here, like sending data to the background script
  chrome.runtime.sendMessage({ event: "problemSubmitted",problemUrl:url });
}

// Listen for the form submission event
// document.addEventListener("click", function (event) {

//   const target = event.target;
//   if(target.getAttribute("data-e2e-locator")==="console-submit-button"){
//   // Check if the form is the problem submission form
// //   if (target.id === "problem-submission-form") {
//     // Assuming there's a way to determine successful submission
//     // For example, if there's a success message displayed on the page
//     // if () {

//     // }
// //   }
//   }
  

// });
// setTimeout(()=>{
//     handleProblemSubmission('https://leetcode.com/problems/set-matrix-zeroes/');
// },3000)

async function handleNewNode(node) {
    // Check if the added node matches your criteria (you can modify this check)
    if (node && node.tagName === 'DIV' && node.classList.contains('group')) {
      console.log("THis is group")
      // Interact with the new node
        if(node.firstChild.firstChild.firstChild.firstChild.textContent==="Accepted"){
            // handleProblemSubmission(document.URL.split('/').slice(0,-2).join('/')+'/')
            const url = `http://localhost:3000?uri=${document.URL.split('/').slice(0,-2).join('/')+'/'}`;
            const response = await fetch(url);
            chrome.runtime.sendMessage({event:"problemSubmitted",name:url.split('/')[-2]});
        }
      
      // Example: Click the new node
    //   node.click();
    }
}

const observer = new MutationObserver(function (mutationsList) {
    for (const mutation of mutationsList) {
      for (const addedNode of mutation.addedNodes) {
        handleNewNode(addedNode);
      }
    }
  });
  
  // Start observing the DOM
  observer.observe(document.body, { childList: true, subtree: true });