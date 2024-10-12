let $ = document;
const navMenu = _id("navMenu");
let openMenuBtn = _id("openMenuBtn");
let closeMenuBtn = _id("closeMenuBtn");
const overlay = _id("overlay");
let btnFeature = $.querySelectorAll("#allBtnFeature button");
let menuItems = $.querySelectorAll(".menu-item");
const contentContainer = _id("contentContainer");
const brandsContainer = _id("brandsContainer");
const carBoxesGroup = _id("carBoxesGroup");
const servicesGroup = _id("servicesContainer");
const adventageGroup = _id("adventage-Group");
const socialGroup = $.querySelectorAll(".socials");
const reviewsGroup = _id("reviewsGroup");
let fragment = $.createDocumentFragment();
let footerListItem = $.querySelectorAll(".footer-list");

const dataMap = {
  instantRent: {
    pickup: "Point Location",
    dropOff: "Point Location",
    estimateTime: "Point Location",
    pricing: "$ 0.00",
    button: "Rent Now!",
  },
  privateDriver: {
    pickup: "Location Chicago",
    dropOff: "Location Texas",
    estimateTime: "12 Hours",
    pricing: "$ 21.45",
    button: "All Cars",
  },
  longTrip: {
    pickup: "Location NewYork",
    dropOff: "Location Tampa",
    estimateTime: "19 Hours",
    pricing: "$ 69.45",
    button: "Trip Park",
  },
};

const brandsImg = [
  { id: 1, name: "BWM_img", img: "/public/img/Brands/BMW.png" },
  { id: 2, name: "lexus-log_img", img: "/public/img/Brands/lexus-logo.png" },
  { id: 3, name: "Marcedes_img", img: "/public/img/Brands/Marcedes.png" },
  { id: 4, name: "Honda_img", img: "/public/img/Brands/Honda.png" },
  { id: 5, name: "Toyota_img", img: "/public/img/Brands/Toyota.png" },
  { id: 6, name: "Hyunday_img", img: "/public/img/Brands/Hyundai.png" },
  { id: 7, name: "Nissan_img", img: "/public/img/Brands/Nissan.png" },
  { id: 8, name: "KIA_img", img: "/public/img/Brands/KIA.png" },
];

const carsBoxArray = [
  {
    id: 1,
    name: "Lexus CT200H",
    price: "$120",
    type: "Automatic",
    location: "Djakarta",
    img: "/public/img/Popular-car/Lexus CT 200h.png",
    mobimg: "/public/img/Popular-car/Lexus CT 200h_mob.png",
  },
  {
    id: 2,
    name: "Jaguar F-Pace",
    price: "$132",
    type: "Clutch",
    location: "Bali",
    img: "/public/img/Popular-car/Jaguar_F-Pace.png",
    mobimg: "/public/img/Popular-car/Jaguar F-Pace_mob.png",
  },
  {
    id: 3,
    name: "Marcedes Benz",
    price: "$200",
    location: "Bandung",
    type: "Automatic",
    img: "/public/img/Popular-car/Marcedes Benz.png",
    mobimg: "/public/img/Popular-car/Marcedes Benz_mob.png",
  },
];

const servicesArray = [
  {
    id: 1,
    icon: "#keyIcon",
    title: "Instant Rent",
    describe:
      "We provide direct rental services when you need wherever you are. Our officers are quick to respond in carrying out this task . . .",
    background: "instantRent_bg",
  },
  {
    id: 2,
    icon: "#agentIcon",
    title: "Private Driver",
    describe:
      "We have professional agents to accompany your trip useful for your protection from disturbances that you do not like . . .",
    background: "privateDriver_bg",
  },
  {
    id: 3,
    icon: "#trip",
    title: "Long Trip",
    describe:
      "Long trips whenever and wherever you want can comfortably use our car collection that supports long and long trips . . .",
    background: "longTrip_bg",
  },
];

