export default function editForm(): void {
    document.querySelector("body").innerHTML = `
        <header class="header">
            <div class="container">
                <div class="header__buttons">
                    <button class="header__buttons__btn" id="toGarage">To Grage</button>
                    <button class="header__buttons__btn" id="toWinners">To Winners</button>
                </div>
                <div class="header__fields">
                    <div class="header__fields__create create">
                        <input type="text" class="create__name">
                        <input type="color" class="create__color">
                        <button class="create__btn">Create</button>
                    </div>
                    <div class="header__fields__update update">
                        <input type="text" class="update__name">
                        <input type="color" class="update__color">
                        <button class="update__btn">Update</button>
                    </div>
                    <div class="header__fields__option__buttons option__buttons">
                        <button class="option__buttons__btn race_button">Race</button>
                        <button class="option__buttons__btn">Reset</button>
                        <button class="option__buttons__btn generate__buttons__btn">Generate Cars</button>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <section class="race">
                <div class="container">
                    <div class="app"></div>
                </div>
                <div class="winner__block"></div>
            </section>
        </main>
        <footer>
            <div class="footer__btn">
                <div class="container">
                    <button class="footer__btn__prew">Prew</button>
                    <button class="footer__btn__prew">Next</button>
                </div>
            </div>
        </footer>
    `
}