export function handleMenu(event)
{
    let navbar = document.getElementById("right-navbar")
    navbar.style.display = 'inline-block'
    this.setState({
      menuOpen: true,
      navBarSlideClass: 'slideIn'
    })
}
