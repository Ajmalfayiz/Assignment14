const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters",
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  next();
};

const validateCustomer = (req, res, next) => {
  const {
    name,
    email,
    phone,
    company,
    address,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !company ||
    !address
  ) {
    return res.status(400).json({
      success: false,
      message: "All customer fields are required",
    });
  }

  next();
};

const validateCustomerUpdate = (req, res, next) => {
  const allowedFields = ["name", "email", "phone", "company", "address"];
  const fields = Object.keys(req.body);

  if (!fields.length || fields.some((field) => !allowedFields.includes(field))) {
    return res.status(400).json({
      success: false,
      message: "At least one valid customer field is required",
    });
  }

  if (fields.some((field) => typeof req.body[field] !== "string" || !req.body[field].trim())) {
    return res.status(400).json({
      success: false,
      message: "Customer fields must be non-empty strings",
    });
  }

  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  validateCustomer,
  validateCustomerUpdate,
};