const adventagesArray = [
  {
    icon: "#solidIcon",
    title: "Easy Rent",
    span: "Rent a car at our rental with an easy and fast process without disturbing your productivity",
  },
  {
    icon: "#premium",
    title: "Premium Quality",
    span: "Our cars are always maintained engine health and cleanliness to provide a more comfortable driving experience",
  },
  {
    icon: "#prfessional",
    title: "Professional Agent",
    span: "You can ask your travel companion to escort and guide your journey.",
  },
  {
    icon: "#carSaftey",
    title: "Car Safety",
    span: "We guarantee the safety of the engine on the car always running well with regular checks on the car engine.",
  },
  {
    icon: "#refund",
    title: "Refund",
    span: "Our service guarantee provides a money back opportunity if the car does not match the information provided.",
  },
  {
    icon: "#liveMonitoring",
    title: "Live Monitoring",
    span: "Our service provides direct customer monitoring to monitor trips in terms of safety and comfort.",
  },
];

const socialBtnValues = [
  (icon = "#linkdin"),
  (icon = "#twitter"),
  (icon = "#facebook"),
  (icon = "#instagram"),
];

const reviewsArray = [
  {
    id: 1,
    img: "/public/img/Our-Review/Ellipse 3.png",
    name: "Melinda Lenny",
    place: "Medan",
  },
  {
    id: 2,
    img: "/public/img/Our-Review/Ellipse 4.png",
    name: "Jacob Stevan",
    place: "Bandung",
  },
  {
    id: 3,
    img: "/public/img/Our-Review/Ellipse 5.png",
    name: "Roben Musstar",
    place: "Bali",
  },
];

socialGroup.forEach(function (group) {
  socialBtnValues.map((item) => {
    group.insertAdjacentHTML(
      "beforeend",
      `                <li>
                  <a
                    class="w-[30px] h-[30px] md:w-[40px] md:h-[40px] border-2 border-red-450 text-red-450 rounded-sm flex-center hover:bg-red-450 hover:text-white transition-all"
                    href="#"
                  >
                    <svg class="w-[22px] h-[20px] md:w-[26px] md:h-[24px]">
                      <use href="${item}"></use>
                    </svg>
                  </a>
                </li>`
    );
  });
});

function openNav() {
  navMenu.classList.add("nav-visible");
  navMenu.classList.remove("nav-hidden");
  overlay.classList.remove("hidden");
  setTimeout(() => {
    navMenu.classList.remove("-right-52");
    navMenu.classList.add("right-0");
  }, 1);
}

function closeNav() {
  navMenu.classList.add("-right-52");
  navMenu.classList.remove("right-0");
  overlay.classList.add("hidden");
  setTimeout(() => {
    navMenu.classList.remove("nav-visible");
    navMenu.classList.add("nav-hidden");
  }, 300);
}

function updateContent(type) {
  contentContainer.innerHTML = "";

  let mainType = dataMap[type];
  let rowContentElem = $.createElement("div");
  rowContentElem.classList.add("rowContent");
  rowContentElem.insertAdjacentHTML(
    "beforeend",
    ` <div class="child:capitalize font-LatoRegular">
                <span class="text-[#737373]">pickup</span>
                <div class="flex gap-x-2 mt-4 child:text-[#D9D9D9]">
                  <svg class="w-6 h-6">
                    <use href="#map"></use>
                  </svg>
                  <span class="font-LatoRegular">${mainType.pickup}</span>
                </div>
              </div>
              <div class="child:capitalize font-LatoRegular">
                <span class="text-[#737373]">Drop Off</span>
                <div class="flex gap-x-2 mt-4 child:text-[#D9D9D9]">
                  <svg class="w-6 h-6">
                    <use href="#map"></use>
                  </svg>
                  <span class="font-LatoRegular">${mainType.dropOff}</span>
                </div>
              </div>
              <div class="child:capitalize font-LatoRegular">
                <span class="text-[#737373]">Estimate Time</span>
                <div class="flex gap-x-2 mt-4 child:text-[#D9D9D9]">
                  <svg class="w-6 h-6">
                    <use href="#clock"></use>
                  </svg>
                  <span class="font-LatoRegular">${mainType.estimateTime}</span>
                </div>
              </div>
              <div class="child:capitalize font-LatoRegular">
                <span class="text-[#737373]">pricing</span>
                <div class="flex gap-x-2 mt-4 child:text-[#D9D9D9]">
                  <span class="font-LatoRegular">${mainType.pricing}</span>
                </div>
              </div>
              <a
                href="#"
                id="rentButton"
                class="cursor-pointer mx-auto z-20 w-[146px] h-[58px]  flex-center font-LatoBold text-red-450 border-[3px] transition-colors rounded-sm border-red-450 hover:bg-red-450 hover:text-white" >${mainType.button}</a>`
  );
  contentContainer.appendChild(rowContentElem);
}

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (event) => {
    let mainItem = event.target.parentElement;
    mainItem.classList.add("activeMenu");
  });
});

