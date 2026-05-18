// ========== INTERACTIONS & MICRO-FEEDBACK ==========

// Smooth scroll for "Learn more" button
const learnBtn = document.getElementById('learnMoreBtn');
if (learnBtn) {
  learnBtn.addEventListener('click', () => {
    const specsSection = document.getElementById('specs');
    if (specsSection) {
      specsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// "Buy Now" primary CTA (hero)
const buyNowBtn = document.getElementById('buyNowBtn');
if (buyNowBtn) {
  buyNowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showPremiumToast('✨ Solar Orange added to cart — Proceed to checkout?');
    // Optional micro interaction: animate button
    buyNowBtn.style.transform = 'scale(0.98)';
    setTimeout(() => { buyNowBtn.style.transform = ''; }, 150);
  });
}

// Final CTA button
const finalBuyBtn = document.getElementById('finalBuyBtn');
if (finalBuyBtn) {
  finalBuyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showPremiumToast('🔥 Pre-order confirmed! You will receive confirmation email.');
  });
}

// Toast notification system (clean micro-interaction)
function showPremiumToast(message) {
  // Remove existing toast if any
  const existingToast = document.querySelector('.premium-toast');
  if (existingToast) existingToast.remove();
  
  const toast = document.createElement('div');
  toast.className = 'premium-toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: #1e293b;
    color: white;
    padding: 12px 24px;
    border-radius: 60px;
    font-size: 0.85rem;
    font-weight: 500;
    z-index: 9999;
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.2);
    backdrop-filter: blur(8px);
    background: rgba(0,0,0,0.85);
    border: 1px solid rgba(255,140,66,0.4);
    pointer-events: none;
    animation: fadeInUp 0.25s ease-out;
    font-family: 'Inter', sans-serif;
  `;
  document.body.appendChild(toast);
  
  // Add keyframe animation dynamically if not exists
  if (!document.querySelector('#toastAnimStyle')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'toastAnimStyle';
    styleSheet.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateX(-50%) translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      }
    `;
    document.head.appendChild(styleSheet);
  }
  
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.2s ease-in forwards';
    setTimeout(() => toast.remove(), 200);
  }, 2800);
}

// Add fadeOut keyframe
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
  @keyframes fadeOut {
    to { opacity: 0; transform: translateX(-50%) translateY(10px); visibility: hidden; }
  }
`;
if (!document.querySelector('#fadeOutStyle')) {
  fadeOutStyle.id = 'fadeOutStyle';
  document.head.appendChild(fadeOutStyle);
}

// Hover micro-interaction for all CTA buttons (subtle)
const allButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
allButtons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transition = 'all 0.2s ease';
  });
});

// Simple dynamic year or console greeting (optional but nice)
console.log('Solar Orange Edition — Premium landing ready');
