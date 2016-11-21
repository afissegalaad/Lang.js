# Lang.js

Lang.js is a Javascript library that manages multiple languages on a
single website. The aim is to show how simple it is to deal with
multiple languages on a single website. 

There might be plenty different solutions. I choosed to deal with a
JavaScript object that links tags' ids to their textual contents.

You might imagine a different solution using an external content file,
one for each language or not. Or you can use an external API to
translate on the fly the original content.

* **Easy:** One Javascript object that contains text in all languages.
* **Flexible:** Use as many languages as needed.
* **Clear:** No weird behavior neither fancy usage.

## Examples

```javascript
content = {"title": {"en": "Lang Library","fr": "Librairie Lang"},
	   "subtitle": {"en": "Easy, flexible and clear Javascript library to manage languages on a website",
	                "fr": "Une librairie Javascript simple, souple, et claire pour gérer les langages d'un site web"}}
lang = Lang(content)
document.getDocumentById("button_en").addEventListener("click", 
   function(event){
      lang.switchTo("en")
   }
}
document.getDocumentById("button_fr").addEventListener("click", 
   function(event){
      lang.switchTo("fr")
   }
}
```

This example changes the language of a web site when two buttons are clicked.

## Installation

Include the library in your HTML:

```html
<script src="lang.js" type="text/javascript"></script>
```

## License

Lang.js is made under the terms of the MIT license.
