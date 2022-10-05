function checkSpam(str) {
  // ваш код...
  let d = str.toLowerCase()
  
  if (d.includes(`1xbet`) || d.includes(`xxxxx`)) {
    return true
  } else {
    return false
  }
}

