Sergey Klyuchnkov
mail: bongoman@tut.by, github: bongoman-by, skype: bongoman
I want to go from 1C development to fullstack development
1C:Enterprise, PHP, Yii2
```class Slider {
        constructor(slides, key, extension, path) {
            this.img = path + '/' + slides[key] + '.' + extension;
            this.length = slides.length;
            this.key = key - 1;
            this.alt = slides[key - 1];
            this.current = (key < 10) ? '0' + (key + 1) : '' + key;
            this.total = (this.length < 10) ? '0' + (this.length) : '' + this.length;
        }

        getCounter() {
            return `
             <span id="current">${this.current}</span>/<span id="total">${this.total}</span>`;
        }

        getWrapper() {
            return `
         <div class="offer__slider-wrapper">
            <div class="offer__slide">
                <img src="${this.img}" alt="${this.alt}">
            </div>
        </div>`;
        }

        render() {
            slider.innerHTML = "";
            sliderCounter.innerHTML = "";

            if (this.key != 0) {
                sliderCounter.append(prev);
            }
            let element1 = document.createElement('div');
            element1.innerHTML = this.getCounter();
            sliderCounter.append(element1);
            if (this.key != this.length - 1) {
                sliderCounter.append(next);
            }

            slider.append(sliderCounter);

            let element2 = document.createElement('div');
            element2.innerHTML = this.getWrapper();
            slider.append(element2);
        }
    }
    ```
    https://php-up.com/
    https://php-up.com/
    Level of english A1
