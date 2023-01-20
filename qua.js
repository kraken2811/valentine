

var gift_url = 'https://www.youtube.com/';
var gift_image_url = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/326557184_727440762318157_4464934290418780290_n.jpg?stp=dst-jpg_s403x403&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=CjPTLCNM-qwAX--xhcA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTy9Iv3C_NwjEC_h8f3hCx4U-7JB4CXPFA9qKL8hpgnIw&oe=63F23794';

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
    
  }, false);
  
  
  
  nametag.innerText = to;
}

init();