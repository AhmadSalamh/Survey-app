<template>
  <div class="loader">
    <div class="dot dot-1"></div>
    <div class="dot dot-2"></div>
    <div class="dot dot-3"></div>
  </div>
</template>
<style scoped>
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  height: 100%;
  transform: translate(-50%);
}

.dot {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: #000;
  animation-duration: 0.9s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.dot-1 {
  animation-name: loader-dot-1;
}

.dot-2 {
  animation-name: loader-dot-2;
}

.dot-3 {
  animation-name: loader-dot-3;
}

@keyframes loader-dot-1 {
  0%,
  40%,
  100% {
    transform: scale(0.4);
    opacity: 0.7;
  }
  20% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes loader-dot-2 {
  0%,
  20%,
  60%,
  100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(15px);
  }
  80% {
    transform: translateX(-15px);
  }
}

@keyframes loader-dot-3 {
  0%,
  40%,
  100% {
    transform: scale(0.4);
    opacity: 0.7;
  }
  60% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
