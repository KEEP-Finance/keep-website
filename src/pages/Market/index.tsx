import styles from './index.less';
import { ReactComponent as Market } from './market.svg';
import { useLayoutEffect } from 'react';
export default function IndexPage() {
  useLayoutEffect(() => {
    jQuery(document).ready(function ($) {
      //open popup
      console.log('loaded');

      $('.industrie').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup-industrie').addClass('is-visible');
      });
      $('.software').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup-software').addClass('is-visible');
      });
      $('.banking').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup-banking').addClass('is-visible');
      });
      $('.telco').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup-telco').addClass('is-visible');
      });
      $('.gesundheit').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup-gesundheit').addClass('is-visible');
      });
      $('.luftfahrt').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup-luftfahrt').addClass('is-visible');
      });
      $('.energie').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup-energie').addClass('is-visible');
      });
      $('.transport').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup-transport').addClass('is-visible');
      });

      //close popup
      $('.cd-popup').on('click', function (event) {
        if (
          $(event.target).is('.cd-popup-close') ||
          $(event.target).is('.cd-popup')
        ) {
          event.preventDefault();
          $(this).removeClass('is-visible');
        }
      });
      //close popup when clicking the esc keyboard button
      $(document).keyup(function (event) {
        if (event.which == '27') {
          $('.cd-popup').removeClass('is-visible');
        }
      });

      // TODO if modal open then pop out items
    });
  }, []);
  return (
    <div className={styles.market}>
      <div className="cd-popup cd-popup-industrie" role="alert">
        <div className="cd-popup-container">
          <h2>Industrie</h2>
          <p>
            Wenn Bauteile eigenständig mit der Produktionsanlage kommunizieren
            und bei Bedarf selbst eine Reparatur veranlassen oder Material
            nachbestellen - wenn sich Menschen, Maschinen und industrielle
            Prozesse intelligent vernetzen, dann sprechen wir von Industrie 4.0.
            Nach Dampfmaschine, Fließband und Computer stehen wir nun mit
            intelligenten Fabriken vor der vierten industriellen Revolution.
            Durch die Verzahnung von Produktion mit modernster Informations- und
            Kommunikationstechnik können Produkte kostengünstiger, effizienter
            und nach individuellen Kundenwünschen hergestellt werden.
            Gleichzeitig stellt die Digitalisierung die Industrie vor große
            Herausforderungen: Neue Daten, Vernetzung, Automatisierung und die
            digitale Kundenschnittstelle erfordern von Unternehmen, ihre
            Geschäftsprozesse und -modelle zu hinterfragen, um neue
            Möglichkeiten zu erkennen, zu entwickeln und umzusetzen.
          </p>
          <div className="md-chips">
            <div className="md-chip">Industrie 4.0</div>
            <div className="md-chip">Künstliche Intelligenz</div>
            <div className="md-chip">Machine Learning</div>
            <div className="md-chip">Robotik</div>
            <div className="md-chip">Automatisierung</div>
            <div className="md-chip">Cloud Computing</div>
            <div className="md-chip">Big Data</div>
            <div className="md-chip">3D Druck</div>
          </div>
          <a href="#0" className="cd-popup-close img-replace">
            Close
          </a>
        </div>
      </div>
      <div className="cd-popup cd-popup-software" role="alert">
        <div className="cd-popup-container">
          <h2>Software</h2>
          <p>
            Ob vernetzter Kühlschrank, smarter Lautsprecher oder das
            selbstfahrende Auto: Die Produkte und Dienstleistungen der Zukunft
            definieren sich in erster Linie über Software und Technologien. Das
            verlangt schon in der Entwicklung völlig neue und flexible
            Herangehensweisen.
          </p>
          <div className="md-chips">
            <div className="md-chip">Künstliche Intelligenz</div>
            <div className="md-chip">Machine Learning</div>
            <div className="md-chip">API</div>
            <div className="md-chip">Big Data</div>
            <div className="md-chip">Cloud</div>
            <div className="md-chip">Agile Entwicklung</div>
          </div>
          <a href="#0" className="cd-popup-close img-replace">
            Close
          </a>
        </div>
      </div>
      <div className="cd-popup cd-popup-telco" role="alert">
        <div className="cd-popup-container">
          <h2>Telekommunikation</h2>
          <p>
            Die Telekommunikationsbranche bildet mit ihrer Netzinfrastruktur vor
            allem für den Mobilfunk das Rückgrat der Digitalisierung und
            profitiert bereits von dieser Infrastruktur. Um in Zukunft nicht nur
            als Kooperationspartner für Serviceinnovationen herzuhalten, müssen
            Telekommunikationsunternehmen die idealen Voraussetzungen noch
            proaktiver nutzen. Es gilt, das veränderte Kundenverhalten zum
            eigenen Vorteil zu gestalten, indem die Bandbreite an digitalen
            Dienstleistungen erhöht beziehungsweise ins Serviceportfolio mit
            aufgenommen wird und man sich nicht nur als Infrastrukturanbieter
            versteht, sondern Trends wie das Internet der Dinge und die
            Möglichkeiten durch Big Data zum eigenen Vorteil macht, um eigene
            Services zu differenzieren und neue Wege der Kundeninteraktion zu
            entwickeln.
          </p>
          <div className="md-chips">
            <div className="md-chip">Datengeschwindigkeit</div>
            <div className="md-chip">AR / VR</div>
            <div className="md-chip">IoT</div>
            <div className="md-chip">Machine-to-Machine-Kommunikation</div>
          </div>
          <a href="#0" className="cd-popup-close img-replace">
            Close
          </a>
        </div>
      </div>
      <div className="cd-popup cd-popup-gesundheit" role="alert">
        <div className="cd-popup-container container-gesundheit">
          <h2>{'Gesundheit & Pflege'}</h2>
          <p>
            In der Gesundheits- und Pflegewirtschaft spielt die Digitalisierung
            eine immer wichtigere Rolle und umfasst dabei verschiedene Bereiche:
            von der elektronischen Patientenakte über intelligente Analyse- und
            Prognoseverfahren bis hin zur Telemedizin. Chancen liegen vor allem
            in einer besseren Vernetzung im Gesundheitssystem, aber auch darin,
            in unterversorgten Bereichen Routinebehandlungen elektronisch zu
            unterstützen und die berufliche IKT-Qualifizierung zu stärken. Mit
            der Entbürokratisierung der Pflegedokumentation hat sich ein neues
            Handlungsfeld für die digitale Transformation in der Pflege
            geöffnet.
          </p>
          <div className="md-chips">
            <div className="md-chip">Sensorik</div>
            <div className="md-chip">Wearables</div>
            <div className="md-chip">mHealth</div>
            <div className="md-chip">eHealth</div>
            <div className="md-chip">Big Data</div>
          </div>

          <a href="#0" className="cd-popup-close img-replace">
            Close
          </a>
        </div>
      </div>
      <div className="cd-popup cd-popup-banking" role="alert">
        <div className="cd-popup-container">
          <h2>{'Banking & Versicherung'}</h2>
          <p>
            Der schnelle technologische Fortschritt und das veränderte
            Kundenverhalten treiben die Digitalisierung der Versicherungs- und
            Bankenbranche voran und beeinflussen ihre Geschäftsmodelle entlang
            der gesamten Wertschöpfungskette. Die wachsende Macht der Kunden und
            der Wunsch nach Individualisierung von Produkten, einer einfachen
            Handhabung sämtlicher Transaktionen sowie einem orts- und
            zeitunabhängigen Zugang verändern das Angebot von Versicherungen und
            Banken fundamental.
          </p>
          <div className="md-chips">
            <div className="md-chip">FinTech</div>
            <div className="md-chip">InsurTech</div>
            <div className="md-chip">Business Analytics</div>
            <div className="md-chip">Big Data</div>
            <div className="md-chip">Cloud Computing</div>
            <div className="md-chip">Telematik</div>
          </div>
          <a href="#0" className="cd-popup-close img-replace">
            Close
          </a>
        </div>
      </div>
      <div className="cd-popup cd-popup-luftfahrt" role="alert">
        <div className="cd-popup-container">
          <h2>Luftfahrt</h2>
          <p>
            Für die Zukunftsfähigkeit der deutschen Luftfahrtbranche sind
            digitale Innovationen von fundamentaler Bedeutung: Dabei gilt es zu
            hinterfragen, wie beispielsweise mobile Anwendungen, etwa für die
            nahtlose Verknüpfung von Verkehrsmitteln oder die Rückverfolgung von
            Gepäckstücken, die Customer Journey verändern oder wie
            Passagierdaten zum Wohle der Reisenden genutzt und dabei optimal
            geschützt werden können, aber auch, wie sich die Digitalisierung der
            Produktion (Industrie 4.0) auf die Herstellung von Turbinen auswirkt
            oder der 3D-Druck auf die Ersatzteil-Logistik an Flughäfen. Die
            Digitalisierung bietet großes Potenzial, um die Luftfahrt in Zukunft
            noch effizienter, ressourcenschonender und komfortabler zu
            gestalten.
          </p>
          <div className="md-chips">
            <div className="md-chip">Smart Airport</div>
            <div className="md-chip">AR / VR</div>
            <div className="md-chip">Cognitive Computing</div>
            <div className="md-chip">Smart Passenger</div>
            <div className="md-chip">In-Flight Entertainment</div>
            <div className="md-chip">Digitale Gepäcklogistik</div>
          </div>
          <a href="#0" className="cd-popup-close img-replace">
            Close
          </a>
        </div>
      </div>
      <div className="cd-popup cd-popup-energie" role="alert">
        <div className="cd-popup-container">
          <h2>Energie</h2>
          <p>
            Die Digitalisierung hat ein Umdenken in der Energie- und
            Versorgungswirtschaft in Gang gesetzt: Sie beschleunigt den
            Energiewandel und betrifft alle Ebenen, von der Erzeugung über den
            Handel und die Verteilung von Energie und Wasser, bis zur
            Kommunikation mit dem Kunden. Die größte Herausforderung hierbei ist
            es, dezentral erzeugte Energie nach Bedarf der Verbraucher
            bereitzustellen. Dazu müssen zum einen die Netze ausgebaut und
            verstärkt werden, zum anderen gilt es, intelligente Technologien zu
            entwickeln und zu integrieren, die alle Netzteilnehmer – also
            Erzeuger, Versorger, Verbraucher und Netzbetreiber – miteinander
            kommunizieren und kooperieren lassen.  
          </p>
          <div className="md-chips">
            <div className="md-chip">Smart Metering</div>
            <div className="md-chip">Smart Grids</div>
            <div className="md-chip">{'Smart Home & Smart Building'}</div>
            <div className="md-chip">Dezentrales Energiemanagement</div>
            <div className="md-chip">eMobility</div>
            <div className="md-chip">Predictive Maintenance</div>
          </div>
          <a href="#0" className="cd-popup-close img-replace">
            Close
          </a>
        </div>
      </div>
      <div className="cd-popup cd-popup-transport" role="alert">
        <div className="cd-popup-container">
          <h2>Transport</h2>
          <p>
            Die aufwändige Inventur im Lager, der Gabelstapler-Fahrer, der
            Paletten bewegt, und der LKW, der die Bestellung zum Händler bringt,
            könnten schon bald Auslaufmodelle sein. Bereits in zehn Jahren wird
            sich die Logistik nach Ansicht einer großen Mehrheit jener
            Unternehmen, die heute Logistik einsetzen, völlig verändern. Die
            Digitalisierung bietet nicht nur die Chance, Geschäftsprozesse zu
            optimieren und effizienter zu gestalten, sondern kann das
            Transportwesen und die Logistik grundsätzlich revolutionieren.
          </p>
          <div className="md-chips">
            <div className="md-chip">Autonomes Fahren</div>
            <div className="md-chip">Drohnen</div>
            <div className="md-chip">Smartes Lagermanagement</div>
            <div className="md-chip">Blockchain</div>
            <div className="md-chip">Datenbrillen</div>
            <div className="md-chip">Connected Cars</div>
          </div>
          <a
            href="#"
            className="cd-popup-close img-replace highlight-button popup-modal-dismiss no-margin"
          >
            Schließen
          </a>
          <button title="Schließen" type="button" className="mfp-close">
            x
          </button>
        </div>
      </div>
      <Market />
    </div>
  );
}
