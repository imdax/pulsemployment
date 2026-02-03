import React from "react";
import { PiLinkedinLogo, PiEnvelope, PiGoogleLogo } from "react-icons/pi";
import img from "../assets/ruwan.jpg";

function TeamSection() {
  const team = [
    {
      name: "Dr. Ruwan Paul",
      title: "Migration Specialist",
      image: img,
      linkedin: "https://au.linkedin.com/in/dr-ruwan-paul-jp-deshamanya-pmjf-meng-melb-aus",
      google: "https://www.google.com/search?q=Dr+Ruwan+Paul",
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-neutral-offwhite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[var(--color-primary-darkblue)] mb-2">
          Our Recruitment{" "}
          <span className="text-[var(--color-primary-red)]">Professionals</span>
        </h2>

        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
          A dedicated team ensuring ethical, efficient, and employer-aligned
          hiring.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300 w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] max-w-sm"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-darkblue)]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-4">
                  <a
                    href={member.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-[var(--color-primary-red)] hover:text-white transition-colors"
                  >
                    <PiLinkedinLogo className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white rounded-full hover:bg-[var(--color-primary-red)] hover:text-white transition-colors"
                  >
                    <PiEnvelope className="w-5 h-5" />
                  </a>
                  <a
                    href={member.google || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-[var(--color-primary-red)] hover:text-white transition-colors"
                    title="Know More"
                  >
                    <PiGoogleLogo className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[var(--color-primary-darkblue)]">
                  {member.name}
                </h3>
                <p className="text-[var(--color-primary-red)] text-sm font-medium mt-1">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
