function handleUpdated(tabId, changeInfo, tabInfo) {
	
	console.log("in handle updated");
	var newUrl = changeInfo.url;
	var currentTab = tabId;
	console.log(newUrl);
	console.log(newUrl && newUrl.includes("https://www.youtube.com/"));
	//setTimeout(function() {
		if (newUrl && newUrl.includes("https://www.youtube.com/")) {
			chrome.tabs.sendMessage(currentTab, "you are on youtube");
		}
	//}, 2000);
}
chrome.tabs.onUpdated.addListener(handleUpdated);

