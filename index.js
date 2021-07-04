const nodemailer = require('nodemailer');
const user = {
	username: '',
	password: '',
};
async function main() {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: user.username,
			pass: user.password,
		},
	});
	try {
		let info = await transporter.sendMail({
			from: '"Test" thisisatestbot420@gmail.com',
			to: 'nr.rnarayan@gmail.com, "captaink3nway@gmail.com',
			subject: 'Hello ✔',
			text: 'Hello world?',
			html: '<b>Hello world?</b>',
		});
		console.log('Message sent: %s', info.messageId);
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	} catch (err) {
		console.log(err);
	}
}

module.exports = main;
