export function toggleNavbarActiveClass(loc)
{
  let navLinks = [
    "home-nav",
    "about-nav",
    "contact-nav",
    "portfolio-nav",
    "photography-nav"
  ]

  for (var i=0; i<navLinks.length; i++)
  {
    let target_divs = document.getElementsByClassName(navLinks[i])
    for (var j=0; j<target_divs.length; j++)
    {
      let div = target_divs[j]
      if (div !== undefined && div.classList.contains("nav-link-active"))
      {
        div.classList.remove("nav-link-active")
      }
    }
  }

  // Set active status
  if (loc === "" || loc === undefined)
  {
    loc = window.location.href.split("/").pop()
  }

  loc = loc.toLowerCase()
  let targets

  if (loc === "")
  {
    targets = document.getElementsByClassName("home-nav")
  }
  else if (loc === "about")
  {
    targets = document.getElementsByClassName("about-nav")
  }
  else if (loc === "portfolio")
  {
    targets = document.getElementsByClassName("portfolio-nav")
  }
  else if (loc === "photography")
  {
    targets = document.getElementsByClassName("photography-nav")
  }
  else if (loc === "contact")
  {
    targets = document.getElementsByClassName("contact-nav")
  }

  if (targets !== null && targets !== undefined)
  {
    Array.from(targets).forEach((target) => {
      target.classList.add("nav-link-active")
    });
  }
}
