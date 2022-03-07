const ang1 = 10;
const ang2 = 40;
const ang3 = 70;

if ((ang1 < 0) || (ang2 < 0) || (ang3 < 0)) {
    console.log("False,ângulo inválido.");
}else if(ang1+ang2+ang3 > 180) {
    console.log("False");
}else {
    console.log("True");
}