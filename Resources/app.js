var win  = Ti.UI.createWindow({
	navBarHidden:true,
    exitOnClose:true
});

// Facebook style menu window
var leftMenu  = Ti.UI.createView({
    backgroundColor:"#404040",
    top:   0,
    left:  0,
    width: 200,
    zIndex: 1
});
win.add(leftMenu);

var data = [{title:"Home", color:'white'},{title:"My Account", color:'white'},{title:"Messages", color:'white'},{title:"Settings", color:'white'}, {title:"Logout", color:'white'}];
var tableView   = Ti.UI.createTableView({ top:0, height:270, backgroundColor:"#404040", data: data });
leftMenu.add(tableView);

 
// animations
var animateLeft = Ti.UI.createAnimation({
    left: 200,
    duration: 350,
    width: Ti.Platform.displayCaps.platformWidth,
    height: Ti.Platform.displayCaps.platformHeight,
});

var animateRight = Ti.UI.createAnimation({
    left: 0,
    duration: 350,
    width: Ti.Platform.displayCaps.platformWidth,
    height: Ti.Platform.displayCaps.platformHeight,
});

var cantainer  = Ti.UI.createView({
	top:0,
	left:0,
	zIndex: 15,
    opacity: 1
});
win.add(cantainer);

var main = Titanium.UI.createView({
   left: 0,
   top: 44,
   width: Ti.Platform.displayCaps.platformWidth,
   height:Ti.Platform.displayCaps.platformHeight - 44,
   zIndex: 14,
   backgroundColor: '#666666',
   opacity: 1
});
cantainer.add(main);

var navBar = Titanium.UI.createView({
   left: 0,
   top: 0,
   width: Ti.Platform.displayCaps.platformWidth,
   zIndex: 15,
   backgroundColor: '#cc0000',
   opacity: 1,
   height: 44
});
cantainer.add(navBar);

var leftNavButton = Ti.UI.createButton({
    backgroundImage: 'list_icon.png',
    left: 10,
    width: 32,
    height: 32,
    top: 6
});
navBar.add(leftNavButton); 

win.addEventListener('android:back', function (e) {
	if (isToggled) {
		cantainer.animate(animateRight);
		isToggled = false;
	}else{
		win.close();
	}
});
win.open();
 
 
var isToggled = false;
leftNavButton.addEventListener('click',function(e){
    if(!isToggled ){
        cantainer.animate(animateLeft);
        isToggled = true;
    } else {
        cantainer.animate(animateRight);
        isToggled = false;
    }
});
