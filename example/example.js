var lang
window.addEventListener("load", onLoad)
function onLoad (event) {
    document.getElementById("lang-en").addEventListener("click", onClickEn);
    function onClickEn (event){
	lang.switchTo("en")
    }
    document.getElementById("lang-fr").addEventListener("click", onClickFr);
    function onClickFr (event){
	lang.switchTo("fr")
    }
    data = {"title": {"en":"Taxes", "fr":"Impôts"},
	   "for_gross": {"en":"Gross", "fr":"Brut"},
	   "for_rate": {"en":"Rate", "fr":"Taux"},
	   "for_net": {"en":"Net", "fr": "Net"}}
    lang = new Lang(data,"en")
    lang.switchTo("en")
}
