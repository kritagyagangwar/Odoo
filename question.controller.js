// controllers/question.controller.js
import Question from '../models/question.model.js';

export const createQuestion = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const question = await Question.create({ title, description, tags });
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create question' });
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

export const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ error: 'Question not found' });
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch question' });
  }
};
