import express from 'express';

import { Task } from '../models/taskModel.js';

const router = express.Router()

//Route for Save a New Task
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: "Send all required fields",
      });
    }
    const newTASK = {
      title : req.body.title,
      description : req.body.description
    };
    const task = await Task.create(newTASK);
    return res.status(200).send(task);

  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Route gor get all books from database
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});

    return res.status(200).json({
      count: tasks.length,
      data: tasks,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Route gor get One books from database by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    return res.status(200).json(task);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Route for update book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: "Content can not be empty!",
      });
    }
    const { id } = req.params;
    const result = await Task.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task updated successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

//Route for delete task
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Task.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

export default router;