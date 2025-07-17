let currentclick, calculated;
let o1, o2, operatorr;
let str = "";
let display = document.querySelector("#display");
let all = document.querySelector("body");
let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let n3 = document.querySelector("#n3");
let n4 = document.querySelector("#n4");
let n5 = document.querySelector("#n5");
let n6 = document.querySelector("#n6");
let n7 = document.querySelector("#n7");
let n8 = document.querySelector("#n8");
let n9 = document.querySelector("#n9");
let n0 = document.querySelector("#n0");
let n00 = document.querySelector("#n00");
let modulus = document.querySelector("#modulus");
let divide = document.querySelector("#divide");
let mul = document.querySelector("#mul");
let point = document.querySelector("#point");
let sub = document.querySelector("#sub");
let plus = document.querySelector("#plus");
let ac = document.querySelector("#AC");
let del = document.querySelector("#DEL");
let eq = document.querySelector("#eq");

n1.onclick = () => {
  str += n1.innerText;
  display.innerText = str;
};
n2.onclick = () => {
  str += n2.innerText;
  display.innerText = str;
};
n3.onclick = () => {
  str += n3.innerText;
  display.innerText = str;
};
n4.onclick = () => {
  str += n4.innerText;
  display.innerText = str;
};
n5.onclick = () => {
  str += n5.innerText;
  display.innerText = str;
};
n6.onclick = () => {
  str += n6.innerText;
  display.innerText = str;
};
n7.onclick = () => {
  str += n7.innerText;
  display.innerText = str;
};
n8.onclick = () => {
  str += n8.innerText;
  display.innerText = str;
};
n9.onclick = () => {
  str += n9.innerText;
  display.innerText = str;
};
n0.onclick = () => {
  str += n0.innerText;
  display.innerText = str;
};
n00.onclick = () => {
  str += n00.innerText;
  display.innerText = str;
};
point.onclick = () => {
  str += point.innerText;
  display.innerText = str;
};
ac.onclick = () => {
  str = "";
  display.innerText = "00";
};
divide.onclick = () => {
  str += divide.innerText;
  display.innerText = str;
};
modulus.onclick = () => {
  str += modulus.innerText;
  display.innerText = str;
};
sub.onclick = () => {
  str += sub.innerText;
  display.innerText = str;
};
plus.onclick = () => {
  str += plus.innerText;
  display.innerText = str;
};
mul.onclick = () => {
  str += mul.innerText;
  display.innerText = str;
};
del.onclick = () => {
  str = str.slice(0, -1); //-1 is equal to str.length -1
  display.innerText = str || "00";
};
eq.onclick = () => {
  calculate();
  showresult();
};
function calculate() {
  let count = 0;
  for (let i of str) {
    if (i == "%" || i == "/" || i == "*" || i == "+" || i == "-") {
      o1 = parseFloat(str.slice(0, count));
      operatorr = i;
      o2 = parseFloat(str.slice(count + 1));
    } else {
      calculated = parseFloat(str);
    }
    count++;
  }
  if (operatorr == "+") calculated = o1 + o2;
  if (operatorr == "-") calculated = o1 - o2;
  if (operatorr == "*") calculated = o1 * o2;
  if (operatorr == "/") calculated = o1 / o2;
  if (operatorr == "%") calculated = o1 % o2;
}
function showresult() {
  str = calculated.toString();
  display.innerText = calculated;
}

/*
Key takeaways:
parseFloat();
str.slice(0, -1); //-1 is equivalent to str.length-1
calculated.toString()  ;    //convert int,float to string
*/
//hiiiii
