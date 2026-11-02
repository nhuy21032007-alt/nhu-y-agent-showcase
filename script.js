// Fixed local-only walkthrough. It makes no network requests and accepts no user data.
const runButton = document.querySelector("#run-demo");
const demoState = document.querySelector("#demo-state");
const timelineItems = [...document.querySelectorAll("#demo-timeline li")];
const demoResult = document.querySelector("#demo-result");
const openAll = document.querySelector("#open-all");
const closeAll = document.querySelector("#close-all");
const workflowItems = [...document.querySelectorAll(".workflow-item")];
const stepLabels = ["KIỂM TRA", "PHIÊN ÂM", "PHÂN TÍCH", "TỔNG HỢP"];
let activeRun = false;
let timerIds = [];

function resetDemo() {
  timelineItems.forEach((item, index) => {
    item.classList.remove("is-done", "is-active");
    item.querySelector(".step-state").textContent = index === 0 ? "SẴN SÀNG" : "CHỜ";
  });
  demoState.textContent = "CHỜ CHẠY";
  demoResult.hidden = true;
}
function runDemo() {
  if (activeRun) return;
  activeRun = true;
  runButton.disabled = true;
  runButton.textContent = "Đang trình diễn…";
  resetDemo();
  let index = 0;
  const advance = () => {
    if (index > 0) {
      timelineItems[index - 1].classList.remove("is-active");
      timelineItems[index - 1].classList.add("is-done");
      timelineItems[index - 1].querySelector(".step-state").textContent = "HOÀN TẤT";
    }
    if (index >= timelineItems.length) {
      demoState.textContent = "KỊCH BẢN MINH HỌA";
      demoResult.hidden = false;
      runButton.disabled = false;
      runButton.innerHTML = 'Chạy lại kịch bản <span aria-hidden="true">↻</span>';
      activeRun = false;
      timerIds = [];
      return;
    }
    const current = timelineItems[index];
    current.classList.add("is-active");
    current.querySelector(".step-state").textContent = "ĐANG MÔ PHỎNG";
    demoState.textContent = `${stepLabels[index]} · DEMO`;
    index += 1;
    timerIds.push(window.setTimeout(advance, 520));
  };
  advance();
}
runButton.addEventListener("click", runDemo);
openAll.addEventListener("click", () => workflowItems.forEach((item) => { item.open = true; }));
closeAll.addEventListener("click", () => workflowItems.forEach((item) => { item.open = false; }));
document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener("click", () => {
  const target = document.querySelector(link.getAttribute("href"));
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}));
