Module.register("MMM-WordOfTheDay",{
	// Default module config.
	defaults: {
		updateInterval: 120000,
		headerText: "Word of the day"
	},
	
	requiresVersion: "2.1.0",

	start: function() {
		var dataNotification = null;
		this.update(this);
		this.scheduleUpdate(-1);
	},
	
	getScripts: function() {
		return [
			'xml2json.min.js',
		]
	},
	
	getStyles: function() {
		return [
			this.file('style.css'), // this file will be loaded straight from the module folder.
		]
	},
	
	update: function(self) {
		self.sendSocketNotification("MMM-WordOfTheDay-DATA_CHANGE", null);
		self.updateDom();
	},
	
	scheduleUpdate: function(delay) {
		var nextLoad = this.config.updateInterval;
		if (typeof delay !== "undefined" && delay >= 0) {
			nextLoad = delay;
		}
		var self = this;
		setInterval(function() {
			self.update(self);
		}, nextLoad);
	},

	socketNotificationReceived: function (notification, payload) {
		var self = this;
		if(notification === "MMM-WordOfTheDay-DATA_CHANGE") {
			var x2js = new X2JS();
			var jsonObj = x2js.xml_str2json( payload );
			this.dataNotification = jsonObj;
			self.updateDom(self.config.animationSpeed);
		}
	},

	// Override dom generator.
	getDom: function() {
		var self = this;
		var wrapper = document.createElement("div");
		var wotd = document.createElement("div");
		wotd.setAttribute('class', 'wotd-title');
		var headerLabel = document.createElement("header");
		headerLabel.setAttribute('class', 'wotd-header module-header');
		headerLabel.innerHTML = "<span>" + this.config.headerText + "</span>";
		var type = document.createElement("span");
		type.setAttribute('class', 'wotd-type');
		var summary = document.createElement("span");
		summary.setAttribute('class', 'wotd-summary');
		var exampls = document.createElement("span");
		exampls.setAttribute('class', 'wotd-examples');
		if(this.dataNotification != null){
			var wordd = this.dataNotification.rss.channel.item[0].title;
			var summ = this.dataNotification.rss.channel.item[0].summary.toString();
			var shortDef = this.dataNotification.rss.channel.item[0].shortdef.toString();
			summ = summ.replace("\n", "<br>");
			var ind0 = summ.indexOf("\\");
			var ind1 = summ.indexOf(":");
			ind1 = summ.indexOf(":", ind1+1);
			var ind2 = summ.indexOf("Example");
			var exampl = summ.slice(ind2);
			exampl = exampl.slice(0,exampl.indexOf('.')+2);
			var typ = summ.slice(ind0, ind1 - 2);
			typ = typ.slice(0, typ.indexOf("<br>") - 1);
			//var def = summ.slice(ind1 + 2, ind2);
			wordd = wordd.charAt(0).toUpperCase() + wordd.slice(1);
			var shortDef = shortDef.charAt(0).toUpperCase() + shortDef.slice(1);
			wotd.innerHTML = wordd;
			summary.innerHTML = shortDef;
			
			if(exampls != ""){
				exampl = exampl.replace("Examples", "Example");
				exampls.innerHTML = exampl;
			}
			type.innerHTML = typ;
		}
		wrapper.appendChild(headerLabel);
		wrapper.appendChild(wotd);
		wrapper.appendChild(type);
		wrapper.appendChild(summary);
		wrapper.appendChild(exampls);
		return wrapper;
	},
});
