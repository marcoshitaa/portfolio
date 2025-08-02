import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const aboutme = {
    objects: [
      {
         one: "about.p1.1",
         two: "about.p1.2",
         three: "about.p1.3",
       },
       {
         one: "about.p2.1",
         two: "about.p2.2",
         three: "about.p2.3",
       },
       {
         one: "about.p3.1",
         two: "about.p3.2",
         three: "about.p3.3",
       },
       {
         one: "about.p4.1",
         two: "about.p4.2",
         three: "about.p4.3",
       },
       {
         one: "about.p5.1",
         two: "about.p5.2",
         three: "about.p5.3",
       },
    ]
  };

  const RenderParagraph = ({p1, p2, p3}) => (
    <div className="space-y-8 text-slate-300 text-xl leading-relaxed">
      <p className="opacity-90">
       {p1} <span className="text-blue-400 font-semibold">{p2}</span>{p3}
      </p>
    </div>
  );

  return (
    <div
      name="about"
      id="about"
      className="min-h-screen w-full overflow-x-hidden bg-slate-950 relative px-4 sm:px-8 py-24"
      style={{ backgroundColor: "#020617" }}
    >
      {/* Sutil grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold text-white">
         {t("about.title")}
        </h2>
      {aboutme.objects.map((item, key) => (
                <div key={key} className="relative px-4 sm:px-6 md:px-8 lg:px-12 mb-6">
                  {/* Timeline Dot */}
                  <RenderParagraph 
                  p1={t(item.one)}
                  p2={t(item.two)}
                  p3={t(item.three)}>
                  </RenderParagraph>
                </div>
              ))}
        
      </div>
    </div>
  );
};

export default About;
