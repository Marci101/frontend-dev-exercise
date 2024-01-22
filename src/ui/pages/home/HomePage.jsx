import HomeImage from '../../assets/images/home.jpg';
import DoughnutChart from '../../components/chart/DoughnutChart';
import './homePage.css';

export default function HomePage() {
  return (
    <div id="home-page">
      <section>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea non, repellendus cumque consectetur perspiciatis quaerat vero debitis, ab blanditiis nihil sint sed voluptatem assumenda. Repellat odit officiis ad accusantium et?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea non, repellendus cumque consectetur perspiciatis quaerat vero debitis, ab blanditiis nihil sint sed voluptatem assumenda.
        </p>
      </section>
      <section>
        <img src={HomeImage} alt="Noteboook, keyboard and a mouse" />
      </section>
      <DoughnutChart />
    </div>
  );
}