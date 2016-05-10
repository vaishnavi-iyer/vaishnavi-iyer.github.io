var navbarSpacer = '<div class="navbar-spacer"></div>' // Space between the menu and the title
document.getElementById('navigation-bar').innerHTML = navbarSpacer

var navBar = '<nav class="navbar">' // navigation bar
var total = navBar // this variable is used to generate the string to be displayed

var container = '<div class="container">' // defines the container for the navigation bar
total += container

var navbarList = '<ul class="navbar-list">' // unordered list of each item
total += navbarList

var navbarItem = ['<li class="navbar-item"><a class="navbar-link"href= "#""Home">Home</a></li>',
                '<li class="navbar-item"><a class="navbar-link"href= "blog/blog-template.html""Blogs">Blogs</a></li>',
                '<li class="navbar-item"><a class="navbar-link" href="#""Projects"> Projects</a></li>',
                '<li class="navbar-item"><a class="navbar-link"href= "#""References">References</a></li>',
                '<li class="navbar-item"><a class="navbar-link"href= "#""About">About</a></li>']

for (var i = 0; i < navbarItem.length; i++) { // for each navbar-item
  total += navbarItem[i]
}

var endNavbarList = '</ul>' // closing tag for navbar-list
total += endNavbarList

var endContainer = '</div>'   // closing tag for container
total += endContainer

var endNavbar = '</nav>' // closing tag for navbar
total += endNavbar

document.getElementById('navigation-bar').innerHTML += total

// individual setting of each variable to innerHML doesn't work as DOM adds the end tag automatically.
// not adding the outter container as in the index file, that container has more elements as well
