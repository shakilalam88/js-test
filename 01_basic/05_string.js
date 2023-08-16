const f_name = "hello"
const l_name = "world"

// console.log(f_name +" "+ l_name);

// console.log(`first name is ${f_name.toUpperCase()} and last name is ${l_name}`);

const gameName = new String('shakil_gamer');

//console.log(gameName[0]);   // s
//console.log(gameName.__proto__);  // {}

//console.log(gameName.length);    // 12
//console.log(gameName.toUpperCase());   //SHAKIL_GAMER
//console.log(gameName.charAt(2));    // a
//console.log(gameName.indexOf("g"));  // 7

//.achor   (A string representing a name value to put into the generated <a name="..."> start tag.)
    //console.log(gameName.anchor("www.google.com"));   // <a name="www.google.com">shakil_gamer</a>

// .at
    //console.log(gameName.charAt(3));    // k

// .big
    //console.log(gameName.big());        // <big>shakil_gamer</big>

// .blink
    //console.log(gameName.blink());        // <blink>shakil_gamer</blink>

// .blod
    //console.log(gameName.bold());          // '<b>shakil_gamer</b>'

// .charat
    //console.log(gameName.charAt(2));              // a
    //console.log(gameName.charAt("2"));              // a
    //console.log(gameName.charAt());               // s     (first index)
    //console.log(gameName.charAt("dfdsf"));        // s     (first index)
    //console.log(gameName.charAt(-1));             // ""   (empty string)
    //console.log(gameName.charAt(1111));           // ""   (empty string)

// .charcCdeAt
    //console.log(gameName.charCodeAt(0));            // 115 Unicode code point at the given index
    // console.log(gameName.charCodeAt());               // 115     (first index)
    // console.log(gameName.charCodeAt("dfdsf"));        // 115     (first index)
    // console.log(gameName.charCodeAt(-1));             // NaN   
    // console.log(gameName.charCodeAt(1111));           // NaN   

// .codePointAt
    //console.log(gameName.codePointAt(0));           // 115 Unicode code point at the given index
    // console.log(gameName.codePointAt());               // 115     (first index)
    // console.log(gameName.codePointAt("dfdsf"));        // 115     (first index)
    // console.log(gameName.codePointAt(-1));             // undefined   
    //console.log(gameName.codePointAt(1111));           // undefined   

// .concat
    //console.log(gameName.concat(" alam"));              //'shakil_gamer alam'

    const gameName2 = "sunday is a hollyday";

// .endsWith
    //console.log(gameName2.endsWith("a"));               // false
    //console.log(gameName2.endsWith("hollyday"));        // true

// .fromCharCode
    //console.log(String.fromCharCode(65, 66, 67));               // "ABC"

// .includes    (includes(searchString, position))

    //console.log(gameName2.includes("is",6));            // true
    //console.log(gameName2.includes("is", 10));          // false

// .indexOf (indexOf(searchString, position))
    //console.log(gameName2.indexOf("is"));               // 7
    //console.log(gameName2.indexOf("is",3));             // 7
    //console.log(gameName2.indexOf("is",10));            // -1

// .padEnd  (padEnd(targetLength, padString))
    
    //console.log(gameName2.padEnd(24,"."));

// .padStart

    //console.log(gameName2.padStart(24,"#"));                    //####sunday is a hollyday
    //console.log(gameName2.padStart(gameName2.length+1,"$"));    //#sunday is a hollyday

// .repeat     (repeat(count))

    //console.log(gameName2.repeat(3));              // sunday is a hollydaysunday is a hollydaysunday is a hollyday


// .replace     (replace(pattern, replacement))

    //console.log(gameName2.replace('sunday',"monday"));  // monday is a hollyday

// .slice     (slice(indexStart, indexEnd))

    //console.log(gameName2.slice(2));        // nday is a hollyday
    //console.log(gameName2.slice(2,5));      // nda
    //console.log(gameName2.slice(-1));       // y
    //console.log(gameName2.slice(-5,-4));    // l
    //console.log(gameName2.slice(-5,-1));    // lyda

// .split    (split(separator, limit))

    console.log(gameName2.split(" "));       //[ 'sunday', 'is', 'a', 'hollyday' ]

// .startsWith     (startsWith(searchString))

    console.log(gameName2.startsWith("sun"));   // true
    console.log(gameName2.startsWith("s"));     // true
    console.log(gameName2.startsWith("a"));     // false
    
