# PolarOS-UI2
How to add UI2 kit.

## Setup
Add the following code to your header or top.<br>
`<link rel="stylesheet" href="css/style.css">`<br>
`<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,600,700' rel='stylesheet' type='text/css'> `

Add the following code to the bottom.<br>
`<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>`<br>
`<script src='https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.0/tilt.jquery.min.js'></script>`<br>
`<script  src="js/index.js"></script>`

```html
<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>PolarOS UI2 Kit</title>
  <link rel="stylesheet" href="https://cdn.rawgit.com/PolarComputer/PolarOS-UI2/f6679530/UI2.min.css">
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,600,700' rel='stylesheet' type='text/css'>
</head>

<body>
  <h1>Example Page</h1>
</body>
  
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.0/tilt.jquery.min.js'></script>
<script  src="https://cdn.rawgit.com/PolarComputer/PolarOS-UI2/ca9c3ce1/UI2.min.js"></script>
  
</html>
```

## CDN <br>
If you don't want to download the files for use on your servers, you can just use our CDN hosted by rawgit. Keep in mind, if you do this your jquery maynot be built to run on on the newest verison we have.
`https://cdn.rawgit.com/PolarComputer/PolarOS-UI2/d034ed4a/UI2.min.js` <br>
`https://cdn.rawgit.com/PolarComputer/PolarOS-UI2/f6679530/UI2.min.css` <br>

## UI Components
bla bla
 - Buttons
 - Input Text
 - Radio Box
 - Select Box
 - Dropdown Selector
 - Text Tags
 - Accordion
 - Submit Form
 - Cards
 - Grid
 
 ## Buttons
 Just make a standard html button and it will be set to the defualt white button. There are other options for button colors and you can even make custom colors. The following colors can be used by defualt. primary, secondary, blue, white, grey, orange and red.<br>
 ![Alt text](images/buttons-UI2.png?raw=true "PolarOS UI2 Kit - Buttons")
 ``` html 
<button>Main Button</button>
<button id=blue>Secondary Button</button>
<button id=grey>Grey Button</button>
<button id=red>Red Button</button>
<button id=orange>Orange Button</button>
```

## Custom Buttons
To make a custom button you can make make your css id and add it to your own css file. Then you can add a custom button with that id. We recommend not to customize anything else about the button to ensure it stays consistant.
```` css
#custom-button {
   background-color: #148ff5; /* Button Color */
   color: #ffffff; /* Text Color */
}
````

```` html
<button id=custom-button>Custom Button</button>
````

## Text Input
Text Inputs are very simple and do not require any changes to your code. These will be generated as long as your css and javascipt is sourced in the proper order, see setup above. The text input is an element to collect user input that is a single-line input. You should use them where you need to collet data from a user that only takes a single-line value. This type of input is great for emails, URL's, search terms, names, and textual information (Mozilla). To set the text of the input box that appears, above the input when its active and inside it when it has yet to be filled in, add an attribute called placeholder to your input (see below). Make sure quotes are around the string if it contains multiple words. Try to keep this string short and to the point. Set the place holder as what information you desire to collect. (For example First Name, Email, Personal Website).<br>
 ![Alt text](images/input-UI2.gif?raw=true "PolarOS UI2 Kit - Text Input")
 
 ````html
<input type="text" placeholder="First Name">
````

## Radio Boxes
A radio button is great for when you want to get one selction from the user. The radio button does only allow one selction, if you want the user to be able select more than one option try select boxes instead. It's called a radio box because it work just like the buttons on an old-fasion radio, you push one down and all the other come back up (Mozilla). To make a input into a radio box set the type attribute equal to radio, like `type="radio"`. To set the label text next to the radio box add the attribute placeholder inside the input element, ex. ` placeholder="Text Label"`. To link all the radio box togeather, so only one in the group can be selected at a time, asd the attribute name and set all the input boxes you want to link with the same name. Then add a custom `value` attribution to each of the inputs in the group. In your javascript you can use the value attribute to get the selected radio box. To disable a radio box, so it can't be selected but is still visble add the attribute `disable` to the input.

```` html
<input type="radio"
````
