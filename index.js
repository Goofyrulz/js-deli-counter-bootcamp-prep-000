var katzDeliLine = [];

var otherDeli = ["Steven", "Blake", "Avi"];


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
    if (katzDeliLine.length === 0) {
  return 'Welcome, '+name+ '. You are number ' +katzDeliLine+ ' in line.';}
    else  {
      otherDeli.push(name);
  return ('Welcome, '+name+ '. You are number '+katzDeliLine.length+' in line.');
    }
  }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return 'There is nobody waiting to be served!';}
    else  {
    var shift =  katzDeliLine.shift(0);
    return ('Currently serving ' +shift+'.');
  }
}

function currentLine(katzDeliLine){ 
  if (katzDeliLine.length === 0) { 
    return 'The line is currently empty.';} 
    else { 
  return 'The line is currently: 1. ' + katzDeliLine[0] + ', 2. ' + katzDeliLine[1] + ', 3. ' + katzDeliLine[2]; 
      }
    }