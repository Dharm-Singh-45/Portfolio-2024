import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://portfolio-backend-nlxk.onrender.com/api/v1/user/portfolio/me",
        { withCredentials: true }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);
  return (
    <div className="w-full flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg-text-[3.8rem] leading-[56px] md:leading-[67x] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold "
          style={{ background: "hsl(222.2 84% 4.9%)" }}
        >
          ABOUT
          <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="grid md:grid-cols-2 my-8 sm:my-8 gap-14">
        <div className="flex justify-center items-center">
          <img
            src={user.avatar && user.avatar.url}
            alt={user.fullName}
            className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350] lg:h-[450px]"
          />
        </div>
        <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
        <p>
            Hello! I'm Dharm Singh, a Full Stack Developer with a passion for
            creating dynamic and user-friendly web applications. My journey in
            tech has been driven by my curiosity and love for solving problems.
            I enjoy exploring new technologies and applying them to build
            innovative solutions. My expertise lies in both frontend and backend
            development, and I'm constantly looking to improve my skills and
            take on new challenges.
          </p>
          <p>
            I have interest in coding Lorem ipsum dolor sit amet, consectetur
            Outside of coding, I’m an avid cricket player and enjoy staying
            active. Traveling is one of my greatest passions – I love visiting
            new places and experiencing different cultures. I believe that
            exploring new environments helps me grow both personally and
            professionally. It also fuels my creativity and keeps me motivated
            to push boundaries in my work.
          </p>
          
        </div>

        
      </div>
      <p className="tracking-[1px] text-xl">
        {" "}
        I’m always eager to learn and expand my horizons, both in the tech
            world and in life. Whether it’s experimenting with new tools or
            discovering new destinations, I’m always ready for the next
            adventure. Thanks for taking the time to visit my portfolio – feel
            free to reach out if you’d like to connect or collaborate!
      </p>
    </div>
  );
};

export default About;
