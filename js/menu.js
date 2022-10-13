
function menu() {

let elemMenu = formMenu.elemMenu.value;
let fc = formMenu.fc.value;
let bc = formMenu.bc.value;
let hc = formMenu.hc.value;

let arrMenu = elemMenu.split(", ")

// console.log(elemMenu, fc, bc, hc, arrMenu);

let s1 = "", s2 = "";

    for (i=0; i < arrMenu.length; i++) {

s1 += `<li onclick="funcImg(${i+1})"><a href="#">${arrMenu[i]}</a></li>`;

    }

      s1 = `<ul>${s1}</ul>`;
    // console.log(s1);

    s2 = `
    a {
        background: ${bc};
        color: ${fc};  
    }

    a:hover {
     background: ${hc};
    }
    `;

  
    boxMenu.innerHTML = s1;
    userStyle.innerHTML = s2;

    formMenu.but.value = "Изменить меню";

}

function funcImg(n) {
    boxPicture.innerHTML = 
    `<img onclick="boxPicture.innerHTML = ''" src="images/${n}.jpg">`;

}