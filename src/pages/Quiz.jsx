import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Quiz.css';

const Quiz = () => {
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
  const navigate = useNavigate();

  const showQuestion = questions[currentQuestionIndex];

  const resultType = None;

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
    }
  };

  const getResultMessage = () => {
    if (totalScore >= 0 && totalScore <= 20) {
      resultType = None;
      return "No identified disorder.";
    } else if (totalScore >= 21 && totalScore <= 30) {
      resultType = 1;
      return "Potential Anxiety Disorders (e.g., Generalized Anxiety Disorder, Panic Disorder, Phobias, OCD, PTSD).";
    } else if (totalScore >= 31 && totalScore <= 40) {
      resultType = 2;
      return "Potential Mood Disorders (e.g., Major Depressive Disorder, Bipolar Disorder).";
    } else if (totalScore >= 41 && totalScore <= 50) {
      resultType = 3;
      return "Potential Psychotic Disorders (e.g., Schizophrenia, Schizoaffective Disorder).";
    } else if (totalScore >= 51 && totalScore <= 60) {
      resultType = 4;
      return "Potential Personality Disorders (e.g., Borderline Personality Disorder, Antisocial Personality Disorder, Narcissistic Personality Disorder).";
    } else if (totalScore >= 61 && totalScore <= 70) {
      resultType = 5;
      return "Potential Substance-Related and Addictive Disorders (e.g., Substance Use Disorders, Gambling Disorder).";
    } else if (totalScore >= 71 && totalScore <= 80) {
      resultType = 6;
      return "Potential Neurodevelopmental Disorders (e.g., ADHD, Autism Spectrum Disorder, Intellectual Developmental Disorder).";
    } else if (totalScore >= 81 && totalScore <= 90) {
      resultType = 7;
      return "Potential Dissociative Disorders (e.g., Dissociative Identity Disorder, Depersonalization-Derealization Disorder).";
    } else if (totalScore >= 91 && totalScore <= 100) {
      resultType = 8;
      return "Potential Somatoform Disorders (e.g., Somatic Symptom Disorder, Illness Anxiety Disorder).";
    } else if (totalScore >= 101 && totalScore <= 110) {
      resultType = 9;
      return "Potential Trauma-Related Disorders (e.g., PTSD, Acute Stress Disorder).";
    } else if (totalScore >= 111 && totalScore <= 120) {
      resultType = 10;
      return "Potential Sleep Disorders (e.g., Insomnia Disorder, Sleep Apnea, Narcolepsy).";
    } else if (totalScore >= 121 && totalScore <= 130) {
      resultType = 11;
      return "Potential Neurocognitive Disorders (e.g., Alzheimer's Disease, Parkinson's Disease Dementia, Vascular Dementia).";
    } else {
      return "Your score is outside the assessed range. Consider seeking a professional evaluation.";
    }
  };  
  return (
    <div className="quiz">
      <div className={`quizContainer ${showResult ? 'fade-out' : 'fade-in'}`}>
      {!showResult ? (
        <div className='question-container'>
          <h2>{showQuestion.question}</h2>
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
          <button className='continue-button' onClick={() => navigate('/guide')}>
            Continue
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Quiz;
