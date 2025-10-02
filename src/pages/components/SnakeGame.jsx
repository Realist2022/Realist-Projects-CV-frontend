import React, { useEffect, useRef, useState } from 'react';
import styles from './SnakeGame.module.css';

function SnakeGame() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null); // added
  const [score, setScore] = useState(0);
  const scoreRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const tileCount = 20;
    const tileSize = canvas.width / tileCount;
    let animationFrame;
    let lastTime = 0;
    const tickInterval = 120;
    let running = true;

    const resetSnake = () => [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
    ];

    let snake = resetSnake();
    let velocity = { x: 1, y: 0 };
    let queuedVelocity = { ...velocity };

    const randomFood = () => {
      let candidate;
      do {
        candidate = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount),
        };
      } while (snake.some(segment => segment.x === candidate.x && segment.y === candidate.y));
      return candidate;
    };

    let food = randomFood();

    const handleKeyDown = ({ key }) => {
      const next = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      }[key];
      if (!next) return;
      if (next.x === -velocity.x && next.y === -velocity.y) return;
      queuedVelocity = next;
    };

    const drawRect = (x, y, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(x * tileSize, y * tileSize, tileSize - 1, tileSize - 1);
    };

    const resetGame = () => {
      snake = resetSnake();
      velocity = { x: 1, y: 0 };
      queuedVelocity = { ...velocity };
      food = randomFood();
      scoreRef.current = 0;
      setScore(0);
      running = true;
    };

    const step = () => {
      velocity = queuedVelocity;
      const head = { x: snake[0].x + velocity.x, y: snake[0].y + velocity.y };

      if (
        head.x < 0 || head.x >= tileCount ||
        head.y < 0 || head.y >= tileCount ||
        snake.some(segment => segment.x === head.x && segment.y === head.y)
      ) {
        running = false;
        draw();
        return;
      }

      snake = [head, ...snake];

      if (head.x === food.x && head.y === food.y) {
        scoreRef.current += 1;
        setScore(scoreRef.current);
        food = randomFood();
      } else {
        snake.pop();
      }
    };

    const draw = () => {
      ctx.fillStyle = '#040404';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawRect(food.x, food.y, '#ff2800');

      snake.forEach((segment, index) => {
        const shade = index === 0 ? '#ffffff' : '#21c55d';
        drawRect(segment.x, segment.y, shade);
      });

      if (!running) {
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ff2800';
        ctx.font = 'bold 28px "Segoe UI"';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 10);
        ctx.font = '16px "Segoe UI"';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Press Space to restart', canvas.width / 2, canvas.height / 2 + 18);
      }
    };

    const loop = (time) => {
      animationFrame = requestAnimationFrame(loop);
      if (time - lastTime < tickInterval) return;
      lastTime = time;

      if (running) step();
      draw();
    };

    const handleRestart = ({ code }) => {
      if (!running && code === 'Space') {
        resetGame();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleRestart);
    animationFrame = requestAnimationFrame(loop);
    draw();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleRestart);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    const doc = document;
    const fullscreenElement =
      doc.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement;

    if (fullscreenElement) {
      (
        doc.exitFullscreen ||
        doc.webkitExitFullscreen ||
        doc.mozCancelFullScreen ||
        doc.msExitFullscreen
      )?.call(doc);
    } else {
      (
        el.requestFullscreen ||
        el.webkitRequestFullscreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullscreen
      )?.call(el);
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onDoubleClick={toggleFullscreen}
      title="Double-click to toggle fullscreen"
    >
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width={320}
        height={320}
        aria-label="Snake game canvas"
      />
      <div className={styles.score}>Score: {score}</div>
      <p className={styles.instructions}>
        Use arrow keys to move. Eat food, avoid walls and yourself. Press Space after a crash. Double-click for fullscreen.
      </p>
    </div>
  );
}

export default SnakeGame;
