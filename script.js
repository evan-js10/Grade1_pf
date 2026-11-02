// 1. 카드 플립 인터랙션 (카드 클릭 시 뒤집힘)
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});

// 2. 모달 팝업 열기 / 닫기 동작
const modal = document.getElementById('infoModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.modal-close');

// 버튼 클릭 시 열기
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// 닫기(X) 버튼 클릭 시 닫기
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// 바깥 검은 배경 클릭 시 닫기
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});