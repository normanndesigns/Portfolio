var terminal = document.getElementById('terminal'), 
notificationBTN = document.getElementById('notificationBTN'), 
portfolioWrapper = document.getElementById('portfolioWrapper'),
overlay = document.getElementById('overlay'),
backBTN = document.getElementById('backBTN'),
notificationsModule = document.getElementById('notificationsModule'),
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
/*   Functions   */
function onOrOff(show, hide, object){
    if(object.className == show){
        display(object, hide);
    }else if(object.className == hide){
        display(object, show);
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
}


/*   Functions   */

if(notificationsBTN != null){
    notificationsBTN.addEventListener('click', function(){
        onOrOff("notificationsModule flex", "notificationsModule none", notificationsModule);
    });
}

if(backBTN != null){
    backBTN.addEventListener('click', function(){
        window.location.replace = "google.com";
    });
}

if(terminalWrapper != null){
    terminalWrapper.addEventListener('click', function(){
        terminalInfo.focus();
    });
}

if(portfolioWrapper != null){
    portfolioWrapper.addEventListener('click', function(e){
        if (e.target !== e.currentTarget) {
            display(overlay, 'overlay flex');
        }
        e.stopPropagation();
    });
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            display(overlay, 'overlay none');
        }
    };
    overlay.addEventListener('click', function(e){
        if (e.target == e.currentTarget) {
            display(overlay, 'overlay none');
        }
    });
}