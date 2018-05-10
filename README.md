# PolarOS Helium-UI2 (He2)
Offical Name: Helium-UI2<br>
Unoffical Name: Helium Kit<br>
Shortcut Name: He2<br>
PolarOS Helium-UI2 Kit is a universal element kit for PolarOS and PolarOS sites. The best part is anyone is free to use it. All you have is credit Polar Computers Inc. in your card and follow the implementation instructions below.
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
  <link rel="stylesheet" href="https://cdn.rawgit.com/PolarComputer/Helium-UI2/baba9fcf/UI2.min.css">
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,600,700' rel='stylesheet' type='text/css'>
</head>

<body>
  <h1>Example Page</h1>
</body>
  
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.0/tilt.jquery.min.js'></script>
<script  src="https://cdn.rawgit.com/PolarComputer/Helium-UI2/1e3f73d4/UI2.min.js"></script>
  
</html>
```

## CDN <br>
If you don't want to download the files for use on your servers, you can just use our CDN hosted by rawgit. Keep in mind, if you do this your jquery maynot be built to run on on the newest verison we have.
#### Version 1.0.1
Note this version is missing charts.<br>
`https://cdn.rawgit.com/PolarComputer/Helium-UI2/1e3f73d4/UI2.min.js` <br>
`https://cdn.rawgit.com/PolarComputer/Helium-UI2/baba9fcf/UI2.min.css`<br>

#### Version 1
Note this version is missing charts.<br>
`https://cdn.rawgit.com/PolarComputer/Helium-UI2/1e3f73d4/UI2.min.js` <br>
`https://cdn.rawgit.com/PolarComputer/Helium-UI2/1e3f73d4/UI2.min.css` <br>

## UI Components
There are alot of elements that can be used inside Helium Kit and were adding more soon. Here is list of most of the elements most all of them should intigrate with your html no prombelm, because our javascript will place the extra elements it needs around it. ( We are adding more soon )
 - Buttons
 - Input Text
 - Radio Box
 - Check Box
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
A radio button is great for when you want to get one selction from the user. The radio button does only allow one selction, if you want the user to be able select more than one option try select boxes instead. It's called a radio box because it work just like the buttons on an old-fasion radio, you push one down and all the other come back up (Mozilla). To make a input into a radio box set the type attribute equal to radio, like `type="radio"`. To set the label text next to the radio box add the attribute placeholder inside the input element, ex. ` placeholder="Text Label"`. To link all the radio box togeather, so only one in the group can be selected at a time, set the attribute `name` and set all the input boxes you want to link with the same name. Then add a custom `value` attribution to each of the inputs in the group. In your javascript you can use the value attribute to get the selected radio box. To disable a radio box, so it can't be selected but is still visble add the attribute `disable` to the input.<br>
 ![Alt text](images/radio-box-UI2.png?raw=true "PolarOS UI2 Kit - Radio Box Input")

```` html
<input type="radio"
<input type="radio" name="color" value="blue" placeholder="Blue"></input>
<input type="radio" name="color" value="red" placeholder="Red"></input>
<input type="radio" name="color" value="green" placeholder="Green"></input>
<input type="radio" name="color" value="orange" placeholder="Orange" checked></input>
````

### How to get Value
We recommend using jQuery, the syntext is usally better and cleaner than pure javascript and it is all ready need to run Helium kit so you might as well use it. Plus, it is much easier to remember.<br>
#### Pure Javascript
```` javascript
document.querySelector('input[name="color"]:checked').value
````

#### jQuery 
```` javascript
$('input[name="color"]:checked').val();
````

## Check Boxes
A check box is very similar to a radio box with one vast differnce, you can select multiple items. If you would like a user to only be able to select one item please look above at radio boxes. To create a check box add an input with the attribute type equal to checkbox, like `type="checkbox"`. To set the label next to the check box all you have to do is add another attrubute inside the input element called placeholder and set that equal to what you want your label to be, `placeholder="Text Label"`. To link all the check boxes togeather into a group set all the attribute `name` inside the inout element as the same. To disable a check box, so it can't be selected but is still visable add the attribute `disable` to the input.<br>
 ![Alt text](images/check-box-UI2.png?raw=true "PolarOS UI2 Kit - Check Box Input")

```` html
<input type="checkbox" name="extracranial" value="music" placeholder="Music"></input>
<input type="checkbox" name="extracranial" value="sports" placeholder="Sports"></input>
<input type="checkbox" name="extracranial" value="gaming" placeholder="Gaming"></input>
<input type="checkbox" name="extracranial" value="tv" placeholder="Watching TV" checked></input>
````

### How to get Value
We recommend using jQuery, the syntext is usally better and cleaner than pure javascript and it is all ready need to run Helium kit so you might as well use it. Plus, it is much easier to remember. There is no easy way to get the checkboxs in Pure Javascript (if you find a easy way please submit it in the issue).<br>

