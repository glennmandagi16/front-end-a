const Hero = () => {
  return (
    <section className="hero section center-content illustration-section-01">
      <div className="container-sm">
        <div className="hero-inner section-inner">
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay={200}
            >
              Landing template for startups
            </h1>
            <div className="container-xs">
              <p
                className="mt-0 mb-32 reveal-from-bottom"
                data-reveal-delay={400}
              >
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
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
              src="images/hero-image.png"
              alt="Hero image"
              width={896}
              height={504}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
