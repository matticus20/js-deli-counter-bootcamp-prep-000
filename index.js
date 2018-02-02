var katzDeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(name)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var newArray = []
  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      newArray = [`${i+1}. ${katzDeliLine[i]}`]
    }
    return `The line is currently: ${newArray}`
  } else {
    return "The line is currently empty."
  }
}