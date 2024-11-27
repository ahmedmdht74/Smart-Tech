function features() {
    const featuresData = [
        { img: "1", title: "happy costumers", num:"100 +" },
        { img: "2", title: "award winning", num:"75 +" },
        { img: "3", title: "number of hours", num:"24 h" },
        { img: "4", title: "number of polls", num:"400 +" },
    ];
    const content = document.querySelector(".features");
    featuresData.forEach((feature) => {
        content.innerHTML += `
        <div class="feature">
            <img src="../about/f${feature.img}.png" alt="featureImg" loading="lazy">
            <p>${feature.title}</p>
            <span>${feature.num}</span>
        </div>
        `;
    });
}
features();
// ------------------------------------------------
// ------------------------------------------------
function team() {
    const teamData = [
        { 
            img: "1",
            name: "samer mohamed",
            title: "front-end developer",
            acc1:"",
            acc2:"",
            acc3: "",
            animation:"left"
        },
        { 
            img: "2",
            name: "reem tawfik",
            title: "ui & ux designer, <br> front-end developer",
            acc1:"",
            acc2:"",
            acc3: "",
            animation:"right"
        },
        { 
            img: "3",
            name: "ibrahim mohamed", 
            title: "front-end developer",
            acc1:"",
            acc2:"",
            acc3: "",
            animation:"left"
        },
        { 
            img: "4",
            name: "ahmed medht" ,
            title: "back-end developer",
            acc1:"",
            acc2:"",
            acc3: "",
            animation:"right"
        },
        { 
            img: "5",
            name: "mostafa belal",
            title: "back-end developer",
            acc1:"",
            acc2:"",
            acc3: "",
            animation:"left"
        },
    ];
    const content = document.querySelector(".team .content");
    teamData.forEach((card) => {
        content.innerHTML += `
        <div class="card" style="animation-name: ${card.animation} ;">
        <i class="fa-sharp fa-solid fa-sparkle"></i>
        <i class="fa-sharp fa-solid fa-sparkle"></i>
        <i class="fa-sharp fa-solid fa-sparkle"></i>
            <img src="../about/t${card.img}.png" alt="teamImg" loading="lazy">
            <div class="info">
                <div class="main">
                <p class="name">${card.name}</p>
                <p class="title">${card.title}</p>
                </div>
                <p class="lorem" >Lorem Ipsum has been the industry's Lorem Ipsum has been the industry's </p>
                <div class="accs">
                    <a href="${card.acc1}">
                    <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="${card.acc2}">
                    <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="${card.acc3}">
                    <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
        `;
    });
}
team();
// ------------------------------------------------
// ------------------------------------------------

function blog() {
    const blogData = [
        { img: "1", animation: "left" , title: "google's search ad embrace cruches online travel agents", text:"decoration" },
        { img: "2", animation: "bottom" , title: "samsung w20 5G foldable phone launch date", text:"tech" },
        { img: "3", animation: "right" , title: "samsung galaxy a50s price in india cut", text:"interior" },
    ];
    const content = document.querySelector(".blog .content");
    blogData.forEach((blog) => {
        content.innerHTML += `
        <div class="card" style="animation-name: ${blog.animation} ;">
            <img src="../about/b${blog.img}.jpg" alt="blogImg" loading="lazy">
            <div class="head">
                <p>${blog.text}</p>
                <p>moderator</p>
            </div>
            <p class="mainP">${blog.title}</p>
            <p class="secP">
                looking for a business to supplement his retirement income, dwight teske opened a 18|8 fine mens s ....            </p>
        </div>
        `;
    });
}
blog();
