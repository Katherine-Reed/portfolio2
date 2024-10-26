export default function Articles() {
    return (
        <section className="articles-section pad">
            <h2>My most recent <span className="accent-text">article</span></h2>
            <article>
                <h3>Why Accessibility Matters</h3>
                <small>Written by <span className="accent-text">Katherine</span> on <time className="accent-text" datetime="2024-10-26">October 26th, 2024</time></small>
                <p>Ultricies morbi urna lectus magna quisque ultricies velit enim nisi mi volutpat amet id id porta auctor at viverra consequat turpis quam enim...</p>
                <a href="#">continue reading</a>
            </article>
        </section>
    )
}