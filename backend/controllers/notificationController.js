import Notification from '../models/Notification.js';

export const createNotification = async (req, res) => {
  try {
    const { userID, message, type } = req.body;
    const notification = new Notification({ userID, message, type });
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().populate('userID');
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
