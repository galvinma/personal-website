export function stripPx(s)
{
  if (s.includes('px'))
  {
    return parseInt(s.replace("px", ""))
  }
}
