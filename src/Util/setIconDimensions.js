export function setIconDimensions()
{
  // Close icon
  if (document.getElementById("close-icon") !== undefined && document.getElementById("close-icon") !== null)
  {
    if (window.innerWidth < 600)
    {
      document.getElementById("close-icon").style.width = "40px"
      document.getElementById("close-icon").style.height = "40px"
    }
    else if (window.innerWidth < 900)
    {
      document.getElementById("close-icon").style.width = "60px"
      document.getElementById("close-icon").style.height = "60px"
    }
    else
    {
      document.getElementById("close-icon").style.width = "72px"
      document.getElementById("close-icon").style.height = "72px"
    }
  }

  // Menu icon
  if (document.getElementById("menu-icon") !== undefined && document.getElementById("menu-icon") !== null)
  {
    if (window.innerWidth < 600)
    {
      document.getElementById("menu-icon").style.width = "40px"
      document.getElementById("menu-icon").style.height = "40px"
    }
    else if (window.innerWidth < 900)
    {
      document.getElementById("menu-icon").style.width = "60px"
      document.getElementById("menu-icon").style.height = "60px"
    }
    else
    {
      document.getElementById("menu-icon").style.width = "72px"
      document.getElementById("menu-icon").style.height = "72px"
    }

  }

  // Nav Back Arrow
  if (document.getElementById("back-arrow") !== undefined && document.getElementById("back-arrow") !== null)
  {
    if (window.innerWidth < 600)
    {
      document.getElementById("back-arrow").style.width = "40px"
      document.getElementById("back-arrow").style.height = "40px"
    }
    else if (window.innerWidth < 900)
    {
      document.getElementById("back-arrow").style.width = "60px"
      document.getElementById("back-arrow").style.height = "60px"
    }
    else
    {
      document.getElementById("back-arrow").style.width = "72px"
      document.getElementById("back-arrow").style.height = "72px"
    }

  }

  // Scroll Arrow
  if (document.getElementById("scroll-arrow-container") !== undefined && document.getElementById("scroll-arrow-container") !== null)
  {
    if (window.innerWidth < 600)
    {
      document.getElementById("scroll-arrow-container").style.height = "50%"
    }
    else if (window.innerWidth < 900)
    {
      document.getElementById("scroll-arrow-container").style.height = "75%"
    }
  }

}
