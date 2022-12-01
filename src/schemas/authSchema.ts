import joi from "joi";

const authSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  phonenumber: joi
    .string()
    .regex(/^[0-9]{10}$/)
    .required(),
  type: joi.boolean(),
});
export default authSchema;
