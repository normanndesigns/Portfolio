var terminal = document.getElementById('terminal');

window.addEventListener('load', function() {
    SpatialNavigation.init();
    SpatialNavigation.add({
        selector: 'a, .navigate'
    });
    SpatialNavigation.makeFocusable();
    SpatialNavigation.focus();
});

function show(object){
    object.className = "flex navigate";
}
function hide(object){
    object.className = "none";
}

function search(){
    var sidepages = ['portfolio', 'cv', 'facebook', 'linkedin', 'instagram', 'contact', 'help'];
    for(i = 0; i < sidepages.length; i++){
        hide(document.getElementById(sidepages[i]));
    }
    var terminalInput = document.getElementById('terminalInfo').value;
    terminalInput = terminalInput.toLowerCase();
    if(terminalInput !== ""){
        for(i = 0; i < sidepages.length; i++){
            if(sidepages[i].startsWith(terminalInput)){
                show(document.getElementById(sidepages[i]));
                document.getElementById(sidepages[i]).tabIndex = i;
            } 
        }
    }
};
