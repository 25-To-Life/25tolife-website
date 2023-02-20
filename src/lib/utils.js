import md5 from "js-md5";

/**
 * Makes a Quazal user MD5 hash.
 * @param {string} str
 * @returns 
 */
export function hash(str) {
  let result = hexEncode(str);
  
  try {
    for(let i = 0; i < 65000; i++) {
      result = md5(hexStringToByteArray(result));
    }
  }
  catch(e) {
    console.log(e);
  }
  
  return result;
}

function hexEncode(str) {
  var hex, i;

  var result = "";
  for (i=0; i<str.length; i++) {
      hex = str.charCodeAt(i).toString(16);
      result += ("000"+hex).slice(-2);
  }

  return result
}

function hexStringToByteArray(hexString) {
  if (hexString.length % 2 !== 0) {
      throw "Must have an even number of hex digits to convert to bytes";
  }
  var numBytes = hexString.length / 2;
  var byteArray = new Uint8Array(numBytes);
  for (var i=0; i<numBytes; i++) {
      byteArray[i] = parseInt(hexString.substr(i*2, 2), 16);
  }
  return byteArray;
}
