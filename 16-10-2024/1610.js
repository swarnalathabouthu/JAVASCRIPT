var arr = [
    {
        "id": 1,
        "title": "Titan",
        "price": 4084.00,
        "description": "Women Purple Analogue Watch 2480WM2",
        "category": "jewelery",
        "image": "https://th.bing.com/th/id/OIP.SzI3Vv4JcaM5u2vZlAHOOQHaJ4?w=186&h=248&c=7&r=0&o=5&pid=1.7",
        "rating": {
            "rate": 4.5,
            "count": 350
        }
    },
    {
        "id": 2,
        "title": "CASIO",
        "price": 7995.00,
        "description": "Casio Sheen Women Rose Analogue watch SX130 SHE-4804PG-9AUDR",
        "category": "jewelery",
        "image": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/527235/2016/2/12/11455274980271-Casio-Sheen-Women-Rose-Gold-Toned-Dial-Watch-SX130-8871455274979571-1.jpg",
        "rating": {
            "rate": 4.6,
            "count": 240
        }
    },
    {
        "id": 3,
        "title": "ESPRIT",
        "price": 2625,
        "description": "Women Silver-Toned Analogue Watch ES1L147M0085",
        "category": "jewelery",
        "image": "https://th.bing.com/th/id/OIP.ujcrIT4vyPJL00xwOQHUVgHaJ4?w=186&h=248&c=7&r=0&o=5&pid=1.7",
        "rating": {
            "rate": 4.3,
            "count": 360
        }
    },
    {
        "id": 4,
        "title": "MORGAN",
        "price": 6699.00,
        "description": "Women Silver-Toned Embellished Analogue Watch M1072R",
        "category": "jewelery",
        "image": "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/e6a10c9d-cb9d-4e00-b480-dd40966ba9911537345446409-1.jpg",
        "rating": {
            "rate": 3.0,
            "count": 50
        }
    }
];

document.getElementById('id1').innerHTML = `
  <style>
      #id1 {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 20px;
      }
      .card {
          width: 18rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
      }
      .card img {
          width: 100%;
          height: auto;
      }
      .card-body {
          padding: 15px;
      }
  </style>
`;

var card = document.getElementById("id1");
var colors = ["lightpink", "lavender", "peachpuff", "lightsalmon", "lightcoral"];

function fun1() {
    for (i = 0; i < arr.length; i++) {
        card.innerHTML += `
        <section class="popular-places" id="popular" style="text-align: center;">
            <small style="color: blue; font-size: 0.8rem; font-family: Verdana, Geneva, Tahoma, sans-serif;">Popular Places</small>
            <p style="font-weight: 650;">To Travel is to Live...</p>
            <div class="container text-center" style="background-color: ${colors[i % colors.length]};">
                <div class="row">  
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="${arr[i].image}" class="card-img-top" alt="Bracelet Image" style="width: 285px; height: 350px;">
                            <div class="card-body">
                                <h5 class="card-title">${arr[i].title}</h5>
                                <a href="#" class="btn btn-primary">See More...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}