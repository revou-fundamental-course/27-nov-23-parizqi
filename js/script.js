function luas(){
    let alas = document.getElementById('alas').value;
    let tinggi = document.getElementById('tinggi').value;
    let hasil = (alas*tinggi)*0.5;

    console.log(hasil);

    document.getElementById('hasil').value = hasil;
}
function keliling(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let keliling = a + b + c ;

    console.log(keliling);
    document.getElementById('keliling').value = keliling;
    document.getElementById('coba').style.display='block';
}