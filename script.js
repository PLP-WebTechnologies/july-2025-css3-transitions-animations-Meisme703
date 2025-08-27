/* ===== General Styles ===== */
body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f4fafd;
  color: #232931;
  margin: 0;
  padding: 0;
}
header, footer {
  background: #393e46;
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
}
section {
  margin: 2rem auto;
  max-width: 700px;
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}
h1, h2 {
  text-align: center;
}

/* ===== Part 1: Transitions & Keyframes ===== */

/* Button with smooth color/scale transition */
.animated-btn {
  padding: 0.8rem 2rem;
  background: #00adb5;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}
.animated-btn:hover {
  background: #393e46;
  transform: scale(1.1) rotate(-3deg);
}

/* Fade & slide box - keyframe animation on load */
.fade-box {
  opacity: 0;
  transform: translateY(40px);
  background: #b4f8e9;
  padding: 1.2rem 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  animation: fadeSlideIn 1.2s forwards;
}
@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Spinning box - continuous animation */
.spin-box {
  margin: 1.5rem auto 0 auto;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #00adb5, #393e46);
  border-radius: 10px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ===== Part 2 & 3: Boxes, Card, Modal ===== */

/* Animated box for JS trigger */
.box {
  margin: 2rem auto;
  width: 70px;
  height: 70px;
  background: #ffcc29;
  border-radius: 12px;
  transition: transform 0.6s cubic-bezier(.65,-0.12,.51,1.39);
}

/* Class added for animation */
.move {
  transform: translateX(270px) scale(1.2) rotate(15deg);
}

/* Card flip animation */
.card-container {
  perspective: 700px;
  display: inline-block;
  margin: 1rem;
}
.card {
  width: 100px;
  height: 140px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(.4,2,.6,1);
  cursor: pointer;
}
.card.flipped {
  transform: rotateY(180deg);
}
.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.3rem;
}
.card-front {
  background: #00adb5;
  color: #fff;
}
.card-back {
  background: #393e46;
  color: #fff;
  transform: rotateY(180deg);
}

/* Modal styles & animation */
.modal {
  display: none;
  position: fixed;
  z-index: 99;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(40,52,62,0.7);
  align-items: center;
  justify-content: center;
  animation: none;
}
.modal.show {
  display: flex;
  animation: modalIn 0.7s forwards;
}
.modal.hide {
  animation: modalOut 0.6s forwards;
}
@keyframes modalIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes modalOut {
  from { opacity: 1; }
  to   { opacity: 0; }
}
.modal-content {
  background: #fff;
  color: #232931;
  border-radius: 12px;
  padding: 2rem 2.5rem;
  min-width: 250px;
  min-height: 100px;
  box-shadow: 0 8px 32px rgba(30,40,60,0.15);
  position: relative;
  animation: slideUp 0.5s;
}
@keyframes slideUp {
  from { transform: translateY(60px); }
  to   { transform: translateY(0); }
}
.close {
  position: absolute;
  top: 1rem; right: 1rem;
  font-size: 1.5rem;
  color: #393e46;
  cursor: pointer;
}

/* ===== Responsive ===== */
@media (max-width: 600px) {
  section {
    padding: 1rem;
  }
  .modal-content {
    padding: 1rem;
    min-width: unset;
  }
}