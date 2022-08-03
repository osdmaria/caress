const mongoose = require('mongoose'),
    bcrypt = require("bcrypt")

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
// doctorSchema.methods.insertToken = function () {
//     let doctorSchema = this.toObject();
//     delete doctor.password;
//     doctor.token = jwt.sign(
//         {
//             id: doctor._id,
//             username: doctor.username,
//         },
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWW91Y2VmIiwibGFzdE5hbWUiOiJNYWRhZGkifQ.Uv4mrLKQWkOjAps3m83Dle8YIU1wC37dFM3FNAKXugg",
//         {
//             expiresIn: "100h",
//         }
//     );
//     return user;
// };

module.exports = mongoose.model("doctor", doctorSchema);