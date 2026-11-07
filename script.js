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

// ==========================================================================
// All-Rounder 6-Axis Radar Chart (Hexagon)
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("hexagonChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "학업 성실도",
        "대외 소통·홍보",
        "전공 리더십",
        "체력·팀플레이",
        "실전 공학 감각",
        "호기심·배움"
      ],
      datasets: [
        {
          label: "역량 밸런스 지수",
          data: [95, 95, 90, 90, 85, 95],
          backgroundColor: "rgba(56, 189, 248, 0.22)", // 은은한 시안 블루 면
          borderColor: "#38bdf8",                       // 겉 테두리 네온 블루
          borderWidth: 2,
          pointBackgroundColor: "#2563eb",             // 꼭짓점 원형 점
          pointBorderColor: "#ffffff",
          pointBorderWidth: 1.5,
          pointRadius: 4.5,
          pointHoverRadius: 6.5,
          pointHoverBackgroundColor: "#ffffff",
          pointHoverBorderColor: "#38bdf8"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20,
            display: false // 안쪽 눈금 숫자 숨김 (간결한 비주얼)
          },
          grid: {
            color: "rgba(255, 255, 255, 0.12)", // 육각 그물망 선
            lineWidth: 1
          },
          angleLines: {
            color: "rgba(255, 255, 255, 0.15)"  // 중심에서 뻗어나가는 축 선
          },
          pointLabels: {
            color: "#e2e8f0",
            font: {
              size: 12.5,
              weight: "600",
              family: "Pretendard Variable, Pretendard, sans-serif"
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false // 상단 범례 생략 (카드 헤더로 대체)
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          titleColor: "#38bdf8",
          bodyColor: "#f8fafc",
          borderColor: "rgba(255, 255, 255, 0.15)",
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          callbacks: {
            label: function (context) {
              return `평가 점수: ${context.raw}점 / 100점`;
            }
          }
        }
      }
    }
  });
});

// 상장 이미지 팝업 열기 함수
function openImageModal(imageSrc, captionText) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');

  modalImg.src = imageSrc;
  modalCaption.textContent = captionText;

  // 모달 표시 및 부드러운 페이드인
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
  }, 10);

  // 모달이 열려있는 동안 뒷배경 스크롤 방지
  document.body.style.overflow = 'hidden';
}

// 상장 이미지 팝업 닫기 함수
function closeImageModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.add('opacity-0');

  setTimeout(() => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.getElementById('modalImg').src = '';
  }, 300);

  // 뒷배경 스크롤 복원
  document.body.style.overflow = 'auto';
}

// 모달 바깥 어두운 배경 클릭 시 닫기
document.getElementById('imageModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeImageModal();
  }
});

// 키보드 ESC 키 누르면 모달 닫기
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('imageModal');
    if (!modal.classList.contains('hidden')) {
      closeImageModal();
    }
  }
});

// ==========================================================================
// Timeline Scroll Fade-In Interaction ver_up_26.11.06
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");
  if (!timelineItems.length) return;

  timelineItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
  });

  const timelineObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  timelineItems.forEach((item) => timelineObserver.observe(item));
});


// ==========================================================================
// Contact Email Click-to-Copy Interaction ver_up_26.11.06
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
  const copyButtons = document.querySelectorAll(".copy-btn");
  const toast = document.getElementById("copyToast");

  if (!copyButtons.length || !toast) return;

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(showToast);
      } else {
        // Fallback for older browsers or non-HTTPS
        const tempInput = document.createElement("input");
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        showToast();
      }
    });
  });

  function showToast() {
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2400);
  }
});