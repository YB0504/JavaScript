/**
 * 	Browser Detecting
 * 		
 * 		navigator : 브라우저의 정보
 * 			-> 브라우저의 종류나 버전을 파악하는데 많이 활용
 * 			appName		: 웹 브라우저의 종류
 * 			appCodeName	: 웹 브라우저의 코드 이름
 * 			platform	: 사용자의 시스템 환경 정보
 * 			userAgent	: 웹 브라우저의 종류와 버전 정보
 * 			appVersion	: 웹 브라우저의 버전
 */
var BrowserDetect = { // JSON
	init : function() {
		this.browser = this.searchString(this.dataBrowser)
						|| 'an unknown browser';
		this.version = this.searchVersion(navigator.userAgent)
						|| 'an unknown version';
		this.OS		 = this.searchString(this.dataOS)
						|| 'an unknown OS';
	},
	searchString : function(data) {
		for(var i = 0; i < data.length; i++) {
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch
										|| data[i].identity;
			if(dataString) {
				if(dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			} else if (dataProp)
				return data[i].identity;
			
		}
	},
	searchVersion : function(dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if(index == -1)
			return;
		return parseFloat(dataString.substring(index 
					+ this.versionSearchString.length + 1));
	},
	dataBrowser : [ {
		string : navigator.userAgent,
		subString : "Chrome",
		identity : "Chrome"
	}, {
		string : navigator.vendor,
		subString : "Apple",
		identity : "Safari",
		versionSearch : "Version"
	}, {
		string : window.opera,
		identity : "Opera",
		veresionSearch : "Version"
	}, {
		string : navigator.userAgent,
		subString : "Firefox",
		identity : "Firefox"
	}, {
		string : navigator.userAgent,
		subString : "Netscape",
		identity : "Netscape"
	}, {
		string : navigator.userAgent,
		subString : "MSIE",
		identity : "Explorer",
		versionSearch : "MSIE"
	}, {
		string : navigator.userAgent,
		subString : "Gecko",
		identity : "Mozilla",
		versionSearch : "rv"
	} ],
	dataOS : [ {
		string : navigator.platform,
		subString : "Win",
		identity : "Windows"
	}, {
		string : navigator.platform,
		subString : "Mac",
		identity : "Mac"
	}, {
		string : navigator.platform,
		subString : "Linux",
		identity : "Linux"
	}, {
		string : navigator.userAgent,
		subString : "iPhone",
		identity : "iPhone/iPod"
	} ]
}










