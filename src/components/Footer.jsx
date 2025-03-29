export default function Footer() {
    return <>
        <section class="contact">
            <h4>Get in Touch</h4>
            <p>Ready to make your website accessible to everyone? Contact me today using the form below to discuss your project and how we can work together to achieve your accessibility goals.</p>
            <form id="form-contact">
                <label>Name:<br />
                    <input type="text" aria-label="Enter name" />
                </label>
                <label>Email:<br />
                    <input type="email" aria-label="Enter email" />
                </label>
                <label>Comment:<br />
                    <textarea aria-label="Enter comment"></textarea>
                </label>
                <button id="form-submit">Get quote</button>
            </form>
            <small>copyright {new Date().getFullYear()} Reed Development</small>
        </section>
        <section class="legal">
            <section class="pride-red pride flag">
                
            </section>
            <section class="pride-orange pride flag">
                
            </section>
            <section class="pride-yellow pride flag">
                
            </section>
            <section class="pride-green pride flag">
                
            </section>
            <section class="pride-blue pride flag">
                
            </section>
            <section class="pride-purple pride flag">
                
            </section>
            <section class="pink-box flag">
                <p class="text">Trans</p>
            </section>
            <section class="blue-box flag">
                <p class="text">Rights</p>
            </section>
            <section class="white-box flag">
                <p class="text">Are</p>
            </section>
            <section class="blue-box flag">
                <p class="text">Human</p>
            </section>
            <section class="pink-box flag">
                <p class="text">Rights</p>
            </section>
        </section>
    </>
}