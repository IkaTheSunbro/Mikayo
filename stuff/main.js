function openTab(tabName) {
    // Hide all tab contents
    var tabContents = document.querySelectorAll('.tab');
    tabContents.forEach(function(tab) {
        tab.style.display = 'none'; // Hide all tabs
    });

    // Show the selected tab
    var selectedTab = document.getElementById(tabName + '-tab'); // Adjust to match the IDs
    if (selectedTab) {
        selectedTab.style.display = 'block'; // Show the selected tab
    }
}