const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const date = document.querySelector("#date");
const nav = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

navToggle.addEventListener("click", function () {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

date.innerHTML = new Date().getFullYear();

const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = btn.getAttribute("href").slice(1);
    const element = document.getElementById(target);
    const navHeight = nav.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;
    const fixedNav = nav.classList.contains("fixed-nav");
    if (!fixedNav) {
      position -= navHeight;
    }
    if (navHeight > 82) {
      position += linksContainerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

const faq = document.querySelector(".questions");

const faqs = [
  {
    title: "do you accept all major credit cards?",
    question:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint modi natus ut voluptate? Nulla deleniti porro illum, dolorem obcaecati fugit!",
  },
  {
    title: "How can I book a tour?",
    question:
      "You can book our tour offers right from the website and reserve them there. If you wish a tailor-made tour, you can send us an email and we will be happy to create an itinerary for you.",
  },
  {
    title: "What languages do you offer tours in?",
    question:
      "Generally we started Lviv Buddy Tours with a focus on high-quality tours in English and German. However, almost all our guides speak fluent Ukrainian and Russian as well, of course. Usually we will update our website with our exact offers as soon as possible, but if you need another language, you can always ask. In the long term we plan to add Polish and some other languages to our offers. And we would love to offer tours in Lithuanian, but there are not many people who speak it and could be a guide here. If you know a good guide with great language skills who is looking for a job, we are always happy about a tip!",
  },
  {
    title: "How many people are typically on your tours?",
    question:
      "Our private tours are only for the people you book for. If you are alone, it will just be you and your guide. If you are a couple, just the two of you and your guide, and so on. We believe this is the best type of tour, so that it can be personalised to you, go at your own pace, and so that you can have the full attention of your guide for the duration of the tour. ",
  },
];

faq.innerHTML = faqs
  .map((item, index) => {
    const { title, question } = item;
    return `<article class="question" id=${index}>
  <div class="question-header">
    <p>${title}</p>
    <button type="button" class="question-btn">
      <span class="plus-icon">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </span>
      <span class="minus-icon"
        ><i class="fa fa-minus" aria-hidden="true"></i
      ></span>
    </button>
  </div>
  <div class="question-text">
    <p>
      ${question}
    </p>
  </div>
</article>`;
  })
  .join("");

const questionBtn = document.querySelectorAll(".question-btn");

questionBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget.parentElement.parentElement;
    target.classList.toggle("show-text");
  });
});

// function firstNonRepeatingLetter(s) {
//   let word = s.split("");
// }

function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
      return s.charAt(i);
    }
  }
  return "";
}

console.log(firstNotRepeatingCharacter("ssssaaa"));
