'use strict';
(function(){
    const Fruits = [
        "apple", "apple", "apple", "apple", "apple", "apple", "apple", "apple",
        "banana", "banana", "banana", "banana", "banana", "banana",
        "orange", "orange", "orange", "orange", "orange",
        "pear", "pear", "pear", "pear",
        "grape", "grape", "grape",
        "watermelon", "watermelon",
        "strawberry"  
    ];

    async function requireServiceWorker () {
        if ("serviceWorker" in navigator) {
            const registration = await navigator.serviceWorker.register("./js/sw.js");
            console.log(registration);
        }
    }

    requireServiceWorker();

    function appendLines (max) {
        for (let i = 0; i < max; i++) {
            $(".game-container").appendChild(Line.instance({
                fruits: [
                    Fruits[Random(0, Fruits.length)],
                    Fruits[Random(0, Fruits.length)],
                    Fruits[Random(0, Fruits.length)],
                    Fruits[Random(0, Fruits.length)]
                ]
            }));
        }
    }

    let score = 0;

    $('.game-container').addEventListener('click', (evt) => {
        if(evt.target.classList.contains("no-support")) return;

        let select = 0;
        select += $$('.line-container:not(.claimed):has(:nth-child(4 of .apple))').length;
        select += $$('.line-container:not(.claimed):has(:nth-child(4 of .orange))').length * 2;
        select += $$('.line-container:not(.claimed):has(:nth-child(4 of .banana))').length * 3;
        select += $$('.line-container:not(.claimed):has(:nth-child(4 of .pear))').length * 8;
        select += $$('.line-container:not(.claimed):has(:nth-child(4 of .grape))').length * 10;
        select += $$('.line-container:not(.claimed):has(:nth-child(4 of .watermelon))').length * 25;
        select += $$('.line-container:not(.claimed):has(:nth-child(4 of .strawberry))').length * 100;
        
        console.log(select);

        if(select > 0) {
            $('.score').innerText = score = score + select;
            appendLines(1);

            let m = (2.6 - 1.6) / (125 - 1);
            let b = 1.6 - m * 1;
            let r = m * select + b

            let kf = [
                { transform: `rotate(-6deg) scale(${r})` },
                { transform: "rotate(0deg) scale(1)" },
                { transform: `rotate(6deg) scale(1)` },
                { transform: "rotate(0deg) scale(1)" },
            ];

            let opts =  {
                duration: 270,
                fillMode: 'fowards',
                timing: 'ease-in'
            };

            $('.score').animate(kf, opts);

            let selected = $$('.line-container:has(:nth-child(4 of .apple)), .line-container:has(:nth-child(4 of .orange)), .line-container:has(:nth-child(4 of .banana)), .line-container:has(:nth-child(4 of .pear)), .line-container:has(:nth-child(4 of .grape)), .line-container:has(:nth-child(4 of .watermelon)), .line-container:has(:nth-child(4 of .strawberry))');

            selected.forEach((e, k) => {
                e.classList.add('claimed');
            });

            setTimeout(() => {
                selected.forEach((e, k) => {
                    e.remove();
                });
            }, 2000);
        }
    });

    appendLines(18);

    document.addEventListener('drag', (evt) => {
        if(evt.target.closest("img")) evt.preventDefault();
    });

    document.addEventListener('dragstart', (evt) => {
        if(evt.target.closest("img")) evt.preventDefault();
    });

    let installPrompt;

    const pwaInstallButton = $('.pwa-install');

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      installPrompt = event;
      pwaInstallButton.removeAttribute("hidden");
    });

    $('.install-modal-close').addEventListener('click', () => {
        $('.install-modal').classList.remove('active');
    })

    pwaInstallButton.addEventListener("click", async () => {
      if (!installPrompt) return $('.install-modal').classList.add('active');
      const result = await installPrompt.prompt();
      console.log("Install prompt result", result);
      installPrompt = null;
      pwaInstallButton.setAttribute("hidden", "");
    });
})();