/* Cinematic gradient background */
.bg-cinematic {
  background: radial-gradient(circle at 20% 20%, rgba(76, 0, 255, 0.25), transparent 60%),
              radial-gradient(circle at 80% 80%, rgba(0, 255, 200, 0.2), transparent 60%),
              #000;
}

/* Soft bloom effect */
.bloom {
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.15));
}

/* Fade-in animation */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
