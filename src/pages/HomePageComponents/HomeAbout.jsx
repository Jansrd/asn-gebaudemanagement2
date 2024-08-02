import Title from "../../components/Title";

export default function HomeAbout() {
  return (
    <div className="home-about">
      <div className="home-about-left">
        <Title
          title="Warum wir?"
          subtitle="Entdecken Sie, was uns zu Ihrem idealen Partner macht."
        />
      </div>
      <div>
        <div className="vertical-line-2" id="vertical-line-2"></div>
      </div>

      <div className="home-about-right">
        <p>
          ASN-Gebäudemanagement steht für höchste Standards und erstklassigen
          Service. Wir sind ein eingetragener Betrieb und setzen auf modernste,
          umwelt- und materialschonende Reiniger für eine hochwertige Reinigung
          auf höchstem Niveau. Unser Anspruch an uns selbst ist es, hoch
          qualitative und verlässliche Gebäudereinigung und Haushaltshilfe zu
          leisten um Ihren Ansprüchen mehr als zu genügen!
        </p>
      </div>
    </div>
  );
}
