module.exports = function check(str, bracketsConfig) {
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if ((bracketsConfig[j][0] != bracketsConfig[j][1]) && (str[i] == bracketsConfig[j][1])) {return false;};
      if (str[i] == bracketsConfig[j][0]) {
        count ++;
        for (let k = i+1; k < str.length; k++) {
          if (str[k] == bracketsConfig[j][1]) {count --;};
          if (bracketsConfig[j][0] != bracketsConfig[j][1]) {
            if (str[k] == bracketsConfig[j][0]) {count ++;};
          };
          if (count == 0) {
            var a = check(str.substring(i+1,k),bracketsConfig) 
            var b = check(str.substring(k+1),bracketsConfig);
            return a && b 
          }
        }
      }
    }    
  }
  return str.length == 0;
}