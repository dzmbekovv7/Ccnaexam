import { useEffect, useState } from 'react';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Lead Educator',
    photo: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Michael Lee',
    role: 'Curriculum Designer',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Sophia Martinez',
    role: 'Student Counselor',
    photo: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_items_boosted&w=740',
  },
  {
    name: 'David Kim',
    role: 'Tech Support',
    photo: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg',
  },
];

export function AboutPage() {


  const sections = [
    {
      title: 'Exams Are More Than Just Tests',
      text: `Exams challenge your understanding, problem-solving skills, and time management.\n
      They help measure what you’ve learned and prepare you for real-world problem-solving situations.\n
      With the right mindset, exams can be stepping stones to growth, not just stress.`,
      bg: 'bg-white',
      textColor: 'text-blue-900',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Prepare Smart, Not Hard',
      text: `Create a study plan that fits your lifestyle.\n
      Mix reading with practice questions and group studies.\n
      Remember to take breaks, sleep well, and eat nutritious food to keep your brain sharp.`,
      bg: 'bg-gradient-to-r from-blue-800 to-blue-900',
      textColor: 'text-white',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Stay Calm On Exam Day',
      text: `Start with the questions you know best to build confidence.\n
      Manage your time wisely and don’t get stuck on one question.\n
      Keep your breathing steady, and remember — you’re prepared.`,
      bg: 'bg-white',
      textColor: 'text-blue-900',
      image:
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <main className="min-h-screen font-sans">
      {sections.map(({ title, text, bg, textColor, image }, idx) => (
        <section
          key={idx}
          className={`${bg} px-6 md:px-24 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 overflow-hidden`}
        >
          {/* Image */}
          <div
            className={`flex-shrink-0 w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 
            }`}
          >
            <img src={image} alt={title} className="object-cover w-full h-72 md:h-96" />
          </div>

          {/* Text */}
          <div
            className={`max-w-2xl md:w-1/2 
             transition-all duration-700`}
          >
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 leading-tight ${textColor}`}>
              {title}
            </h2>
            <p className={`${textColor} text-lg whitespace-pre-line leading-relaxed tracking-wide`}>
              {text}
            </p>
          </div>
        </section>
      ))}

      {/* Meet Our Team Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white px-6 md:px-24">
        <h2 className="text-5xl font-extrabold mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map(({ name, role, photo }, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl overflow-hidden shadow-lg text-blue-900 flex flex-col items-center p-6 transform transition-transform duration-500 hover:scale-105 cursor-pointer`}
            >
              <img
                src={photo}
                alt={name}
                className="w-32 h-32 object-cover rounded-full mb-5 shadow-md"
              />
              <h3 className="text-xl font-bold mb-1">{name}</h3>
              <p className="text-blue-700 text-sm">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 py-20 text-center text-white px-6 md:px-24">
        <h3 className="text-4xl font-bold mb-6">Ready to conquer your exams?</h3>
        <p className="max-w-xl mx-auto text-lg mb-8">
          Start preparing smart today — create your study plan, stay motivated, and reach your goals with confidence.
        </p>
        <button
          className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          onClick={() => alert('Good luck!')}
        >
          Get Started
        </button>
      </section>
    </main>
  );
}
