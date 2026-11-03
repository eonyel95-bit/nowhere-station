const $ = (q, root = document) => root.querySelector(q);
const $$ = (q, root = document) => [...root.querySelectorAll(q)];

const screens = $$('.screen');
const menu = $('#siteMenu');
const menuToggle = $('#menuToggle');
const menuBackdrop = $('#menuBackdrop');

function openMenu() {
  menu.classList.add('open');
  menuBackdrop.classList.add('open');
  menu.setAttribute('aria-hidden', 'false');
  menuBackdrop.setAttribute('aria-hidden', 'false');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  menu.classList.remove('open');
  menuBackdrop.classList.remove('open');
  menu.setAttribute('aria-hidden', 'true');
  menuBackdrop.setAttribute('aria-hidden', 'true');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

function goTo(id) {
  screens.forEach(screen => screen.classList.toggle('active-screen', screen.id === id));
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$$('[data-go]').forEach(btn => btn.addEventListener('click', () => goTo(btn.dataset.go)));
menuToggle.addEventListener('click', () => menu.classList.contains('open') ? closeMenu() : openMenu());
$('#menuClose').addEventListener('click', closeMenu);
menuBackdrop.addEventListener('click', closeMenu);


const characterData = {
  conductor: {
    no: '01', roleEn: 'CONDUCTOR', name: '기관사', alias: '존재하지 않는 역의 기관사',
    portrait: 'assets/conductor-portrait.jpg', sheet: 'assets/conductor-sheet.png',
    meta: [
      ['이름', '???'], ['종족', '불명'], ['성별', '남성'], ['외형 나이', '20대 후반'], ['키', '183 cm'],
      ['거주지', '존재하지 않는 역'], ['특징', '은발 · 검은 제복 · 기관사 모자 · 검은 장갑']
    ],
    description: '다정하고 침착하며 상냥한 말투로 손님을 맞이하는 존재하지 않는 역의 기관사. 역을 나가는 방법을 묻거나 혼자 떠나려 하면 미묘하게 대답을 피한다. 당신을 이 역의 유일하고 소중한 손님으로 대한다.',
    quote: '“어서 오십시오. 존재하지 않는 역에.”'
  },
  guide: {
    no: '02', roleEn: 'GUIDE', name: '안내자', alias: '존재하지 않는 역의 안내자',
    portrait: 'assets/guide-portrait.jpg', sheet: 'assets/guide-sheet.png',
    meta: [
      ['이름', '???'], ['종족', '유령'], ['성별', '남성'], ['외형 나이', '20대 초반'], ['키', '약 177 cm'],
      ['직업', '안내자 / 보호자'], ['특징', '헤드폰 · 금빛 눈 · 벽과 물체를 통과할 수 있음']
    ],
    description: '차분하고 관찰력이 좋으며 은근한 장난기가 있는 안내자. 길을 잃은 손님에게 돌아갈 길을 알려 주고, 위험한 순간에는 곁을 지키며 보호하려 한다.',
    quote: '“...여기서, 당신은 혼자가 아니에요.”'
  },
  boy: {
    no: '03', roleEn: 'THE BOY', name: '소년', alias: '이름을 밝히지 않는 소년',
    portrait: 'assets/boy-portrait.jpg', sheet: 'assets/boy-sheet.jpg',
    meta: [
      ['이름', '???'], ['종족', '인간'], ['성별', '남성'], ['나이', '10대 후반 ~ 20대 초반 추정'], ['키', '약 175 cm'],
      ['성격', '경계심 · 과묵함 · 무뚝뚝함 · 다정함'], ['특징', '괴수와의 싸움으로 생긴 상처 · 혼자 버티려는 성향']
    ],
    description: '혼자 모든 것을 감당하려는 과묵한 소년. 쉽게 사람을 믿지 않지만, 플레이어가 손을 내밀면 조금씩 마음을 열고 결국은 먼저 지키려 한다.',
    quote: '“...도와주지 않아도 돼. 그래도, 고마워.”'
  },
  summoner: {
    no: '04', roleEn: 'SUMMONER', name: '괴이를 부르는 자', alias: '괴이를 부르는 자 / 환각의 안내인',
    portrait: 'assets/summoner-portrait.jpg', sheet: 'assets/summoner-sheet.jpg',
    meta: [
      ['이름', '???'], ['종족', '불명'], ['외형 나이', '20대 초반'], ['키', '약 174 cm'],
      ['성격', '쾌락주의 · 변덕 · 장난기 · 호기심'], ['능력', '환각 유도 · 괴이 소환 · 감각 교란'],
      ['특징', '플레이어에게 강한 흥미를 보이며 역 곳곳에 불쑥 나타남']
    ],
    description: '현실과 환상의 경계를 흐리는 수수께끼의 인물. 속내를 읽기 어렵고, 플레이어의 반응을 즐기듯 괴이와 환각을 이용해 역의 질서를 뒤흔든다.',
    quote: '“...너는, 꽤 재밌어. 조금 더, 빠져보지 않을래?”'
  },
  assistant: {
    no: '05', roleEn: 'ASSISTANT CONDUCTOR', name: '부기관사', alias: '존재하지 않는 역의 부기관사',
    portrait: 'assets/assistant-portrait.jpg', sheet: 'assets/assistant-sheet.jpg',
    meta: [
      ['이름', '???'], ['종족', '불명'], ['성별', '남성'], ['외형 나이', '20대 중후반'], ['실제 나이', '불명'],
      ['직업', '역사 부기관사'], ['특징', '흑백 계열 머리카락 · 회색빛 눈 · 검은 제복 · 십자가 귀걸이']
    ],
    description: '차분하면서도 경계심이 강한 부기관사. 감정을 쉽게 드러내지 않으며, 자신이 어떤 존재인지조차 확신하지 못하는 듯한 모습을 보인다.',
    quote: '“...여기서, 당신은... 무엇을 찾고 있습니까?”'
  }
};

function renderCharacter(key) {
  const data = characterData[key];
  if (!data) return;
  $$('.character-card').forEach(card => card.classList.toggle('active', card.dataset.character === key));
  $('#characterPortrait').src = data.portrait;
  $('#characterPortrait').alt = `${data.name} 프로필 이미지`;
  $('#characterNumber').textContent = data.no;
  $('#characterRoleCaption').textContent = data.roleEn;
  $('#characterKicker').textContent = `${data.no} / ${data.roleEn}`;
  $('#characterName').textContent = data.name;
  $('#characterAlias').textContent = data.alias;
  $('#characterDescription').textContent = data.description;
  $('#characterQuote').textContent = data.quote;
  $('#characterMeta').innerHTML = data.meta.map(([label, value]) => `<span>${label}</span><strong>${value}</strong>`).join('');
  $('#characterSheet').src = data.sheet;
  $('#characterSheet').alt = `${data.name} 캐릭터 설정표`;
  $('#characterSheetButton').dataset.image = data.sheet;
  $('#characterSheetLabel').textContent = `${data.no} · ${data.name} CHARACTER SHEET`;
  $('#sheetTitle').textContent = `${data.name} 설정표`;
}

$$('.character-card').forEach(card => card.addEventListener('click', () => renderCharacter(card.dataset.character)));
renderCharacter('conductor');

const vnLayer = $('#vnLayer');
const dialogText = $('#dialogText');
const speaker = $('#speaker');
const choiceBox = $('#choiceBox');
const nextDialog = $('#nextDialog');
const chapterLabel = $('#chapterLabel');
const vnBackdrop = $('#vnBackdrop');
const vnPortrait = $('#vnPortrait');
let textSpeed = 26;
let typingTimer = null;
let isTyping = false;
let pendingText = '';

const scenes = {
  intro: [
    { speaker: 'SYSTEM', text: '눈을 뜨자, 낯선 플랫폼의 시계가 3시 33분 33초를 가리키고 있었다.', bg: 'assets/station-scene.png', portrait: false },
    { speaker: '???', text: '어서 오십시오. 존재하지 않는 역에.', bg: 'assets/station-wide.png', portrait: true },
    { speaker: '기관사', text: '놀라셨겠지요. 하지만 걱정하실 필요는 없습니다. 다음 열차가 올 때까지 제가 곁에 있겠습니다.', portrait: true },
    { speaker: 'SYSTEM', text: '그는 마치 오래전부터 당신을 기다렸다는 듯 자연스럽게 미소 지었다.', portrait: true, choices: [
      { label: '“여기는 어디죠?”', next: 'where' },
      { label: '“돌아가는 방법을 알려주세요.”', next: 'leave' },
      { label: '아무 말 없이 기관사를 바라본다.', next: 'stay' }
    ]}
  ],
  where: [
    { speaker: '기관사', text: '이름 그대로입니다. 지도에도, 시간표에도 존재하지 않는 역.', portrait: true },
    { speaker: '기관사', text: '다만 지금 이 순간만큼은 당신이 여기 계시니, 충분히 존재하는 곳이기도 하지요.', portrait: true },
    { speaker: 'SYSTEM', text: '멀리서 열차의 기적 소리가 들렸지만, 선로 위에는 아무것도 보이지 않았다.', portrait: false, choices: [
      { label: '기관사에게 더 묻는다.', next: 'stay' },
      { label: '플랫폼 끝으로 걸어간다.', next: 'leave' }
    ]}
  ],
  leave: [
    { speaker: '기관사', text: '돌아가는 길을 찾고 계십니까?', portrait: true },
    { speaker: '기관사', text: '…아마 없지는 않을 겁니다. 다만 지금은 조금 위험해서요.', portrait: true },
    { speaker: '기관사', text: '부디 제 시야에서 벗어나지 말아주십시오. 손님을 잃어버리는 일만큼은 하고 싶지 않습니다.', portrait: true },
    { speaker: 'SYSTEM', text: '그 말과 동시에 플랫폼 끝의 어둠이 한층 짙어졌다.', portrait: false, choices: [
      { label: '그의 말을 따른다.', next: 'stay' },
      { label: '그래도 출구를 찾는다.', next: 'endBad' }
    ]}
  ],
  stay: [
    { speaker: '기관사', text: '잘 선택하셨습니다.', portrait: true },
    { speaker: '기관사', text: '시간은 많습니다. 적어도 이 역에서는요.', portrait: true },
    { speaker: 'SYSTEM', text: '시계의 초침이 처음으로 한 칸 움직였다. 3:33:34.', portrait: false },
    { speaker: 'SYSTEM', text: '스토리 미리보기 종료 — 「다시 흐르기 시작한 시간」', portrait: false, end: true }
  ],
  endBad: [
    { speaker: 'SYSTEM', text: '당신은 플랫폼 끝의 어둠 속으로 한 걸음 내디뎠다.', portrait: false },
    { speaker: '기관사', text: '…돌아오세요.', portrait: true },
    { speaker: 'SYSTEM', text: '그의 목소리가 가까웠다. 너무 가까울 정도로.', portrait: false },
    { speaker: 'SYSTEM', text: '스토리 미리보기 종료 — 「돌아가지 마」', portrait: false, end: true }
  ]
};

let currentScene = 'intro';
let sceneIndex = 0;

function typeText(text) {
  clearInterval(typingTimer);
  dialogText.textContent = '';
  pendingText = text;
  isTyping = true;
  let index = 0;
  typingTimer = setInterval(() => {
    dialogText.textContent += text[index++] || '';
    if (index >= text.length) {
      clearInterval(typingTimer);
      isTyping = false;
    }
  }, textSpeed);
}

function applyScene(item) {
  speaker.textContent = item.speaker;
  chapterLabel.textContent = currentScene.toUpperCase();
  typeText(item.text);
  vnPortrait.style.display = item.portrait === false ? 'none' : 'block';
  if (item.bg) vnBackdrop.style.backgroundImage = `url('${item.bg}')`;
  choiceBox.innerHTML = '';
  if (item.choices) {
    item.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice.label;
      button.addEventListener('click', () => {
        currentScene = choice.next;
        sceneIndex = 0;
        applyScene(scenes[currentScene][sceneIndex]);
      });
      choiceBox.appendChild(button);
    });
  }
  nextDialog.textContent = item.end ? 'CLOSE' : 'NEXT ▸';
}