brandsImg.map((brand) => {
  let imageElem = $.createElement("img");
  imageElem.setAttribute("src", brand.img);
  imageElem.setAttribute("alt", brand.name);
  brandsContainer.appendChild(imageElem);
});

carsBoxArray.map((car) => {
  let productItems = `  
  <div class="shadow-sm h-[150px] mx-auto sm:h-full flex sm:block">
              <img
                class="bg-[#F2F2F2] w-full p-12 hidden sm:block h-[260px]"
                src="${car.img}"
                alt="${car.name}"
              />
              <img
                class="bg-[#F2F2F2] w-[210px] p-6 block sm:hidden"
                src="${car.mobimg}"
                alt="${car.name}"
              />
              <div class="shadow-sm relative p-3 flex flex-col w-[300px] sm:w-full sm:block justify-around">
                <h3 class="text-[#737373] text-[16px] sm:text-[26px]">${car.name}</h3>

               <span class='font-LatoRegular sm:hidden text-[14px] text-[#D9D9D9]'>${car.type}</span>

                <div class="flex items-center justify-between mt-4">
                  <span class="text-xl sm:text-[33px] text-[#404040] font-LatoBold sm:font-LatoBlack"
                    >${car.price}<span
                      class="text-[#A6A6A6] text-[12px] sm:text-[15px] font-LatoRegular"
                      >/Day</span
                    ></span
                  >
                  <span class="text-[#A6A6A6] sm:flex gap-x-1 hidden">
                    <svg class="w-6 h-6">
                      <use href="#map"></use>
                    </svg>
                    ${car.location}
                  </span>
                </div>
                <button class="absolute right-0 bg-red-450 w-[30px] flex-center h-full sm:hidden">
                   <svg class="w-5 h-5 text-white  ">
                     <use href="#chevron-right"></use>
                   </svg>
                </button>
                <button
                  class="relative hidden sm:block mt-5 w-full h-16 bg-white text-[#737373] border-2 hover:border-red-450 hover:bg-red-450 hover:text-white  transition-all"
                >
                  <svg class="absolute w-6 h-6 left-6">
                    <use href="#phone"></use>
                  </svg>
                  Rent Now
                </button>
              </div>
            </div>`;
  let tempDiv = $.createElement("div");
  tempDiv.insertAdjacentHTML("beforeend", productItems);
  fragment.appendChild(tempDiv.firstElementChild);
});
carBoxesGroup.append(fragment);

servicesArray.map((service) => {
  servicesGroup.insertAdjacentHTML(
    "beforeend",
    `<div class="servicesBox ${service.background} " data-id="${service.id}">
              <svg class=" hidden md:block md:w-24 md:h-32">
                <use href="${service.icon}"></use>
              </svg>
              <h3 class="mb-2 md:mb-4 text-xl sm:text-[26px]">${service.title}</h3>
              <span class="max-w-[250px] sm:max-w-[270px] text-sm sm:text-[15px] text-center  sm:text-left mx-auto"
                >${service.describe}</span
              >
              <a  onmouseenter="enterServiceBtn(event)" onmouseleave="leaveServiceBtn(event)" href="#">Read More</a>
            </div> `
  );
});

