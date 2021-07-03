document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            alert("Hello..! This chrome extension is made by Utkarsh, Tamojeet, Manasi and Shubham.");
        });
    }, false);
}, false);