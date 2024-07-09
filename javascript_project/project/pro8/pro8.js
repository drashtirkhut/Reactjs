let foodContainer = document.querySelector('.food-container');

const fooditem=[
    {
        FoodName: "Cheese paratha",
        foodimg: 'https://i.pinimg.com/564x/e8/69/ac/e869acd3eb32e04c07a17409dd86c106.jpg',
        price: "RS 250",
        type: "breakFast",
        des: "These cheese flatbreads make for a wholesome breakfast or brunch. There are many many varieties of paratha made and this is one such tasty paratha which the kids are going to love."
    },
    {
        FoodName: "Aloo Paratha",
        foodimg: 'https://i.pinimg.com/564x/12/00/c5/1200c5416c38ad974d715d0d208ddcca.jpg',
        price: "RS 200",
        type: "breakFast",
        des: "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region."
    },
    {
        FoodName: "Egg Paratha",
        foodimg: 'https://i.pinimg.com/564x/e4/bf/c3/e4bfc36a496f9245e2b9cb1e80faef61.jpg',
        price: "RS 150",
        type: "breakFast",
        des: "Egg paratha recipe — easy breakfast, brunch or dinner recipe that is protein rich, healthy and tasty. Egg paratha is a kids' favorite, so i make it often for their after school snack. To make egg paratha, you can use ready paratha, roti or frozen paratha as well."
    },
    {
        FoodName: "Daal Chawal",
        foodimg: 'https://i.pinimg.com/564x/c3/dc/01/c3dc016fc4f132d0f6e7d88a0831f400.jpg',
        price: "RS 400",
        type: "Lunch",
        des: "The most fascinating, fabulously fantastic and simple lightweight Pakistan’s most favorite dish, Daal Chawal Recipe (Daal Rice) is here at Sooperchef.pk. It’s simple, fast and delicious Pakistani Recipe."
    },
    {
        FoodName: "Palak Paneer",
        foodimg: 'https://i.pinimg.com/564x/66/ec/d4/66ecd446f1b11204bbcec0c35f48b436.jpg',
        price: "RS 400",
        type: "Lunch",
        des: "Palak Paneer is a popular Indian dish of Indian cottage cheese cubes in a mild, spiced smooth spinach sauce. This delicious creamy dish is made with fresh spinach leaves, paneer (firm cottage cheese), onions, tomatoes, herbs and spices."
    },
    {
        FoodName: "Aloo Ghobi",
        foodimg: 'https://i.pinimg.com/736x/96/bb/ba/96bbba77545709b6fc1cc034e1d6fdb8.jpg',
        price: "RS 200",
        type: "Lunch",
        des: "Aloo Gobi ki Sabzi is a classic Pakistani dish of Potatoes and Cauliflower cooked in savory spices and garnished with chillies and cilantro."
    },
    {
        FoodName: "sahi paneer",
        foodimg: 'https://i.pinimg.com/564x/cf/cd/11/cfcd11f8d65c9781287529a688941fb2.jpg',
        price: "RS 200",
        type: "Lunch",
        des: "This Shahi Paneer is deliciously rich and creamy, making it one of the most popular recipes in Mughlai cuisine. Fresh, unmelting cheese is married with a creamy gravy, perfect for serving with naan or roti."
    },

    {
        FoodName: "Banana Shakes",
        foodimg: 'https://i.pinimg.com/564x/c4/53/6b/c4536b8902ca6e17d051f71ee53e65bb.jpg',
        price: "RS 150",
        type: "Shakes",
        des: "You need less than five minutes to make this easy banana smoothie. Use our simple recipe on it’s own or use it as a base for other smoothies."
    },
    {
        FoodName: "Mango Shakes",
        foodimg: 'https://i.pinimg.com/564x/aa/c8/e7/aac8e7495442ea137e4b6d81354d4876.jpg',
        price: "RS 150",
        type: "Shakes",
        des: "Mango shake is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar. To keep things simple and easy, this recipe primarily explains how to make mango shake with milk."
    },
    {
        FoodName: "Biryani",
        foodimg: 'https://i.pinimg.com/564x/ea/0b/07/ea0b0720f5a83a55744dfb34c52227d1.jpg',
        price: "RS 600",
        type: "Dinner",
        des: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties."
    },
    {
        FoodName: "Korma",
        foodimg: 'https://i.pinimg.com/736x/79/6d/9b/796d9b6fc6ba421504d2c60023897b14.jpg',
        price: "RS 250",
        type: "Dinner",
        des: "Korma is a gravy dish that is usually made with yogurt, lots of nuts and spices. A Mughal era original, Chicken Korma is the perfect dinner party dish that is easy, quick and a no fuss recipe."
    },
    {
        FoodName: "Tawa Pulao ",
        foodimg: 'https://i.pinimg.com/564x/18/c5/8d/18c58d13627917fb60d39d2ce019d6a1.jpg',
        price: "RS 650",
        type: "Dinner",
        des: "Tawa Pulao, is a popular street food from Mumbai. Pre cooked rice is stir fried with colourful vegetables and aromatic pav bhai masala!."
    },
    
]


const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'All')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Breakfast'){
                if(box.classList.contains('breakFast'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Lunch'){
                if(box.classList.contains('Lunch'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Shakes'){
                if(box.classList.contains('Shakes'))
                {
                    box.classList.remove('d-none')
                }
                
            }
        
            else if(e.target.innerHTML==='Dinner'){
                if(box.classList.contains('Dinner'))
                {
                    box.classList.remove('d-none')
                }
                
            }
        })
        
    })
})