export function handleMenuClose()
{
    let navbar = document.getElementById("right-navbar")
    this.setState({
      menuOpen: false,
      navBarSlideClass: 'slideOut'
    })

    setTimeout(function() {
        navbar.style.display = 'none'
    }, 1000);
}
