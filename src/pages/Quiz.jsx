import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Quiz.css';

const Quiz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const questions = [
    {
      question: "How often do you experience excessive worry or anxiety?",
      options: [
        { text: "Almost every day", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't experience excessive worry", score: 0 },
      ],
    },
    {
      question: "Do you often feel sad, hopeless, or have a loss of interest in activities?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't feel this way", score: 0 },
      ],
    },
    {
      question: "Do you experience hallucinations or hear voices that others don’t?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't experience these symptoms", score: 0 },
      ],
    },
    {
      question: "Have you noticed memory problems or confusion that affects your daily life?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't experience these issues", score: 0 },
      ],
    },
    {
      question: "Do you frequently experience difficulties in maintaining attention or hyperactivity?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't experience these symptoms", score: 0 },
      ],
    },
    {
      question: "Do you often have distressing memories, nightmares, or flashbacks related to a traumatic event?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't experience these symptoms", score: 0 },
      ],
    },
    {
      question: "Have you noticed significant changes in your behavior, mood, or thoughts after a traumatic event?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I haven't experienced a traumatic event", score: 0 },
      ],
    },
    {
      question: "Do you frequently engage in excessive or compulsive behaviors related to substance use or gambling?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't engage in these behaviors", score: 0 },
      ],
    },
    {
      question: "Have you experienced significant difficulties in controlling substance use or gambling habits?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't experience these difficulties", score: 0 },
      ],
    },
    {
      question: "Do you often have challenges with social interactions or communication?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't have these challenges", score: 0 },
      ],
    },
    {
      question: "Do you experience periods where you feel detached from yourself or your surroundings?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't experience these feelings", score: 0 },
      ],
    },
    {
      question: "Have you noticed significant memory gaps or time lapses that you can't explain?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't have memory gaps like this", score: 0 },
      ],
    },
    {
      question: "Do you often worry excessively about your health despite reassurances from medical professionals?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't excessively worry about my health", score: 0 },
      ],
    },
    {
      question: "Have you experienced persistent physical symptoms without any medical explanation?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I haven't experienced such symptoms", score: 0 },
      ],
    },
    {
      question: "Do you often experience periods of intense sadness, hopelessness, or changes in mood?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't experience these mood changes", score: 0 },
      ],
    },
    {
      question: "Have you noticed significant changes in your energy levels or activity levels?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "My energy levels remain consistent", score: 0 },
      ],
    },
    {
      question: "Do you experience hallucinations or delusions that affect your thoughts or behavior?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I don't experience these symptoms", score: 0 },
      ],
    },
    {
      question: "Have you noticed disruptions in your thinking or difficulties distinguishing reality from imagination?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "My thinking remains consistent", score: 0 },
      ],
    },
    {
      question: "Do you frequently experience intense and unstable relationships?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "My relationships are stable", score: 0 },
      ],
    },
    {
      question: "Have you noticed difficulties regulating your emotions or impulsive behaviors?",
      options: [
        { text: "Yes, frequently", score: 5 },
        { text: "Occasionally", score: 3 },
        { text: "Rarely or never", score: 1 },
        { text: "Sometimes, but not frequently", score: 4 },
        { text: "I can regulate my emotions and behaviors well", score: 0 },
      ],
    },
  ];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null); 
  const [resultMessage, setResultMessage] = useState("");
  const navigate = useNavigate();

  const showQuestion = questions[currentQuestionIndex];

  const selectOption = (score, index) => {
    setTotalScore(prevScore => prevScore + score);
    setSelectedOptionIndex(index);
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setSelectedOptionIndex(null);
      }, 500);
    } else {
      setShowResult(true);
      setResultMessage(getResultMessage());
    }
  };

  const getResultMessage = () => {
    if (totalScore >= 0 && totalScore <= 20) {
      return "No identified disorder.";
    } else if (totalScore >= 21 && totalScore <= 30) {
      return "Potential Anxiety Disorders (e.g., Generalized Anxiety Disorder, Panic Disorder, Phobias, OCD, PTSD).";
    } else if (totalScore >= 31 && totalScore <= 40) {
      return "Potential Mood Disorders (e.g., Major Depressive Disorder, Bipolar Disorder).";
    } else if (totalScore >= 41 && totalScore <= 50) {
      return "Potential Psychotic Disorders (e.g., Schizophrenia, Schizoaffective Disorder).";
    } else if (totalScore >= 51 && totalScore <= 60) {
      return "Potential Personality Disorders (e.g., Borderline Personality Disorder, Antisocial Personality Disorder, Narcissistic Personality Disorder).";
    } else if (totalScore >= 61 && totalScore <= 70) {
      return "Potential Substance-Related and Addictive Disorders (e.g., Substance Use Disorders, Gambling Disorder).";
    } else if (totalScore >= 71 && totalScore <= 80) {
      return "Potential Neurodevelopmental Disorders (e.g., ADHD, Autism Spectrum Disorder, Intellectual Developmental Disorder).";
    } else if (totalScore >= 81 && totalScore <= 90) {
      return "Potential Dissociative Disorders (e.g., Dissociative Identity Disorder, Depersonalization-Derealization Disorder).";
    } else if (totalScore >= 91 && totalScore <= 100) {
      return "Potential Somatoform Disorders (e.g., Somatic Symptom Disorder, Illness Anxiety Disorder).";
    } else if (totalScore >= 101 && totalScore <= 110) {
      return "Potential Trauma-Related Disorders (e.g., PTSD, Acute Stress Disorder).";
    } else if (totalScore >= 111 && totalScore <= 120) {
      return "Potential Sleep Disorders (e.g., Insomnia Disorder, Sleep Apnea, Narcolepsy).";
    } else if (totalScore >= 121 && totalScore <= 130) {
      return "Potential Neurocognitive Disorders (e.g., Alzheimer's Disease, Parkinson's Disease Dementia, Vascular Dementia).";
    } else {
      return "Your score is outside the assessed range. Consider seeking a professional evaluation.";
    }
  };
  return (
    <>
    <video src="/public/Content/Background/Quizbg1.mp4" autoPlay muted loop id='bg'/>
    <div className="quiz">
      <div className={`quizContainer ${showResult ? 'fade-out' : 'fade-in'}`}>
      {!showResult ? (
        <div className='question-container'>
          <h2 className='question'>{showQuestion.question}</h2>
          <div className='options-container'>
            {showQuestion.options.map((option, index) => (
              <button 
                key={index} 
                className={`option ${selectedOptionIndex === index ? 'selected' : ''}`} 
                onClick={() => selectOption(option.score, index)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className='result-container'>
          <h2>{getResultMessage()}</h2>
          <button className="continue-button" onClick={() => navigate('/guide')}>Continue
            <span class="icon-right"></span>
            <span class="icon-right after"></span>
          </button>
        </div>
      )}
    </div>
    </div>
    </>

  );
};

export default Quiz;
