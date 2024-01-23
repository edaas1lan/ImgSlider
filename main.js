const nextıcon=document.querySelector('.next');
const prevıcon=document.querySelector('.prev');

const imgcontainer=document.querySelector('.imgcontainer');
const imgs=document.querySelectorAll('img');

let baslangic=1;
let timeout;

prevıcon.addEventListener('click',()=>{
    baslangic--;
    clearTimeout(timeout);
    updateımg();
});

nextıcon.addEventListener('click',()=>{
    baslangic++;//bir bir arttırsın
    clearTimeout(timeout);//basıldıgında kendiliğinden gecme islemini sıfırlıcak
    updateımg();//fonksiyonu cagırsın
});
function updateımg(){
    if(baslangic > imgs.length){//eger baslangıc sayısı img uzunlusugundan buyukse baslangıcı yine 1 e esitle sonrakine gecmesini engeller
        baslangic = 1;
    }
    else if(baslangic < 1){
        baslangic = imgs.length;
    }
    imgcontainer.style.transform=`translateX(-${(baslangic - 1) * 700}px)`;//baslangıcta kaydırma yapmasın sonrakilerde uygulamaya devam etsin
    timeout=setTimeout(()=>{
        baslangic++;
        updateımg();
    },4000)
}


updateımg();
