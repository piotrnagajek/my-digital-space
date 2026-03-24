const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">About</p>
        <h2 className="font-display text-3xl md:text-5xl mb-8 text-foreground">
          A little bit about me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            I'm a full-stack designer and developer with over 5 years of experience building digital products. 
            I believe great work happens when aesthetics meet function — where every pixel has a purpose and every 
            interaction feels intentional.
          </p>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Currently based in San Francisco, I work with startups and agencies to bring bold ideas to life. 
            When I'm not designing, you'll find me experimenting with generative art or exploring local coffee shops.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
