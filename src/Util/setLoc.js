import history from '.././history';

export function setLoc(loc)
{
  if (loc === "")
  {
    history.goBack();
  }
  else
  {
    history.push(loc);  
  }
}
