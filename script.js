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
        "체력·원팀 정신",
        "실전 공학 감각",
        "호기심·도전정신"
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