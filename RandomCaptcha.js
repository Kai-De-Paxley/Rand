const generateCaptcha = () => {
    let jumlahKata = "1345678397ie5rfasjdhwgeriotwrjgnarbhwiuwg4SJSFSGHEOIFUGVJHASNSHDGJJSKLGHSB";
    let totalKataCaptcha = 6;
    let captcha = "";

    for(let i = 0; i < totalKataCaptcha; i++) {
        let indexAcak = Math.floor(Math.random () * jumlahKata.length);
        captcha += jumlahKata.charAt(indexAcak);
    }

    document.getElementById("capca").innerHTML = captcha;
    document.getElementById("ketik").value = "";
    document.getElementById("result").innerHTML = "";
};

generateCaptcha()


const checkButton = () => {
    let KetikanUser = document.getElementById("ketik").value;
    let tampilanCapcha = document.getElementById("capca").innerHTML;
    let hasilCheckButton = document.getElementById("result");

    if(KetikanUser === tampilanCapcha) {
        hasilCheckButton.innerHTML = "'selamat kamu bukan robot'";
        hasilCheckButton.style.color = "blue"
    } else {
        hasilCheckButton.innerHTML ="'Kamu salah' silakan coba lagi!";
        hasilCheckButton.style.color = "red"
    }
};
