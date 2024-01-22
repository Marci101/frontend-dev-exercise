import ContactImage from '../../assets/images/contact_us.jpg';

export default function ContactPage() {
  return (
    <div id="contact-page">
      <section>
        <p>
          If you feel like, contact us ASAP!
        </p>
        <p>
          We are always here to help!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi dignissimos, suscipit ut qui culpa est eaque corporis? Reiciendis autem laboriosam nihil ratione at sit aspernatur quod ipsum labore expedita?
        </p>
      </section>
      <section>
        <img src={ContactImage} alt="Kitten before a notebook" />
      </section>
    </div>
  );
}