document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('randomize').addEventListener('click', function () {
        console.log("Randomize button clicked.");
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {
                    code: `
            var elements = document.getElementsByTagName('*');
            for (var i = 0; i < elements.length; i++) {
              var element = elements[i];
              var fontSizes = ['10px', '12px', '14px', '16px', '18px', '20px'];
              var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
              var randomFontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
              var randomColor = colors[Math.floor(Math.random() * colors.length)];
              element.style.fontSize = randomFontSize;
              element.style.color = randomColor;
              element.style.fontFamily = 'Verdana, Arial, sans-serif';
            }
          `}
            );
        });
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('randomize').addEventListener('click', function () {
//         console.log("Randomize button clicked.");
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             chrome.tabs.executeScript(
//                 tabs[0].id,
//                 {
//                     code: `
//             var elements = document.getElementsByTagName('*');
//             var fontSizes = ['10px', '12px', '14px', '16px', '18px', '20px'];
//             var kenyanColors = ['#000000', '#ff0000', '#008000']; // black, red and green
//             var colorIndex = 0;
//             for (var i = 0; i < elements.length; i++) {
//               var element = elements[i];
//               var randomFontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
//               element.style.fontSize = randomFontSize;
//               element.style.fontFamily = 'Verdana, Arial, sans-serif';
//               element.style.color = kenyanColors[colorIndex];
//               colorIndex = (colorIndex + 1) % kenyanColors.length; // cycle through the colors
//             }
//           `}
//             );
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('randomize').addEventListener('click', function() {
//       console.log("Randomize button clicked.");
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: `
//             var elements = document.getElementsByTagName('*');
//             var fontSizes = ['10px', '12px', '14px', '16px', '18px', '20px'];
//             var kenyaColors = ['#000000', '#ff0000', '#008000']; // black, red and green
//             var eastAfricaColors = ['#4cbf4a', '#ffffff', '#00aeef']; // green, white and blue
//             var allColors = kenyaColors.concat(eastAfricaColors); // combine the two arrays
//             for (var i = 0; i < elements.length; i++) {
//               var element = elements[i];
//               var randomFontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
//               var randomColor = allColors[Math.floor(Math.random() * allColors.length)];
//               element.style.fontSize = randomFontSize;
//               element.style.fontFamily = 'Verdana, Arial, sans-serif';
//               element.style.color = randomColor;
//             }
//           `}
//         );
//       });
//     });
//   });
  
