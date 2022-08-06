const mongoose = require('mongoose'),
    bcrypt = require("bcrypt")
    jwt = require("jsonwebtoken")

let doctorSchema = new mongoose.Schema(
    {
        // fullName: {
        //     type: String,
        //     required: true
        // },
        username:{  
            type: String,
            unique: true,
        },
        // age:{
        //     type: Number,
        //     required: true
        // },
        // address: {
        //     type: String,
        //     required: true
        // },
        password:{
            type: String,
            required: true
        },
        // email:{
        //     type: String,
        //     required: true,
        //     unique: true,
        // },
        // gender:{
        //     required: true,
        //     type: String
        // },
        // // degreeproof:{
        // //     type: BinData,
        // //     required: true,
        // // },
        // specialty: {
        //     type: String,
        //     required: true
        // },
        // yearOfGrad:{
        //     type: Number,
        //     required: true,
        // }
}
)

doctorSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) this.password = await bcrypt.hash(this.password, 13);
        next();
    } catch (e) {
        next(e);
    }
    });
    doctorSchema.methods.comparePasswords = async function (passwordSent, next) {
    try {
        return await bcrypt.compare(passwordSent, this.password);
    } catch (e) {
        next(e);
    }
};

doctorSchema.methods.insertToken = function () {
    let doctor = this.toObject();
    doctor.token = jwt.sign(
        {
            username: doctor.username
        },
        "secret-key",
        {
            expiresIn: "100h",
        }
    );
    return doctor;
};

module.exports = mongoose.model("doctor", doctorSchema);