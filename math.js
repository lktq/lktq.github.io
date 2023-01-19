{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;\f1\fnil\fcharset0 AppleSymbols;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab560
\pard\pardeftab560\slleading20\pardirnatural\partightenfactor0

\f0\fs26 \cf0 function getID(i) \{\
  return document.getElementById(i);\
\}\
\
function getVal(i) \{\
  return getID(i).value;\
\}\
\
function solve() \{\
  var a = parseFloat(getVal("a")).toFixed(2),\
    b = parseFloat(getVal("b")).toFixed(2),\
    c = parseFloat(getVal("c")).toFixed(2);\
  var D = (b * b - 4 * a * c).toFixed(2);\
  var dis = getID("DIS"),\
    nos = getID("NOS"),\
    s1 = getID("S1"),\
    s2 = getID("S2"),\
    con = getID("CON");\
  sign = getID("SIGN");\
  s1.innerHTML = "";\
  s2.innerHTML = "";\
  con.innerHTML = "";\
  if (isNaN(a) || isNaN(b) || isNaN(c)) \{\
    alert("'a','b','c' ph\uc0\u7843 i l\'e0 c\'e1c s\u7889  th\u7921 c")\
    return;\
  \}\
  if (a == 0) \{\
    alert("'a' ph\uc0\u7843 i kh\'e1c 0");\
    return;\
  \}\
  dis.innerHTML = 'Delta (b^2 - 4ac) = <span id="D"></span>';\
  var d = getID("D");\
  d.innerHTML = D.toString();\
  //Ph\uc0\u432 \u417 ng tr\'ecnh\
  if (D < 0) \{\
    nos.innerHTML = "Ph\uc0\u432 \u417 ng tr\'ecnh ax^2 + bx + c = 0 v\'f4 nghi\u7879 m 
\f1 \uc0\u8704 
\f0 x
\f1 \uc0\u8712 
\f0  R";\
  \} else if (D == 0) \{\
    var S = (-b / (2 * a)).toFixed(2);\
    nos.innerHTML = "Ph\uc0\u432 \u417 ng tr\'ecnh ax^2 + bx + c = 0 c\'f3 nghi\u7879 m k\'e9p: "\
    s1.style.display = "inline"\
    s1.innerHTML = "x = " + S.toString();\
  \} else \{\
    var S1 = ((-b - Math.sqrt(D)) / (2 * a)).toFixed(2),\
      S2 = ((-b + Math.sqrt(D)) / (2 * a)).toFixed(2);\
    nos.innerHTML = "Ph\uc0\u432 \u417 ng tr\'ecnh ax^2 + bx + c = 0 c\'f3 2 nghi\u7879 m ph\'e2n bi\u7879 t x1, x2 l\'e0:"\
    s1.style.display = "inline";\
    s2.style.display = "inline";\
    s1.innerHTML = "x = " + S1.toString();\
    s2.innerHTML = " ho\uc0\u7863 c x = " + S2.toString();\
  \}\
  //B\uc0\u7845 t ph\u432 \u417 ng tr\'ecnh\
  select = document.getElementById('sign');\
  option = select.options[select.selectedIndex];\
  if ((a > 0 && D < 0 && (option.value == "<" || option.value == "\uc0\u8804 ")) ||\
    (a < 0 && D < 0 && (option.value == ">" || option.value == "\uc0\u8805 ")) ||\
    (a > 0 && D == 0 && option.value == "<") ||\
    (a < 0 && D == 0 && option.value == ">")) \{\
    con.innerHTML = "T\uc0\u7853 p nghi\u7879 m c\u7911 a b\u7845 t ph\u432 \u417 ng tr\'ecnh l\'e0: S = 
\f1 \uc0\u8709 
\f0 "\
  \} else if ((a > 0 && D < 0 && option.value == ">") ||\
    (a < 0 && D < 0 && option.value == "<") ||\
    (a < 0 && D < 0 && option.value == "\uc0\u8804 ") ||\
    (a > 0 && D < 0 && option.value == "\uc0\u8805 ") ||\
    (a > 0 && D == 0 && option.value == "\uc0\u8805 ") ||\
    (a < 0 && D == 0 && option.value == "\uc0\u8804 ")) \{\
    con.innerHTML = "T\uc0\u7853 p nghi\u7879 m c\u7911 a b\u7845 t ph\u432 \u417 ng tr\'ecnh l\'e0: S = R"\
  \} else if ((a > 0 && D == 0 && option.value == ">") ||\
    (a < 0 && D == 0 && option.value == "<")) \{\
    con.innerHTML = "T\uc0\u7853 p nghi\u7879 m c\u7911 a b\u7845 t ph\u432 \u417 ng tr\'ecnh l\'e0: S = R \\\\" + "\{" + S + "\}"\
  \} else if ((a < 0 && D == 0 && option.value == "\uc0\u8805 ") ||\
    (a > 0 && D == 0 && option.value == "\uc0\u8804 ")) \{\
    con.innerHTML = "T\uc0\u7853 p nghi\u7879 m c\u7911 a b\u7845 t ph\u432 \u417 ng tr\'ecnh l\'e0: S = \{" + S + "\}"\
  \}\
  //D > 0\
  else if ((a > 0 && D > 0 && option.value == ">")) \{\
    con.innerHTML = "T\uc0\u7853 p nghi\u7879 m c\u7911 a b\u7845 t ph\u432 \u417 ng tr\'ecnh l\'e0: S = (-\u8734 ;" + S1 + ") 
\f1 \uc0\u8746 
\f0  (" + S2 + ";+\uc0\u8734 )"\
  \} else if (a < 0 && D > 0 && option.value == "<") \{\
    con.innerHTML = "T\uc0\u7853 p nghi\u7879 m c\u7911 a b\u7845 t ph\u432 \u417 ng tr\'ecnh l\'e0: S = (-\u8734 ;" + S2 + ") 
\f1 \uc0\u8746 
\f0  (" + S1 + ";+\uc0\u8734 )"\
  \} else if (a > 0 && D > 0 && option.value == "\uc0\u8805 ") \{\
    con.innerHTML = "T\uc0\u7853 p nghi\u7879 m c\u7911 a b\u7845 t ph\u432 \u417 ng tr\'ecnh l\'e0: S = (-\u8734 ;" + S1 + "] 
\f1 \uc0\u8746 
\f0  [" + S2 + ";+\uc0\u8734 )"\
  \} else if (a < 0 && D > 0 && option.value == "\uc0\u8804 ") \{\
    con.innerHTML = "T\uc0\u7853 p nghi\u7879 m c\u7911 a b\u7845 t ph\u432 \u417 ng tr\'ecnh l\'e0: S = (-\u8734 ;" + S2 + "] 
\f1 \uc0\u8746 
\f0  [" + S1 + ";+\uc0\u8734 )"\
  \} else if (a > 0 && D > 0 && option.value == "<") \{\
    con.innerHTML = "T\uc0\u7853 p nghi\u7879 m c\u7911 a b\u7845 t ph\u432 \u417 ng tr\'ecnh l\'e0: S = (" + S1 + ";" + S2 + ")"\
  \} else if (a < 0 && D > 0 && option.value == ">") \{\
    con.innerHTML = "T\uc0\u7853 p nghi\u7879 m c\u7911 a b\u7845 t ph\u432 \u417 ng tr\'ecnh l\'e0: S = (" + S2 + ";" + S1 + ")"\
  \} else if (a > 0 && D > 0 && option.value == "\uc0\u8804 ") \{\
    con.innerHTML = "T\uc0\u7853 p nghi\u7879 m c\u7911 a b\u7845 t ph\u432 \u417 ng tr\'ecnh l\'e0: S = [" + S1 + ";" + S2 + "]"\
  \} else if (a < 0 && D > 0 && option.value == "\uc0\u8805 ") \{\
    con.innerHTML = "T\uc0\u7853 p nghi\u7879 m c\u7911 a b\u7845 t ph\u432 \u417 ng tr\'ecnh l\'e0: S = [" + S2 + ";" + S1 + "]"\
  \}\
\}\
\
function update() \{\
  select = document.getElementById('sign');\
  option = select.options[select.selectedIndex];\
\}\
var selectField = document.getElementById("sign");\
selectField.onclick = function() \{\
  update()\
\}\
var submitButton = document.getElementById("submit");\
submitButton.onclick = function() \{\
  solve();\
\};\
}