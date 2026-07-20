const photoModules = import.meta.glob("../assets/images/proyectos/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const photos = Object.keys(photoModules)
  .sort()
  .map((path) => photoModules[path]);

const ProjectGallery = () => {
  if (photos.length === 0) return null;

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Nuestro trabajo</p>
          <h2>Proyectos realizados</h2>
          <p>Algunas de las obras y trámites que hemos acompañado.</p>
        </div>
        <div className="gallery-grid">
          {photos.map((src, i) => (
            <div
              className="gallery-item reveal"
              key={src}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