adventagesArray.map((adventage) => {
  adventageGroup.insertAdjacentHTML(
    "beforeend",
    `<div class=" adventageBox flex items-center gap-x-3 md:gap-x-5  sm:max-w-[377px]">
              <svg class="w-[185px] h-[70px]">
                <use href="${adventage.icon}"></use>
              </svg>
              <div class="flex flex-col gap-y-4 text-[#737373]">
                <h3 class="text-lg sm:text-[26px]">${adventage.title}</h3>
                <span class="text-[13px] sm:text-[15px] text-[#A6A6A6]"
                  >${adventage.span}</span
                >
              </div>
            </div>
    `
  );
});

reviewsArray.map((review) => {
  reviewsGroup.insertAdjacentHTML(
    "beforeend",
    `<div
              class=" max-w-[300px] sm:max-w-[400px] bg-white rounded-md px-5 py-12 shadow-lg"
            >
              <div class="flex justify-between">
                <svg class="h-12">
                  <use href="#frame"></use>
                </svg>
                <ul class="starsBox${review.id} flex gap-x-2">
                  <svg class="w-5 h-5 text-red-450">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-5 h-5 text-red-450">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-5 h-5 text-red-450">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-5 h-5 text-red-450">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-5 h-5 text-red-450">
                    <use href="#star"></use>
                  </svg>
                </ul>
              </div>
              <p class="mt-2 text-base md:text-xl font-LatoRegular text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                nam suscipit amet nec eget fermentum, elementum purus aliquet.
                Porttitor elementum a felis, tempus erat orci.
              </p>
              <div class="flex mt-10 gap-x-5  items-center">
                <img src="${review.img}" class="w-16 h-16 md:w-auto md:h-auto" alt="img ${review.id}" />
                <div>
                  <h3 class="text-[#737373] text-lg md:text-[26px]">${review.name}</h3>
                  <p class="text-[#BFBFBF] text-sm  md:text-[20px]">${review.place}</p>
                </div>
              </div>
     </div>`
  );
});

function starsReviewChange() {
  let starsBoxes = $.querySelector(".starsBox3");

  // انتخاب تمام svg های داخل هر starsBox
  let stars = starsBoxes.querySelectorAll("svg");

  // چک کردن اینکه حداقل 3 ستاره (svg) وجود دارد
  if (stars.length >= 5) {
    let thirdStar = stars[4]; // سومین svg
    // مثلا می‌توانیم رنگ یا خاصیتی از آن را تغییر دهیم:
    thirdStar.style.color = "#A6A6A6"; // تغییر رنگ سومین ستاره به آبی (بسته به CSS شما)
  }
}

starsReviewChange();

function adventageEdit() {
  let adventageMainSvg = _selector(".adventageBox:nth-child(3) svg");
  adventageMainSvg.style.width = "110px";
}

adventageEdit();

function enterServiceBtn(e) {
  let mainBoxData = e.target.parentElement;
  mainBoxData.classList.add("active");
}

function leaveServiceBtn(e) {
  let mainBoxData = e.target.parentElement;
  mainBoxData.classList.remove("active");
}

openMenuBtn.addEventListener("click", openNav);
closeMenuBtn.addEventListener("click", closeNav);

btnFeature.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let prevBtn = document.querySelector(".mainBtnFeature");
    prevBtn.classList.remove("mainBtnFeature");

    let mainBtn = event.target;
    mainBtn.classList.add("mainBtnFeature");

    const typeBtn = mainBtn.dataset.type;
    updateContent(typeBtn);
  });
});

footerListItem.forEach((item) => {
  item.addEventListener("mouseenter", (event) => {
    let mainItem = event.target;
    mainItem.classList.add("active");
    console.log(mainItem)
  });
    item.addEventListener("mouseleave",()=>{
      setTimeout(() => {
        item.classList.remove('active')
      }, 100);
    }) 


});

document.addEventListener("DOMContentLoaded", () => {
  updateContent("instantRent");
});

function _id(element) {
  return document.getElementById(element);
}

function _selector(element) {
  return document.querySelector(element);
}
