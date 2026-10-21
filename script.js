// PERSONALIZE THESE TWO LINES BEFORE SHARING
const FRIEND_NAME = "birthday girl"; // Put her name or nickname here.
const YOUR_NAME = "your name";       // Put your name here.

document.querySelectorAll(".friend-name").forEach(el => el.textContent = FRIEND_NAME);
document.querySelector(".signoff strong").textContent = `${YOUR_NAME} ♡`;
document.title = `Chapter 18 — Happy Birthday, ${FRIEND_NAME} ♡`;

const pepTalks = {
  overwhelmed: {
    kicker: "when everything feels too big",
    title: "Shrink the task, not the dream.",
    body: "You don't have to conquer the entire syllabus today. Choose one small topic, revise it carefully, practise a few questions, and let that be a real step forward. Small, steady effort adds up. You can make a plan, ask a teacher or friend for help, and adjust it as you learn what works. One chapter at a time, birthday girl. ♡"
  },
  mock: {
    kicker: "a mock test is information",
    title: "A score is feedback—not a prophecy.",
    body: "A difficult mock can sting, especially when you care a lot. Give yourself a moment, then look for patterns: which topics need revision, what kinds of mistakes happened, and what you can practise next. You don't need to fix everything at once. One test cannot tell the whole story of your ability or your future. Learn from it, then keep going."
  },
  tired: {
    kicker: "your reminder to be human",
    title: "Rest is part of preparation.",
    body: "You are not a machine with a highlighter. Food, water, sleep, movement, and breaks help you take care of yourself while you study. If you're exhausted, a pause is allowed. You don't have to earn rest by reaching a breaking point. Look after the person who is doing all this work: you."
  },
  comparison: {
    kicker: "come back to your own path",
    title: "Someone else's pace is not your deadline.",
    body: "It's easy to compare study hours, scores, notes and progress, especially when everyone seems to be doing brilliantly online. But you don't know their whole story, and their path isn't a measurement of yours. Focus on your next useful step, and talk to someone you trust if the pressure feels too heavy. You're a person, not a leaderboard. ♡"
  }
};

document.querySelectorAll(".pep-card").forEach(button => {
  button.addEventListener("click", () => {
    const data = pepTalks[button.dataset.pep];
    document.getElementById("pep-kicker").textContent = data.kicker;
    document.getElementById("pep-title").textContent = data.title;
    document.getElementById("pep-body").textContent = data.body;
    const panel = document.getElementById("pep-message");
    panel.hidden = false;
    panel.scrollIntoView({ behavior: "smooth", block: "center" });
    sparkle(button);
  });
});
document.getElementById("close-pep").addEventListener("click", () => {
  document.getElementById("pep-message").hidden = true;
});

const tinyLines = [
  "Eighteen looks good on you. The adulting tutorial is unfortunately still buffering. ♡",
  "Reminder: drink water, stretch your shoulders, and stop arguing with imaginary people in your head. 😂",
  "You can chase big dreams and still take a nap. This is a balanced lifestyle announcement.",
  "Main character energy. Side quest: find a snack. ✨",
  "You don't need to have every answer at 18. Most adults are just confidently googling things."
];
let tinyIndex = 0;
document.getElementById("hero-note").addEventListener("click", () => {
  tinyIndex = (tinyIndex + 1) % tinyLines.length;
  document.getElementById("hero-note-text").textContent = tinyLines[tinyIndex];
  showToast("tiny pep talk delivered ♡");
  sparkle(document.getElementById("hero-note"));
});

const wishes = [
  { icon: "🎀", text: "I hope this year brings you confidence that feels calm, not pressured." },
  { icon: "🩺", text: "I hope your hard work brings you closer to the future you dream about." },
  { icon: "🌷", text: "I hope you find people who make life feel kinder and lighter." },
  { icon: "☀️", text: "I hope you remember to celebrate progress, not only big results." },
  { icon: "✨", text: "I hope you discover new things about yourself and feel proud of who you're becoming." },
  { icon: "🎂", text: "I hope 18 gives you stories to laugh about, courage to grow, and plenty of cake." }
];
let wishIndex = 0;
document.getElementById("next-wish").addEventListener("click", () => {
  wishIndex = (wishIndex + 1) % wishes.length;
  document.getElementById("wish-icon").textContent = wishes[wishIndex].icon;
  document.getElementById("wish-text").textContent = wishes[wishIndex].text;
  document.getElementById("wish-count").textContent = `wish ${wishIndex + 1} of ${wishes.length}`;
  sparkle(document.getElementById("next-wish"));
});

document.getElementById("open-letter").addEventListener("click", event => {
  const letter = document.getElementById("letter-content");
  letter.hidden = !letter.hidden;
  event.currentTarget.textContent = letter.hidden ? "open your letter 💌" : "close your letter ↑";
  if (!letter.hidden) {
    letter.scrollIntoView({ behavior: "smooth", block: "center" });
    confetti();
  }
});
document.getElementById("top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2000);
}
function sparkle(element) {
  const rect = element.getBoundingClientRect();
  const chars = ["✦", "♡", "✧", "✿"];
  for (let i = 0; i < 9; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.textContent = chars[Math.floor(Math.random() * chars.length)];
    p.style.left = `${rect.left + rect.width / 2}px`;
    p.style.top = `${rect.top + rect.height / 2}px`;
    p.style.color = ["#bd6b60", "#b8a4d2", "#d7a34e"][i % 3];
    p.style.setProperty("--x", `${Math.random() * 140 - 70}px`);
    p.style.setProperty("--y", `${Math.random() * -120 - 20}px`);
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1300);
  }
}
function confetti() {
  const chars = ["✦", "♡", "✧", "🎀", "✨"];
  for (let i = 0; i < 28; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.textContent = chars[i % chars.length];
    p.style.left = `${Math.random() * 100}vw`;
    p.style.top = `${15 + Math.random() * 50}vh`;
    p.style.color = ["#ffe4bc", "#f7d5ce", "#ded1f0", "#ffffff"][i % 4];
    p.style.setProperty("--x", `${Math.random() * 170 - 85}px`);
    p.style.setProperty("--y", `${Math.random() * 200 - 140}px`);
    p.style.fontSize = `${14 + Math.random() * 15}px`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1400);
  }
}
