var Lang = function (ids, def){
    this.ids = ids
    this.def = def
}

Lang.prototype.switchTo = function (language) {
    for (var id in this.ids) {
	document.getElementById(id).innerHTML = this.ids[id][language]
    }
}
