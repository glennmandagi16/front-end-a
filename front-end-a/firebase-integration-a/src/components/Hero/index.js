import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#ffffff",
};

const Hero = () => {
  const [hero, setHero] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const heroRef = ref(db, "hero/");
    onValue(heroRef, (snapshot) => {
      const data = snapshot.val();
      setHero(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="hero section center-content illustration-section-01">
      <div className="container-sm">
        {!loading && (
          <div className="hero-inner section-inner">
            <div className="hero-content">
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay={200}
              >
                {hero.title}
              </h1>
              <div className="container-xs">
                <p
                  className="mt-0 mb-32 reveal-from-bottom"
                  data-reveal-delay={400}
                >
                  {hero.subTitle}
                </p>
              </div>
            </div>
            <div
              className="
									hero-figure
									reveal-from-bottom
									illustration-element-01
								"
              data-reveal-value="20px"
              data-reveal-delay={800}
            >
              <img
                className="has-shadow"
                src={`data:image/jpeg;base64, ${hero.image}`}
                alt="Hero image"
                width={896}
                height={504}
              />
            </div>
          </div>
        )}
        {loading && <ClipLoader cssOverride={override} size={50} />}
      </div>
    </section>
  );
};

export default Hero;
