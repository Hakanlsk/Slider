var models = [
    {
        name : 'Audi A5',
        image : 'img/a5.jpg',
        link: 
        'https://www.sahibinden.com/ilan/vasita-otomobil-audi-2022-hatasiz-a5-quattro-s-line-19-jant-premium-pkt-ses-sis-keyls-1075030723/detay'
    },
    {
        name : 'Toyota Ae86',
        image : 'img/ae86.jpg',
        link: 
        'https://www.mobile.de/tr/Araba/Toyota-Toyota-Ae86-Trueno/vhc:car,mld:ae86/pg:vipcar/359812489.html'
    },
    {
        name : 'Nissan Skyline R34',
        image : 'img/r34.jpg',
        link: 
        'https://www.mobile.de/tr/Araba/Nissan-Skyline-GT-T-R34/vhc:car,ms1:18700_33_/pg:vipcar/359971440.html'
    },
    {
        name : 'Honda s2000',
        image : 'img/s2000.jpg',
        link: 
        'https://www.sahibinden.com/ilan/vasita-otomobil-honda-honda-s2000-2.0-240hp-v3-jant-varex-coil-eksiksiz-kusursuz-1074337447/detay'
    },
    {
        name : 'Nissan 200sx',
        image : 'img/silvia.jpg',
        link: 
        'https://www.sahibinden.com/ilan/vasita-otomobil-nissan-victor-motors-nissan-rb25-motorlu-gtr-1022119852/detay'
    }

];
var index = 0;
var slideCount = models.length; //son index sayısını modelin uzunluğundan aldık
//aşağıda oluşturduğumuz fonksiyonun çalışması için fonkisyonu çağırammız gerekiyor

var settings={
    duration : '1000',
    random : true
};



init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
    index--;
    showSlide(index);
    console.log(index);
    
});
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){
    index++;
    showSlide(index);
    console.log(index);
});

//bir işlemi belli bir sürede yaptırmak için kullanılan iki metot vardır
// setTimeout  --> x saniye sonra başlatılacak fonksiyonu belirlemek için kullanılır 
// setInterval --> clearInterval ile durdurmadığımız sürece sürekli tekrar etmesini sağlar
function init(_settings){
    
    //2saniyede bir sürekli tekrarlanıcak olan fonkisyon (çünkü duration=2000 olarak belirlenmişti)
    setInterval(function(){

        if(settings.random){
            //random index üretilecek
            index=Math.floor(Math.random() * slideCount);
        }
        else{
            //artan index üretilecek
        }

        showSlide(index);


    },settings.duration)

}







function showSlide(i){

    index = i;
    //index değeri ilk slaytın indexinden küçükse yine ilk slayta gönderir bunun için kod :
    if(i<0)
    {
        index = slideCount-1;
    }

    if(i>=slideCount){
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}

















































