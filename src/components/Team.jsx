 import React from 'react';

const teamMembers = [
  {
    name: 'Sinsydev',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years of experience in tech innovation and business strategy.',
    image: '/images/team1.jpg',
    socials: ['linkedin-in', 'twitter', 'github'],
  },
  {
    name: 'Aliyou Ameen',
    role: 'Lead Designer',
    bio: 'Award-winning designer specializing in UI/UX with a focus on creating intuitive user experiences.',
    image: '/images/team2.jpg',
    socials: ['linkedin-in', 'github', 'facebook'],
  },
  {
    name: 'Oga Sir',
    role: 'Lead Developer',
    bio: 'Full-stack developer with expertise in scalable architecture and emerging technologies.',
    image: '/images/team3.jpg',
    socials: ['linkedin-in', 'github', 'stack-overflow'],
  },
  {
    name: 'Emily Wilson',
    role: 'Marketing Specialist',
    bio: 'Digital marketing expert with a knack for creating compelling content and growth strategies.',
    image: '/images/team4.jpg',
    socials: ['linkedin-in', 'twitter', 'instagram'],
  },
  {
    name: 'Sheik Al-jabeer',
    role: 'Product Manager',
    bio: 'Strategic thinker focused on bringing innovative products to market that solve real problems.',
    image: '/images/team5.jpg',
    socials: ['linkedin-in', 'twitter', 'medium'],
  },
  {
    name: 'FGS Custom',
    role: 'Customer Success',
    bio: 'Dedicated to ensuring our clients achieve their goals through excellent support and guidance.',
    image: '/images/team6.jpg',
    socials: ['linkedin-in', 'twitter', 'envelope'],
  },
];

const Team = () => {
  return (
    <div className="py-16 px-4 text-white bg-[#1a1a1a] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-indigo-300 bg-clip-text text-transparent relative inline-block">
            Meet Our Team
          </h1>
          <p className="mt-5 text-gray-400 max-w-xl mx-auto">
            We're a passionate group of professionals dedicated to delivering exceptional results.
          </p>
        </header>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-[#252525] rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_25px_rgba(240,83,149,0.3)] animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="relative h-28 bg-gradient-to-r from-pink-300 to-pink-500"></div>
              <div className="flex flex-col items-center -mt-12 px-4">
                <div className="w-24 h-24 rounded-full mt-15 overflow-hidden border-4 border-[#252525] shadow-lg">
                  <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-pink-400 text-sm">{member.role}</p>
              </div>
              <div className="px-6 py-4 text-sm text-gray-400 flex-grow">
                {member.bio}
              </div>
              <div className="flex justify-center gap-4 pb-5">
                {member.socials.map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-pink-400 hover:text-black transition duration-300"
                  >
                    <i className={`${icon === 'envelope' || icon === 'stack-overflow' ? 'fas' : 'fab'} fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-white/10 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl mb-2 text-indigo-200">Want to join our team?</h2>
          <p className="text-gray-400 mb-4">We're always looking for talented individuals.</p>
          <a
            href="#"
            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 text-black font-bold hover:from-pink-500 hover:to-pink-700 transition"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;


