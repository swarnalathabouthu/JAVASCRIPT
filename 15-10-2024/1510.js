function showCards() {
    let cardContainer = document.getElementById("cardContainer");
    cardContainer.style.display = "flex";
    cardContainer.style.flexWrap = "wrap";  
    cardContainer.style.gap = "10px";  
    for (let i = 0; i < 6; i++) {  
        setTimeout(function () {
            cardContainer.innerHTML += `<div style="display: flex; flex-direction: column; align-items: center; padding: 10px; border: 1px solid #ccc; width: 150px;">
                    <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10832028/2022/11/28/d2c6fc65-9c7d-437a-99ff-7e0f98ca78dd1669622455983-Titan-Women-Gold-Toned-Analogue-Watch-2593YM01-1451669622455-1.jpg" style="width: 100%; height: auto;">
                    <h1 style="font-size: 16px; margin: 10px 0 5px;">CARD ${i + 1}</h1>
                    <p style="font-size: 14px; margin: 0;">WATCH ${i + 1}</p>
                </div>
            `;
        }, 2000 * i);
    }
}