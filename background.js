function handleUpdated(tabId, changeInfo, tabInfo) {
	
	var newUrl = changeInfo.url;
	var currentTab = tabId;
	setTimeout(function() {
		if (newUrl && newUrl.includes("https://www.youtube.com/")) {
		chrome.tabs.sendMessage(currentTab, "you are on youtube");
		}
	}, 2000);
}

chrome.tabs.onUpdated.addListener(handleUpdated);
