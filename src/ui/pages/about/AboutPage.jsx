import AboutImage from '../../assets/images/about.jpg';

export default function HomePage() {
  return (
    <div id="about-page">
      <section>
        <p>
          This page is about us!
        </p>
        <p>
          It tells our story.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptate vel cum. Natus officiis unde atque? Mollitia, maxime! Ex harum sit debitis voluptates mollitia voluptatem, consequuntur iure expedita fuga atque.
        </p>
      </section>
      <section>
        <img src={AboutImage} alt="Kitten before a notebook" />
      </section>
    </div>
  );
}