export default function Articles() {
    return (
        <section className="articles-section">
            <h2>My most recent <span className="accent-text">article</span></h2>
            <article>
                <h3>Title</h3>
                <small>Written by <span className="accent-text">Katherine</span> on <time className="accent-text" datetime="2024-10-26">October 26th, 2024</time></small>
                <p>blurb</p>
                <a href="#">continue reading</a>
            </article>
        </section>
    )
}