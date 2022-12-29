export function setToken(token) {
  if (!token) {
    return localStorage.clear();
  }
  const tok = token.split(".");
  tok.forEach((token, i) => {
    localStorage.setItem(`tok${i}`, token);
  });
  localStorage.setItem("tokeDate", Date());
}

function addHours(numOfHours, date = new Date()) {
  const dateCopy = new Date(date.getTime());
  dateCopy.setTime(dateCopy.getTime() + numOfHours * 60 * 60 * 1000);
  return dateCopy;
}

function isBefore(date1, date2) {
  return date1 < date2;
}

export function getToken() {
  const tok1 = localStorage.getItem("tok0");
  const tok2 = localStorage.getItem("tok1");
  const tok3 = localStorage.getItem("tok2");

  const finalTok = `${tok1}.${tok2}.${tok3}`;

  return finalTok;
  // const ogTokeDate = localStorage.getItem("tokeDate");
  // const today = new Date(ogTokeDate);
  // const after = addHours(4, today);
  // const compare = isBefore(today, after);

  // if (!compare) {

  // } else {
  //   return localStorage.clear();
  // }
}

export function deleteTokens() {
  localStorage.removeItem("tok0");
  localStorage.removeItem("tok1");
  localStorage.removeItem("tok2");
  localStorage.removeItem("tokeDate");
}
