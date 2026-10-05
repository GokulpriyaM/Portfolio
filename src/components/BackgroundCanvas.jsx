import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // GitHub Constellation Grid Nodes
    const nodes = [];
    const nodeCount = 50;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: i % 4 === 0 ? '#8957e5' : i % 4 === 1 ? '#58a6ff' : i % 4 === 2 ? '#3fb950' : '#d2a8ff',
        alpha: Math.random() * 0.4 + 0.1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
      });
    }

    // Anime.js breathing loop for node pulse
    anime({
      targets: nodes,
      alpha: [
        { value: 0.7, duration: 3000, easing: 'easeInOutSine' },
        { value: 0.1, duration: 3000, easing: 'easeInOutSine' }
      ],
      loop: true,
      delay: anime.stagger(150)
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw GitHub grid lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(139, 148, 158, ${0.12 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = canvas.width;
        if (n.x > canvas.width) n.x = 0;
        if (n.y < 0) n.y = canvas.height;
        if (n.y > canvas.height) n.y = 0;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = n.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = n.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="anime-bg-canvas"
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
