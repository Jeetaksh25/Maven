import React, { useEffect } from 'react';
import './CSS/Home.css';
import Button from "./Common/Button.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
    AOS.refresh(); 
  }, []);

  const scrollToSection = (e) => {
    e.preventDefault();
    const section = document.getElementById("targetSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Section not found");
    }
  };
  
  return (
    <>
      <h1 align="center" style={{ fontSize: "50px",marginTop: "5px",display: "block", justifyContent: "center", alignItems: "center",color: "black"}}>Maven, Your Friend</h1>
      <div className='intro'>
        <div className='introL'>
          <img src="/public/Content/images/Maven.png" alt="Maven" width={400} />
        </div>
        <div className='introR'>
          <h1 data-aos="fade-right">Welcome meowy friend!!</h1>
          <h1 data-aos="fade-right">I'll be your guide to assist you on this journey</h1>
          <Button  onClick={scrollToSection} className='GetStarted' data-aos="fade-in">Get Started</Button>
        </div>
      </div>

      <div className='Quote' data-aos="zoom-in">
        <h1>“Happiness can be found even in the darkest of times if one only remembers to turn on the light.”</h1>
        <h2>- J.K Rowling</h2>
      </div>

      <div class="ServicesC">
        <h1>Our Services</h1>
        <p>At Maven, we are dedicated to providing effective psychotherapy methods that promote self-understanding and empower individuals to adopt new attitudes and emotions towards life's challenges. Since our establishment in 2023, we have been committed to offering a comprehensive range of personalized mental health services to individuals in the greater San Francisco area. From minor difficulties to traumatic experiences, we are here to support you on your journey to mental well-being.</p>
    </div>

    <div class="Blocks1">
        <div class="Block1" data-aos="zoom-in">
            <img src="https://raw.githubusercontent.com/Jeetaksh25/Maven/refs/heads/main/public/Content/images/Identifying%20problems.jpg" width="250px" height="200px" class="Block1img" loading='lazy'/>
            <div><p class="Block1text">Identifying your problems</p></div>
        </div>
        <div class="Block1" data-aos="zoom-in">
            <img src="https://raw.githubusercontent.com/Jeetaksh25/Maven/refs/heads/main/public/Content/images/EasyGuide.jpg?token=GHSAT0AAAAAACZRNQHZNPZHQW2HMQX4OSP2ZZGAEKA" width="250px" height="200px" class="Block1img" loading='lazy'/>
            <div><p class="Block1text">Easy Guide</p></div>
        </div>
        <div class="Block1" data-aos="zoom-in">
            <img src="https://raw.githubusercontent.com/Jeetaksh25/Maven/refs/heads/main/public/Content/images/Daily%20challanges.jpg?token=GHSAT0AAAAAACZRNQHYFSJGGGKK4BJHBNCMZZGAETA" width="250px" height="200px" class="Block1img" loading='lazy'/>
            <div><p class="Block1text">Daily Challenges</p></div>
        </div>
        <div class="Block1" data-aos="zoom-in">
            <img src="https://raw.githubusercontent.com/Jeetaksh25/Maven/refs/heads/main/public/Content/images/RewardsforProgress.jpg?token=GHSAT0AAAAAACZRNQHYYDUEFTB7B3LKVQ3SZZGAE3Q" width="250px" height="200px" class="Block1img" loading='lazy'/>
            <div><p class="Block1text">Rewards for your progress</p></div>
        </div>
    </div>

    <div class="TypesH">
        <h1 style={{marginTop:"60px",marginBottom:"40px",color:"black",fontSize:"50px"}}>Types of mental health issues</h1>
    </div>

    <div class="Types">
        <div class="Type">
            <img src="./public/Content/images2/Anxiety.png" class="TypeI" width="200px" data-aos="flip-left" loading='lazy'/>
            <p>Anxiety Disorder</p>
            <div className='description'>
              <p style={{color:"white"}}>Anxiety disorders are the most common mental health conditions. They are characterized by persistent and excessive fear or worry about various aspects of life. This overwhelming anxiety can interfere with daily activities and often leads to physical symptoms such as rapid heartbeat, sweating, and fatigue.</p>
            </div>
        </div>

        <div class="Type">
            <img src="./public/Content/images2/Mood.png" class="TypeI" width="200px" data-aos="flip-up" loading='lazy'/>
            <p>Mood Disorder</p>
            <div className='description'>
              <p style={{color:"white"}}> Mood disorders primarily involve disturbances in a person's mood. This includes conditions like depression and bipolar disorder. Individuals with mood disorders may experience prolonged feelings of sadness, irritability, or extreme mood swings, which can significantly impact their quality of life.</p>
            </div>
        </div>

        <div class="Type">
            <img src="./public/Content/images2/Psychotic.png" class="TypeI" width="200px" data-aos="flip-right" loading='lazy'/>
            <p>Psychotic Disorder</p>
            <div className='description'>
              <p style={{color:"white"}}>Psychotic disorders involve distorted thinking and perceptions, which can include hallucinations (seeing or hearing things that aren't there) and delusions (strong beliefs that are not based in reality). These disorders can severely affect a person’s ability to function and interact with others.</p>
            </div>
        </div>

        <div class="Type">
            <img src="./public/Content/images2/Personality.png" class="TypeI" width="200px" data-aos="flip-left" loading='lazy'/>
            <p>Personality Disorder</p>
            <div className='description'>
              <p style={{color:"white"}}>Personality disorders are characterized by enduring patterns of behavior, cognition, and inner experience that deviate from cultural expectations. These patterns can lead to significant impairment or distress, affecting relationships and the ability to function in everyday life.</p>
            </div>
        </div>

        <div class="Type">
            <img src="./public/Content/images2/Eating.png" class="TypeI" width="200px" data-aos="flip-up" loading='lazy'/>
            <p>Eating Disorder</p>
            <div className='description'>
              <p style={{color:"white"}}>Eating disorders encompass a range of conditions that involve unhealthy eating habits and attitudes towards food, body weight, and body image. Conditions such as anorexia nervosa, bulimia nervosa, and binge-eating disorder can lead to severe health complications and emotional distress.</p>
            </div>
        </div>

        <div class="Type">
            <img src="./public/Content/images2/Trauma-related.png" class="TypeI" width="200px" data-aos="flip-right" loading='lazy'/>
            <p>Trauma-Related Disorder</p>
            <div className='description'>
              <p style={{color:"white"}}>Trauma-related disorders occur in response to experiencing or witnessing a traumatic event. Post-Traumatic Stress Disorder (PTSD) is a common example, where individuals may relive the trauma through flashbacks or nightmares, often leading to anxiety and emotional distress.</p>
            </div>
        </div>

        <div class="Type">
            <img src="./public/Content/images2/Substance-related-Addictive.png" class="TypeI" width="200px" data-aos="flip-left" loading='lazy'/>
            <p>Substance-Related and Addictive Disorder</p>
            <div className='description'>
              <p style={{color:"white"}}>This type of disorder involves the harmful use of psychoactive substances, including alcohol and drugs, leading to significant impairment or distress. These disorders can cause physical, psychological, and social issues, making it challenging for individuals to manage their lives.</p>
            </div>
        </div>

        <div class="Type">
            <img src="./public/Content/images2/Neurodevelopment.png" class="TypeI" width="200px" data-aos="flip-up" loading='lazy'/>
            <p>Neurodevelopment Disorder</p>
            <div className='description'>
              <p style={{color:"white"}}>Neurodevelopmental disorders typically manifest in early childhood and affect how the brain develops. Conditions such as Autism Spectrum Disorder (ASD) and Attention-Deficit/Hyperactivity Disorder (ADHD) can affect cognitive, social, and emotional functioning.</p>
            </div>
        </div>

        <div class="Type">
            <img src="./public/Content/images2/Dissociative.png" class="TypeI" width="200px" data-aos="flip-right" loading='lazy'/>
            <p>Dissociative Disorder</p>
            <div className='description'>
              <p style={{color:"white"}}>Dissociative disorders involve a disconnection between thoughts, identity, consciousness, and memory. Individuals may experience a detachment from their thoughts and sense of self, often as a coping mechanism in response to trauma.</p>
            </div>
        </div>

        <div class="Type">
            <img src="./public/Content/images2/Somatoform.png" class="TypeI" width="200px" data-aos="flip-left" loading='lazy'/>
            <p>Somatoform Disorder</p>
            <div className='description'>
              <p style={{color:"white"}}>Somatoform disorders are characterized by physical symptoms that cannot be fully explained by a medical condition. Individuals may experience significant distress and impairment due to these symptoms, which can lead to frequent medical visits and anxiety.</p>
            </div>
        </div>

        <div class="Type">
            <img src="./public/Content/images2/Sleep.png" class="TypeI" width="200px" data-aos="flip-up" loading='lazy'/>
            <p>Sleep Disorder</p>
            <div className='description'>
              <p style={{color:"white"}}>Sleep disorders encompass a range of conditions that affect the ability to sleep well on a regular basis. Insomnia, sleep apnea, and narcolepsy are examples that can lead to daytime fatigue, mood disturbances, and health complications.</p>
            </div>
        </div>

        <div class="Type">
            <img src="./public/Content/images2/Neurocognitive.png" class="TypeI" width="200px" data-aos="flip-right" loading='lazy'/>
            <p>Neurocognitive Disorder</p>
            <div className='description'>
              <p style={{color:"white"}}>Neurocognitive disorders primarily affect cognitive functions such as memory, attention, and problem-solving. Dementia and Delirium are examples, often resulting from injury, disease, or substance use, leading to significant impairments in daily living.</p>
            </div>
        </div>
    </div>

    <div className='QuizC' id="targetSection">
      <h1 align="center">Know Yourself</h1>
      <p>This is a simple quiz like test that will help you understand your mental health.</p>
      <p>This quiz will give you a personalized guide.</p>
      <Link to="/quiz" align>
        <Button className="GetStarted" data-aos="zoom-in">Start Quiz</Button>
      </Link>
    </div>
    </>
  );
};

export default Home;
