import React from 'react';
import './Preference.css';
import { Link } from 'react-router-dom';

const Preference = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Preferences saved');
  };

  return (
    <div className="preference-page">
      <h2>Student Preferences</h2>
      <form onSubmit={handleSubmit}>
        {/* Feedback Frequency */}
        <div className="question">
          <p>How often would you like to receive feedback on your progress?</p>
          <label className="input-container">
            <input type="radio" name="feedback" value="after_lesson" />
            After each lesson
          </label>
          <label className="input-container">
            <input type="radio" name="feedback" value="weekly" />
            Weekly
          </label>
          <label className="input-container">
            <input type="radio" name="feedback" value="monthly" />
            Monthly
          </label>
        </div>

        {/* Assessments Preferences */}
        <div className="question">
          <p>Which types of assessments do you prefer?</p>
          <label className="input-container">
            <input type="checkbox" name="assessments" value="quizzes" />
            Quizzes
          </label>
          <label className="input-container">
            <input type="checkbox" name="assessments" value="projects" />
            Projects
          </label>
          <label className="input-container">
            <input type="checkbox" name="assessments" value="assignments" />
            Written assignments
          </label>
          <label className="input-container">
            <input type="checkbox" name="assessments" value="code_challenges" />
            Code challenges
          </label>
        </div>

        {/* Learning Materials Preferences */}
        <div className="question">
          <p>What types of learning materials do you prefer?</p>
          <label className="input-container">
            <input type="checkbox" name="learning_materials" value="video_tutorials" />
            Video tutorials
          </label>
          <label className="input-container">
            <input type="checkbox" name="learning_materials" value="text_articles" />
            Text-based articles
          </label>
          <label className="input-container">
            <input type="checkbox" name="learning_materials" value="interactive_exercises" />
            Interactive exercises
          </label>
        </div>

        {/* Content Complexity Preferences */}
        <div className="question">
          <p>What level of content complexity do you prefer?</p>
          <label className="input-container">
            <input type="radio" name="content_complexity" value="beginner_friendly" />
            Beginner-friendly
          </label>
          <label className="input-container">
            <input type="radio" name="content_complexity" value="intermediate_level" />
            Intermediate level
          </label>
          <label className="input-container">
            <input type="radio" name="content_complexity" value="advanced_level" />
            Advanced level
          </label>
          <label className="input-container">
            <input type="radio" name="content_complexity" value="customizable" />
            Customizable based on my progress
          </label>
        </div>

        {/* Study Resources Preferences */}
        <div className="question">
          <p>Which types of study resources do you prefer?</p>
          <label className="input-container">
            <input type="checkbox" name="study_resources" value="reference_books_articles" />
            Reference books and articles
          </label>
          <label className="input-container">
            <input type="checkbox" name="study_resources" value="flashcards_quick_guides" />
            Flashcards and quick guides
          </label>
          <label className="input-container">
            <input type="checkbox" name="study_resources" value="online_courses" />
            Online courses
          </label>
          <label className="input-container">
            <input type="checkbox" name="study_resources" value="youtube_videos" />
            Youtube video links
          </label>
        </div>

        {/* Real World Examples Preferences */}
        <div className="question">
          <p>How helpful are real-world examples for your learning?</p>
          <label className="input-container">
            <input type="radio" name="real_world_examples" value="very_helpful" />
            Very helpful
          </label>
          <label className="input-container">
            <input type="radio" name="real_world_examples" value="somewhat_helpful" />
            Somewhat helpful
          </label>
          <label className="input-container">
            <input type="radio" name="real_world_examples" value="neutral" />
            Neutral
          </label>
          <label className="input-container">
            <input type="radio" name="real_world_examples" value="not_helpful" />
            Not helpful
          </label>
        </div>

        {/* Pace Adjustment Preferences */}
        <div className="question">
          <p>Do you prefer adaptive or fixed pacing for your learning?</p>
          <label className="input-container">
            <input type="radio" name="pace_adjustment" value="adaptive_pacing" />
            Adaptive pacing
          </label>
          <label className="input-container">
            <input type="radio" name="pace_adjustment" value="fixed_pace" />
            Fixed pace
          </label>
        </div>

        {/* Assessment Types Preferences */}
        <div className="question">
          <p>Which types of assessments do you prefer?</p>
          <label className="input-container">
            <input type="checkbox" name="assessment_types" value="multiple_choice_quizzes" />
            Multiple-choice quizzes
          </label>
          <label className="input-container">
            <input type="checkbox" name="assessment_types" value="open_ended_questions" />
            Open-ended questions
          </label>
          <label className="input-container">
            <input type="checkbox" name="assessment_types" value="real_world_projects" />
            Real-world projects
          </label>
        </div>

        {/* Support Materials Preferences */}
        <div className="question">
          <p>Which types of support materials do you prefer?</p>
          <label className="input-container">
            <input type="checkbox" name="support_materials" value="detailed_documentation" />
            Detailed documentation
          </label>
          <label className="input-container">
            <input type="checkbox" name="support_materials" value="step_by_step_guides" />
            Step-by-step guides
          </label>
          <label className="input-container">
            <input type="checkbox" name="support_materials" value="faqs_help_sections" />
            FAQs and help sections
          </label>
          <label className="input-container">
            <input type="checkbox" name="support_materials" value="example_codes_templates" />
            Example codes and templates
          </label>
        </div>

        {/* Button Container */}
        <div className="button-container">
          <Link to="/student-signup" className="back-button">Back</Link>
          <button type="submit" className="done-button">Done</button>
        </div>
      </form>
    </div>
  );
};

export default Preference;
