import ejs from "ejs";
import path from "path";
import nodemailer from "nodemailer";

class Email {
  constructor(user, claim = null, url = null, booking = null, reason = null) {
    this.to = user.email;
    this.firstname = user.firstname;
    this.password = user.password;
    this.email = user.email;
    this.from = 'waseumutoni24@gmail.com'; // Hardcoded sender address
    this.url = url;
    this.message = claim ? claim.message : '';  // Default empty message if not provided
    this.missionname = claim ? claim.missionname : '';
    this.missionstartdate = claim ? claim.missionstartdate : '';
    this.missionlocation = claim ? claim.missionlocation : '';
    this.missionenddate = claim ? claim.missionenddate : '';

  }

  // Create a transporter object using SMTP transport
  createTransport() {
    return nodemailer.createTransport({
      service: 'gmail', // or your email service provider
      auth: {
        user: 'waseumutoni24@gmail.com', // Hardcoded email user
        pass: 'vacr empy jucj ozvl', // Hardcoded email password or app password
      },
    });
  }

  // Send the actual email
  async send(template, subject, title) {
    const transporter = this.createTransport();

    // 1) Render HTML based on an ejs template
    const html = await ejs.renderFile(
      path.join(__dirname, `./../views/email/${template}.ejs`),
      {
        firstname: this.firstname,
        password: this.password,
        email: this.email,
        url: this.url,
        message: this.message,
        missionname: this.missionname,
        missionstartdate: this.missionstartdate,
        missionlocation: this.missionlocation,
        missionenddate: this.missionenddate,
      }
    );

    // 2) Define email options
    const mailOptions = {
      to: this.to, // Recipient's email address
      from: this.from, // Sender's email address (hardcoded)
      subject,
      text: title, // Fallback text version of the email
      html, // HTML version of the email
    };

    // 3) Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent");
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async sendAccountAdded() {
    await this.send("accountAdded", "Welcome! Now", "Welcome to our service.");
  }

  async sendNotification() {
    await this.send("Notification", "Appoitment Notification", "Appoitment Notification");
  }


  async sendResetPasswordCode() {
    await this.send("ResetPasswordCode", "Your Reset Password Code", "Here is your reset password code.");
  }
}


export default Email;
