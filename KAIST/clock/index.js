const timer = () => {
    let lastStarted = null;
    let totalTime = 0;
    return {
      start: () => {
        if (lastStarted) return;
        lastStarted = Date.now();
      },
      print: () => {
        const elapsed = lastStarted
          ? Date.now() - lastStarted + totalTime
          : totalTime;
        return (elapsed / 1000).toFixed(1) + "초 경과함";
      },
      pause: () => {
        if (!lastStarted) return;
        totalTime += Date.now() - lastStarted;
        lastStarted = null;
      },
      reset: () => {
        totalTime = 0;
        lastStarted = null;
      },
    };
  };

  const addTimer = () => {
    // 클로저 형태로 타이머 객체 저장
    const timerObject = timer();

    const timerContainer = document.createElement("div");

    const timerDisplay = document.createElement("span");
    timerDisplay.textContent = timerObject.print();

    const timerStart = document.createElement("button");
    timerStart.textContent = "시작";
    timerStart.addEventListener("click", () => {
      timerObject.start();
      timerDisplay.textContent = timerObject.print();
    });

    const timerPause = document.createElement("button");
    timerPause.textContent = "일시정지";
    timerPause.addEventListener("click", () => {
      timerObject.pause();
      timerDisplay.textContent = timerObject.print();
    });

    const timerReset = document.createElement("button");
    timerReset.textContent = "초기화";
    timerReset.addEventListener("click", () => {
      timerObject.reset();
      timerDisplay.textContent = timerObject.print();
    });

    const timerRemove = document.createElement("button");
    timerRemove.textContent = "삭제";
    timerRemove.addEventListener("click", () => {
      // 타이머 삭제
      document.body.removeChild(timerContainer);
    });

    document.body.appendChild(timerContainer);
    timerContainer.appendChild(timerDisplay);
    timerContainer.appendChild(timerStart);
    timerContainer.appendChild(timerPause);
    timerContainer.appendChild(timerReset);
    timerContainer.appendChild(timerRemove);
  };

  document.querySelector("#addTimer").addEventListener("click", addTimer);