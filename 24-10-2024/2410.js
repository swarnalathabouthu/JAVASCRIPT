


let cardContainer=document.createElement("div");
let imageTag=document.createElement("img");
let title=document.createElement("p");
let price=document.createElement("span");
let buyNowBtn=document.createElement("button");

imageTag.setAttribute("src","https://5.imimg.com/data5/AC/TZ/CP/SELLER-27950412/patek-phillips-mens-watch-500x500.jpg")
imageTag.style.width="300px"
imageTag.style.border="2px solid grey";

title.textContent="ROLEX GOLDEN DAIMOND WRIST-WATCH"
title.style.color = "Red"

price.textContent=45000;
price.style.color ="Blue"

buyNowBtn.innerText="BUYNOW"
buyNowBtn.style.color ="white"
buyNowBtn.style.backgroundColor = "lightblue"
buyNowBtn.style.border="2px solid black";

cardContainer.style.border="2px solid black";
cardContainer.style.borderRadius="15px";
cardContainer.style.padding="15px";
cardContainer.style.display="inline-block"
cardContainer.style.background="linear-gradient(green, yellow, pink)";


cardContainer.append(imageTag,title,price,buyNowBtn)
document.body.appendChild(cardContainer)