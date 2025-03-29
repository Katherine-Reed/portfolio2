import Aside from "./Aside"

export default function Main() {
    return <>
        <main>
            <section className="tcw content">
                <img src="https://placehold.co/600x400" alt="placeholder image" class="hero" />
                <article>
                    <p class="hit">Hello, my name is Katherine</p>
                    <h2>I'm a Front-End Developer</h2>
                    <p>I have a passion for creating accessible and inclusive web experiences. With over 10 years of experience in web development, I specialise in ensuring that websites are usable by people of all abilities.</p>
                </article>
                <article>
                    <h3>Why Accessibility Matters</h3>
                    <p>Accessibility is not just a buzz word or legal requirement, it is a moral imperative. By making your website accessible, you ensure that everyone, including people with disabilities, can access and enjoy your content. This not only broadens your audience but also enhances your brand's reputation.</p>
                </article>
            </section>
        </main>
    </>
}
