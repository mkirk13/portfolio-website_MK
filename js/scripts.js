console.log('Hi there. Thanks for viewing my portfolio!')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  var isMobileDevice = window.innerWidth <= 640

  if (x.className === 'navtoggle' && isMobileDevice) {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