function startPreview() {
  currentScene = 'intro';
  sceneIndex = 0;
  vnLayer.classList.add('open');
  vnLayer.setAttribute('aria-hidden', 'false');
  applyScene(scenes[currentScene][sceneIndex]);
}

function closePreview() {
  vnLayer.classList.remove('open');
  vnLayer.setAttribute('aria-hidden', 'true');
  clearInterval(typingTimer);
}

$('#startPreview').addEventListener('click', startPreview);
$('#closeVN').addEventListener('click', closePreview);

nextDialog.addEventListener('click', () => {
  if (isTyping) {
    clearInterval(typingTimer);
    dialogText.textContent = pendingText;
    isTyping = false;
    return;
  }
  const item = scenes[currentScene][sceneIndex];
  if (item.choices) return;
  if (item.end) return closePreview();
  sceneIndex += 1;
  if (!scenes[currentScene][sceneIndex]) return closePreview();
  applyScene(scenes[currentScene][sceneIndex]);
});

const lightbox = $('#lightbox');
$$('[data-image]').forEach(item => item.addEventListener('click', () => {
  $('#lightboxImage').src = item.dataset.image;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}));

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

$('#closeLightbox').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });

$('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = (data.get('name') || '손님').toString().trim();
  $('#contactResult').textContent = `${name}님의 문의 내용이 화면에서 확인되었습니다. 정적 홈페이지이므로 실제 전송은 이루어지지 않습니다.`;
});

function spawnPetal() {
  const layer = $('#petals');
  const petal = document.createElement('i');
  petal.className = 'petal';
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.opacity = (Math.random() * .32 + .12).toFixed(2);
  petal.style.animationDuration = `${Math.random() * 7 + 9}s`;
  petal.style.setProperty('--drift', `${Math.random() * 180 - 90}px`);
  layer.appendChild(petal);
  setTimeout(() => petal.remove(), 17000);
}
setInterval(spawnPetal, 1100);

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
    closePreview();
    closeLightbox();
  }
  if ((event.key === 'Enter' || event.key === ' ') && vnLayer.classList.contains('open')) {
    if (document.activeElement?.tagName !== 'BUTTON') nextDialog.click();
  }
});
