'use strict';
(function(){
    const Fruits = [
        "apple", "apple", "apple", "apple", "apple",
        "banana", "banana", "banana", "banana", 
        "orange", "orange", "orange", "orange", 
        "grape", "grape", "grape",
        "pear", "pear", "pear", 
        "watermelon", "watermelon",
        "carot"  
    ];

    function appendLines (max) {
        for (let i = 0; i < max; i++) {
            $(".game-container").appendChild(Line.instance({
                fruits: [
                    Fruits[Random(0, Fruits.length)],
                    Fruits[Random(0, Fruits.length)],
                    Fruits[Random(0, Fruits.length)],
                    Fruits[Random(0, Fruits.length)],
                    Fruits[Random(0, Fruits.length)]
                ]
            }));
        }
    }

    let score = 0;

    $('.game-container').addEventListener('click', () => {
        let select = 0;
        select += $$('.line-container:has(:nth-child(5 of .apple))').length;
        select += $$('.line-container:has(:nth-child(5 of .orange))').length * 2;
        select += $$('.line-container:has(:nth-child(5 of .banana))').length * 3;
        select += $$('.line-container:has(:nth-child(5 of .pear))').length * 8;
        select += $$('.line-container:has(:nth-child(5 of .grape))').length * 10;
        select += $$('.line-container:has(:nth-child(5 of .watermelon))').length * 25;
        select += $$('.line-container:has(:nth-child(5 of .carot))').length * 100;
        
        if(select !== score) {
            $('.score').innerText = score = select;
            appendLines(1);
        }
        else {
            let selected = $$('.line-container:has(:nth-child(5 of .apple)), .line-container:has(:nth-child(5 of .orange)), .line-container:has(:nth-child(5 of .banana)), .line-container:has(:nth-child(5 of .pear)), .line-container:has(:nth-child(5 of .grape)), .line-container:has(:nth-child(5 of .watermelon)), .line-container:has(:nth-child(5 of .carot))');
            console.log(selected, selected.length % 10);
            if(selected.length % 10 === 0) {
                setTimeout(() => {
                    selected.forEach((e, k) => {
                        e.remove();
                    });
                }, 2000);
            }
        }
    });

    appendLines(12);
})();