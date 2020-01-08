class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1) 
  } 
  static sanitize(string) {
     return string.replace(/[^A-Za-z0-9-\s']+/g, '')
  } 
 static titleize(string) {
    let exclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let arr = string.split(' ')
    let final = []
    for ( let i = 0; i < arr.length; i++ ) {
      if (i === 0) {
        final.push( this.capitalize(arr[i]))
        
      } else {
        
        if ( exclude.includes(arr[i])) {
          final.push( arr[i] )
          
        } else {
          final.push( this.capitalize(arr[i]) )
          
        }
      }
    }
    return final.join(' ')
  }

}