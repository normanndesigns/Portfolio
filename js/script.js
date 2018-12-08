var terminal = document.getElementById('terminal'), 
notificationBTN = document.getElementById('notificationBTN'), 
notificitaionsModule = document.getElementById('notificitaionsModule'),
terminalWrapper = document.getElementById('terminalWrapper'),
terminalInfo = document.getElementById('terminalInfo');

window.addEventListener('load', function() {
    SpatialNavigation.init();
    SpatialNavigation.add({
        selector: 'a, .navigate'
    });
    SpatialNavigation.makeFocusable();
    SpatialNavigation.focus();
});
notificationBTN.addEventListener('click', function(){
    onOrOff(notificitaionsModule);
});
terminalWrapper.addEventListener('click', function(){
    terminalInfo.focus();
});

function onOrOff(object){
    if(object.className == "notificitaionsModule flex"){
        display(object, "notificitaionsModule none");
    }else if(object.className == "notificitaionsModule none"){
        display(object, "notificitaionsModule flex");
    }
}

function display(object, className){
    object.className = className;
}

function search(){
    var sidepages = ['portfolio', 'cv', 'facebook', 'linkedin', 'instagram', 'contact', 'help'];
    for(i = 0; i < sidepages.length; i++){
        display(document.getElementById(sidepages[i]), "none");
    }
    var terminalInput = document.getElementById('terminalInfo').value;
    terminalInput = terminalInput.toLowerCase();
    if(terminalInput !== ""){
        for(i = 0; i < sidepages.length; i++){
            if(sidepages[i].startsWith(terminalInput)){
                display(document.getElementById(sidepages[i]), "flex navigate");
                document.getElementById(sidepages[i]).tabIndex = i;
            } 
        }
    }
};