#### jQuery 
```` javascript
$("input[type=checkbox][name=extracranial]:checked").each(function(){
  console.log( $( this ).attr( "value" ) );
  // do what you want here
});
````

## Dropdown Select
The select element is a great alternive to the radio box. It is great for when you need to get one peice of data from a large selection. To create a dropdown selector make and element called `<select/>` then add and attribute called `placeholder` this will be for the defualt label or what you want answered. Then make another attribute called `name` this will be used to grab information from the selector. To add options to your selector just add element within the `select` element called `<option/>` add the attribute `value` this is for grabbing the selected one from the dropdown.<br>
 ![Alt text](images/dropdown-select-UI2.gif?raw=true "PolarOS UI2 Kit - Dropdown Selector")

```` html
<select placeholder="Your Favorite Car?" name="car"> 
  <option value="mustang">Mustang</option>
  <option value="camaro">Camaro</option>
  <option value="challenger">Challenger</option>
</select>
````

### How to get Value
We recommend using jQuery, the syntext is usally better and cleaner than pure javascript and it is all ready need to run Helium kit so you might as well use it. Plus, it is much easier to remember.<br>
#### Pure Javascript
If you use javascript you need to <b>add an `id` attribute</b> to your select element.
```` javascript
document.getElementById("car").value
````

#### jQuery 
```` javascript
$( "select[name=car] option:selected" ).attr( "value" );
````

## Text Tags
Tags are perfect for just that taging thing. It can also be great to get keywords. When you hover on them they will glow Polar Blue and have a beval so you can see each indival tag sepertly. There is no extra code needed and is just an element so you can grab any inputs from the user. They are block-inline elements so add `<br>` to break to the next line to add the text or tag after the tag below it.<br>
 ![Alt text](images/tag-UI2.gif?raw=true "PolarOS UI2 Kit - Tags")
 
 ```` html
<tag>Fun</tag>
<tag>Summer</tag>
<tag>Swimming</tag>
<tag>Sun</tag>
````

## Accordion
Accordions are useful when you want to toggle between hiding and showing large amount of content (w3Schools). Each section can be expanded by the user. If you want a section to be expanded automaticly just add the class `active` to the `li` of the section. There is no user content you can get from this, because it isn't and input. How ever it fou want you can check to see which one is exapned by looking at the `li` with the class `active`.<br>
 ![Alt text](images/accordion-UI2.png?raw=true "PolarOS UI2 Kit - Accordion")

```` html
<ul class="accordion">
	<li>
		<a>Lorem ipsum</a>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, ipsum, fuga, in, obcaecati magni ullam nobis voluptas fugiat tenetur voluptatum quas tempora maxime rerum neque deserunt suscipit provident cumque et mollitia ex aspernatur porro minus sapiente voluptatibus eos at perferendis repellat odit aliquid harum molestias ratione pariatur adipisci. Aliquid, iure.</p>
	</li>
	<li>
		<a>Repellat Odit Aliquid</a>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, ipsum, fuga, in, obcaecati magni ullam nobis voluptas fugiat tenetur voluptatum quas tempora maxime rerum neque deserunt suscipit provident cumque et mollitia ex aspernatur porro minus sapiente voluptatibus eos at perferendis repellat odit aliquid harum molestias ratione pariatur adipisci. Aliquid, iure.</p>
	</li>
	<li>
		<a>Dolor sit Amet</a>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, ipsum, fuga, in, obcaecati magni ullam nobis voluptas fugiat tenetur voluptatum quas tempora maxime rerum neque deserunt suscipit provident cumque et mollitia ex aspernatur porro minus sapiente voluptatibus eos at perferendis repellat odit aliquid harum molestias ratione pariatur adipisci. Aliquid, iure.</p>
	</li>
</ul>
````

## Cards
Cards are great for displaying repeeated content. We have many different card types and our system will automaticly pick up and do what they need to. If you would like to organise them using our grid system just wrap your card with the element `<grid>` it's not 100% but it works pretty well. Below is an image of all of our different cards with the code below that on how to make each. I you are making a tag card, which just has a heading and a sub-heading, you can set the color. The colors you can choice from are `none, blue, grey, yellow, orange, purple, red` you can set the color by just adding the attirbute `color` inside the card element.<br>
 ![Alt text](images/cards-UI2.png?raw=true "PolarOS UI2 Kit - Cards")
```` html
<card h1="Card Tag" h2="Blue Card Tag | Polar UI Kit" color=none></card>
<card h1="Card Tag" h2="Blue Card Tag | Polar UI Kit"></card>
<card h1="Card Tag" h2="Blue Card Tag | Polar UI Kit" color=grey></card>

<card h1="Card Tag" h2="Blue Card Tag | Polar UI Kit" image="img/link.png"></card>
<card h2="Blue Card Tag | Polar UI Kit" image="img/link.png"></card>
<card image="img/link.png"></card>
````
