// Preferences.js

import React from 'react';
import './Preference.css'; 

const Preference = () => {
  return (
    <div className="preference-container">
      <h2>Student Preference</h2>
      <form>
        <div className="question">
          <p>How often would you like to receive feedback on your progress?</p>
          <label>
            <input type="radio" name="feedback" value="after_lesson" />
            After each lesson
          </label>
          <label>
            <input type="radio" name="feedback" value="weekly" />
            Weekly
          </label>
          <label>
            <input type="radio" name="feedback" value="monthly" />
            Monthly
          </label>
        </div>

        <div className="question">
          <p>What type of assessments do you find most useful?</p>
          <label>
            <input type="checkbox" name="assessments" value="quizzes" />
            Quizzes
          </label>
          <label>
            <input type="checkbox" name="assessments" value="projects" />
            Projects
          </label>
          <label>
            <input type="checkbox" name="assessments" value="assignments" />
            Written assignments
          </label>
          <label>
            <input type="checkbox" name="assessments" value="code_challenges" />
            Code challenges
          </label>
        </div>

        <div className="question">
          <p>Which format do you prefer for learning materials?</p>
          <label>
            <input type="checkbox" name="learning_materials" value="video_tutorials" />
            Video tutorials
          </label>
          <label>
            <input type="checkbox" name="learning_materials" value="text_articles" />
            Text-based articles
          </label>
          <label>
            <input type="checkbox" name="learning_materials" value="interactive_exercises" />
            Interactive exercises
          </label>
        </div>

        <div className="question">
          <p>How do you prefer the complexity of the content to be presented?</p>
          <label>
            <input type="radio" name="content_complexity" value="beginner_friendly" />
            Beginner-friendly
          </label>
          <label>
            <input type="radio" name="content_complexity" value="intermediate_level" />
            Intermediate level
          </label>
          <label>
            <input type="radio" name="content_complexity" value="advanced_level" />
            Advanced level
          </label>
          <label>
            <input type="radio" name="content_complexity" value="customizable" />
            Customizable based on my progress
          </label>
        </div>

        <div className="question">
          <p>Which additional study resources do you find most helpful?</p>
          <label>
            <input type="checkbox" name="study_resources" value="reference_books_articles" />
            Reference books and articles
          </label>
          <label>
            <input type="checkbox" name="study_resources" value="flashcards_quick_guides" />
            Flashcards and quick guides
          </label>
          <label>
            <input type="checkbox" name="study_resources" value="online_courses" />
            Online courses
          </label>
          <label>
            <input type="checkbox" name="study_resources" value="youtube_videos" />
            Youtube video links
          </label>
        </div>

        <div className="question">
          <p>How helpful do you find access to real-world examples and case studies?</p>
          <label>
            <input type="radio" name="real_world_examples" value="very_helpful" />
            Very helpful
          </label>
          <label>
            <input type="radio" name="real_world_examples" value="somewhat_helpful" />
            Somewhat helpful
          </label>
          <label>
            <input type="radio" name="real_world_examples" value="neutral" />
            Neutral
          </label>
          <label>
            <input type="radio" name="real_world_examples" value="not_helpful" />
            Not helpful
          </label>
        </div>

        <div className="question">
          <p>Do you prefer the learning system to adjust the pace based on your performance?</p>
          <label>
            <input type="radio" name="pace_adjustment" value="adaptive_pacing" />
            Yes, I prefer adaptive pacing
          </label>
          <label>
            <input type="radio" name="pace_adjustment" value="fixed_pace" />
            No, I prefer a fixed pace
          </label>
        </div>

        <div className="question">
          <p>What types of assessments do you prefer to evaluate your knowledge?</p>
          <label>
            <input type="checkbox" name="assessment_types" value="multiple_choice_quizzes" />
            Multiple-choice quizzes
          </label>
          <label>
            <input type="checkbox" name="assessment_types" value="open_ended_questions" />
            Open-ended questions
          </label>
          <label>
            <input type="checkbox" name="assessment_types" value="real_world_projects" />
            Real-world projects
          </label>
        </div>

        <div className="question">
          <p>Which support materials do you find most useful while learning?</p>
          <label>
            <input type="checkbox" name="support_materials" value="detailed_documentation" />
            Detailed documentation
          </label>
          <label>
            <input type="checkbox" name="support_materials" value="step_by_step_guides" />
            Step-by-step guides
          </label>
          <label>
            <input type="checkbox" name="support_materials" value="faqs_help_sections" />
            FAQs and help sections
          </label>
          <label>
            <input type="checkbox" name="support_materials" value="example_codes_templates" />
            Example codes and templates
          </label>
        </div>

        {/* Submit button */}
        <div className="button-container">
          <button type="submit">Save Preference</button>
        </div>
      </form>
    </div>
  );
};

export default Preference;
