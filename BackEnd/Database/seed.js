const { Class, User, Course } = require("./index")
const bcrypt = require('bcrypt')


const createAdmin = async () => {
    const password = 'adminadmin'
    const encryptedPassword = await bcrypt.hash(password, 10)
    try {
        await User.create({ firstName: "admin", lastName: "admin", email: "admin@admin.com", password: encryptedPassword, role: "admin" })
    }
    catch (error) {
        console.log(error)

    }
}

const createClasses = async () => {

    try {
        await Class.bulkCreate([
            { name: 'Frontend', image: 'https://www.interviewbit.com/blog/wp-content/uploads/2021/09/frontend.jpg' },
            { name: 'BackEnd', image: 'https://as2.ftcdn.net/v2/jpg/02/99/62/11/1000_F_299621124_vutDKbNwRJG6poJRQQIMYfsc4tJCTO5E.jpg' }

        ]);
    } catch (error) {
        console.log(error);
    }
}


// const createFrontCourse = async () => {


//     try {
//         const newCourse = await Course.create({
//             name: 'React',
//             file: 'C:\Users\jawhe\Desktop\E-Learning\E-App-Plateforme\BackEnd\files\React-fundamentals',
//         });
//         const classInstance = await Class.findByPk(1);
//         await classInstance.addCourse(newCourse);
//     } catch (error) {
//         console.error(error);
//     }
// }


// const createBackCourse = async () => {

//     try {
//         const newCourse = await Course.create({
//             name: 'ExpressJS',
//             file: 'C:\Users\jawhe\Desktop\E-Learning\E-App-Plateforme\BackEnd\files\Intro-to-express.pdf',
//         });
//         const classInstance = await Class.findByPk(2);
//         await classInstance.addCourse(newCourse);
//     } catch (error) {
//         console.error(error);
//     }
// }

createAdmin()
createClasses()
// createFrontCourse()
// createBackCourse()
