const Doctor = require ("../models/doctor")

module.exports = {
    createDoctor: async (req, res,next) => {
       // fullname, email, age, address, gender, specialty, yearOfGrad
        const { username, password} = req.body;
        try {
            const doctor = await Doctor.create({ username, password});
            res.status(201).json(doctor);
        } catch (e) {
            next({ message: e.message, status: 500 });
        }
    },
    logDoctor : async (req, res,next) => {
        const { username, password } = req.body;
        try {
            const doctor = await Doctor.findOne({ username});
            if (!doctor) return next({
                message: "we didn,t find any doctor with this username!: "+username,
                status: 401,
            });
            if (!(await doctor.comparePasswords(password)))
                throw Error("Wrong Password,Try again !!");
            res.status(201).json(doctor);
        } catch (e) {
            next({ message: e.message, status: 500 });
        }
    },
    updateDoctor: async (req, res,next) => {
        const { username, password, _id } = req.body,
            id = req.params.id;
        try {
            if (!(id.toString()==_id.toString()))
            return next({
                message: "You aren't allowed to update other Users infos.",
                status: 401,
            });
            const doctor = await Doctor.findById(id);
            doctor.username = username ? username : doctor.username;   
            doctor.password = password ? password : doctor.password;
            await doctor.save();
            res.status(201).send(doctor);
        } catch (e) {
            next({ message: e.message, status: 500 });
        }
    },showDoctor: async (req, res) => {
        const id = req.params.id
        try {
            const doctor = await Doctor.findById(id);
            res.json(doctor);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
}