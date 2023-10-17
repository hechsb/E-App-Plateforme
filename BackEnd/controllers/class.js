const { Class, User, StudentClasses } = require("../Database");

module.exports = {
  getAllClasses: async (req, res) => {
    try {
      const classRooms = await Class.findAll();
      res.status(200).json(classRooms);
    } catch (error) {
      console.log(error);
      res.status(500).send("An error occurred: " + error.message);
    }
  },
  getOneClass: async (req, res) => {
    const classId = req.params.classId;
    try {
      const classRoom = await Class.findOne({
        where: {
          id: classId,
        },
      });
      if (classRoom) {
        res.status(200).json(classRoom);
      } else {
        res.status(404).send("Class doesn't exist");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("An error occurred: " + error.message);
    }
  },
  addClass: async (req, res) => {
    const { name, image } = req.body;
    try {
      const classRoom = await Class.create({ name, image });
      res.status(201).json(classRoom);
    } catch (error) {
      console.log(error);
      res.status(500).send("An error occurred: " + error.message);
    }
  },
  updateClass: async (req, res) => {
    const classId = req.params.classId;
    const { name, image } = req.body;
    try {
      await Class.update(
        { name, image },
        {
          where: {
            id: classId,
          },
        }
      );
      res.status(201).send("Class updated successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("An error occurred: " + error.message);
    }
  },
  deleteClass: async (req, res) => {
    const classId = req.params.classId;
    try {
      await Class.destroy({
        where: {
          id: classId,
        },
      });
      res.status(204).send("Class deleted successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("An error occurred: " + error.message);
    }
  },
  addUserToClass: async (req, res) => {
    const classId = req.params.classId;
    const userId = req.params.userId;
  
    try {
      const classRoom = await Class.findByPk(classId);
      if (!classRoom) {
        console.log("owwwww problem with classRoom")
        return res.status(404).send('Class not found');
      }
      const user = await User.findByPk(userId);
      if (!user) {
        console.log("owwwwwwww problem user")
        return res.status(404).send('User not found');
      }
  
      await classRoom.addUser(user, { status: 'pending' });
      res.status(201).send('User request to join the class is pending');
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred: " + error.message);
    }
  },

  acceptUserRequest: async (req, res) => {
    const classId = req.params.classId;
    const userId = req.params.userId;

    try {
      const classRoom = await Class.findByPk(classId);
      if (!classRoom) {
        return res.status(404).send("Class not found");
      }
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).send("User not found");
      }

      await StudentClasses.update({ status: "accepted" }, {
        where: {
          classId: classId,
          studentId: userId
        }
      });
      res.status(200).send("User's request has been accepted");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred: " + error.message);
    }
  },  

  //for accepted users  
  getUserEnrolledClasses: async (req, res) => {
    const userId = req.params.userId;

    try {
      const enrolledClasses = await StudentClasses.findAll({
        where: {
          studentId: userId,
          status: 'accepted',
        },
      });

      const classIds = enrolledClasses.map((enrollment) => enrollment.classId);

      const enrolledClassDetails = await Class.findAll({
        where: {
          id: classIds,
        },
      });

      res.status(200).json(enrolledClassDetails);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred: " + error.message);
    }
  },
  
  rejectUserRequest: async (req, res) => {
    const classId = req.params.classId;
    const userId = req.params.userId;

    try {
      const classRoom = await Class.findByPk(classId);
      if (!classRoom) {
        return res.status(404).send("Class not found");
      }
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).send("User not found");
      }

      await StudentClasses.update({ status: "rejected" }, {
        where: {
          classId: classId,
          studentId: userId
        }
      });
      res.status(200).send("User's request has been rejected");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred: " + error.message);
    }
  },

  getAllPendingStudentClasses: async (req, res) => {
    console.log("accesssssssssssssssssssssssssssssss")
    try {
      const pendingStudentClasses = await StudentClasses.findAll({
        where: {
          status: 'pending'
        }
      });
      res.status(200).json(pendingStudentClasses);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred: " + error.message);
    }
  }
  
};
