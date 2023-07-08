import React from 'react';
const Landing = () => {
    return (
        <>
      <div>
      <h1>About Us</h1>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
        RKSS (Ramakrishna Sarada Samiti) NGO is working since 1968 in Mumbai slums for the uplift of women and children, inspired by the lives and teachings of the Holy Trio – Sri Ramakrishna, Sarada Devi, and Swami Vivekananda. The RKSS community engagement center at Sion Koliwada embodies the Seva ideals and works for the empowerment of the economically disadvantaged women and children through participatory community engagement, and programs co-created by the beneficiaries. The center has evolved as a beloved second home to women and youth of the community irrespective of caste, religion, creed or affiliations.        </p>
        <p>
        For the Women: Vocational training programs, financial literacy classes, health and hygiene camps, children’s education; Of the women – promotion of entrepreneurship, partnership in programs, economic independence, and safety; By the women –Fully managed by women . Both the founding trustees of 1960s, and the new team of trustees are all professional, empowered women inspired by the ideals of the great woman saint, Ma Sarada who nurtured the seva-gene of this nation, in the 20th century. Children’s educational activities are: Pre-school for kids, Free tuitions from standard I to std. X, Library with 2000 books in English, Hindi, and Marathi, Reading room, free computer training classes, Mallakhamba training and focused educational camps like spoken English classes, summer camp, citizenship education and, career counseling by accomplished mentors.
        </p>
        <h2>Our Work</h2>
        <div className="members-container">
          <div className="member">
            <img src="member1.jpg" alt="work 1" />
            <h3>Mission Jeet</h3>
            <p>RKSSNGO is co-founder of an alliance of all-India NGOs in education and skilling. The first meeting of the alliance was held on 23-01-2023, which is Swami Bramhanandaji’s janma tithi as well as Subhash Chandra Bose’s birth anniversary. A dozen NGOs have come together to form this all-India alliance and have chosen its name as JEET. </p>
          </div>
          <div className="member">
            <img src="member2.jpg" alt="work 2" />
            <h3>Satvva Success</h3>
            <p>Sattva is a tailor -artisan collective seeded and supported by RKSS along with AOF, Ambit Oditi Foundation, Mumbai. It’s success depends on how well this collective will grow and self-sustain too. SattvaIndia produces great products either from upcycled or recycled fabric, or from handmade cottons. We have a shop at RKSS center and soon we will be going online.</p>
            
          </div>
          {/* Add more member entries as needed */}
        </div>
        
      </div>
    </div>
  );

        </>
    );
}



export default Landing;