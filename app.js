const fileUpload = document.getElementById("fileUpload");
const fullName = document.getElementById("fullName");
const profession = document.getElementById("profession");
const displayName = document.getElementById("display-name");
const displayProfession = document.getElementById("display-profession");
const inputLinks = document.querySelectorAll('input[type="url"], input[type="email"]')
const cardColor = document.getElementById("card-color");
const textColor = document.getElementById("text-color");
const iconLinks = document.querySelectorAll("a")
const cardBtn = document.getElementById("get-card-btn");

const cardContainer = document.getElementById("card-container");
const icons = document.querySelectorAll(".links-container > a");
const profileImage = document.getElementById("profile-image");

fullName.addEventListener("input", (event) => {
  displayName.textContent = event.currentTarget.value;
});

profession.addEventListener("input", (event) => {
  displayProfession.textContent = event.currentTarget.value;
});

function getLinks() {
  icons.forEach((item) => {
    item.style.display = "block";
  });
  
  for (let i = 0; i <inputLinks.length; i++) {
    if (!inputLinks[i].value) {
        iconLinks[i].style.display = "none";
    } else if (inputLinks[i].id == "input-email-link") {
       inputLinks[i].href = `mailto:${inputLinks[i].value}`;
     } else {
        iconLinks[i].href = inputLinks[i].value;
     }
   }

  var opt = {
    margin: 0,
    filename: "digitalcard.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 1, backgroundColor: null },

    jsPDF: {
      unit: "in",
      format: "letter",
      orientation: "landscape",
    },
  };

  const element = document.getElementById("card-container");
  html2pdf().set(opt).from(element).save();
}

cardBtn.addEventListener("click", getLinks);

// change card background color
cardColor.addEventListener("input", (e) => {
  cardContainer.style.backgroundColor = e.target.value;
});

// change text color, icons color and profile border color
textColor.addEventListener("input", (e) => {
  displayName.style.color = e.target.value;
  displayProfession.style.color = e.target.value;
  profileImage.style.borderColor = e.target.value;
  icons.forEach((item) => {
    item.style.color = e.target.value;
  });
});

//displays the selected image
fileUpload.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(fileUpload.files[0]);
  reader.onload = () => {
    profileImage.setAttribute("src", reader.result);
  };
};
