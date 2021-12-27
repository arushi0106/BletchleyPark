import nodemailer from "nodemailer";

export const mailer = (type, user) => {
  let mailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "bletchleypark79@gmail.com",
      pass: "bletchley@79",
    },
  });
  let message;
  if (type == "contest") {
    message +=
      "We invite you to participate in our weekly contest. Go to http://localhost:3000 to compete now.";
  } else if (type === "newuser") {
    message +=
      "We welcome you to the Bletchley Park family. Go to  http://localhost:3000 and explore Bletchley Park.";
  }
  let mailDetails = {
    to: user, //"mithi.basu09@gmail.com",
    subject: "Bletchley Park | Weekly Contest",
    html: message,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log(err);
    }
  });
};
