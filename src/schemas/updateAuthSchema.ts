import joi from "joi";

const updateAuthSchema = joi.object({
  name: joi.string(),
  email: joi.string().email(),
  password: joi.string(),
  phonenumber: joi.string().regex(/^[0-9]{10}$/),
  type: joi.boolean(),
});
export default updateAuthSchema;
