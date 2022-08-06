const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    pass: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    profileImg: {
      type: String,
      required: true,
      default: `https://d29fhpw069ctt2.cloudfront.net/icon/image/37746/preview.svg`,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("pass")) {
    next();
  }

  const salt = await bcrypt.genSaltSync(10);
  this.pass = await bcrypt.hash(this.pass, salt);
});

userSchema.methods.matchPassword = async function (enteredPass) {
  return await bcrypt.compare(enteredPass, this.pass);
};

const userModel = mongoose.model("UserCollection", userSchema);
module.exports = userModel;
