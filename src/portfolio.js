import React from 'react';
import './Portfolio.css'; // Ensure you have a CSS file for styles

const Portfolio = () => (
  <div className="portfolio-container">
    <h1 className="portfolio-title">My Work</h1>

    <div className="project">
      <h2 className="project-title">INTRODUCTORY PROJECT (03/2022 - 06/2023)</h2>
      <p className="project-description">
        <strong>Waste Food Management:</strong> A Food Waste Management system designed to collect leftover food from hotels and restaurants and distribute it to those in need. This web application enables NGOs that assist poor communities in combating starvation and malnutrition to request food supplies from participating restaurants.
      </p>
    </div>

    <div className="project">
      <h2 className="project-title">MINOR PROJECT (11/2022 - 06/2023)</h2>
      <p className="project-description">
        <strong>Sentiment Analysis Using Machine Learning:</strong> This project involved training a system for multilabel sentiment classification of tweets using deep learning methods. We compared the performance of four algorithms for this task, analyzing the effectiveness of supervised versus unsupervised learning approaches.
      </p>
    </div>

    <div className="project">
      <h2 className="project-title">MAJOR PROJECT (08/2023 - 05/2024)</h2>
      <p className="project-description">
        <strong>Smart Investment: Predicting The Stock Market Movements:</strong> Developed an accurate stock price prediction system. This project explored neural network models like LSTM and GRU, balancing accuracy with computational efficiency. The result is a web application that provides stock price predictions to assist users in making informed investment decisions.
      </p>
    </div>

    <div className="experience">
      <h2 className="experience-title">Python Programming Experience</h2>
      
      <div className="experience-detail">
        <h3 className="experience-subtitle">Internpe</h3>
        <p className="experience-description">
          <strong>Duration:</strong> 07/2023 - 08/2023 <br />
          Completed a 4-week online internship involving various projects and assignments. Received a completion certificate for demonstrating proficiency in Python programming.
        </p>
      </div>

      <div className="experience-detail">
        <h3 className="experience-subtitle">BridgeLabz Solutions</h3>
        <p className="experience-description">
          <strong>Duration:</strong> 04/2024 - Present <br />
          Currently building my skills and developing projects to implement and refine the Python knowledge acquired. Engaged in practical applications to enhance learning and application of Python programming.
        </p>
      </div>
    </div>
  </div>
);

export default Portfolio;

