"use server"
import nodemailer from 'nodemailer';


const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
    },
});

// Verify transport configuration once during server startup
(async () => {
    try {
        const testResult = await transport.verify();
        console.log('messsss', testResult)
        return testResult
    } catch (error) {
        console.error({ error });
    }
})();

export const sendEmail = async ({
    to, name, subject, body
}: {
    to: string;
    name: string;
    subject: string;
    body: string | Promise<string>;
}) => {
    try {
        const resolvedBody = await Promise.resolve(body);
        console.log('resolvedBody', resolvedBody)

        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to,
            subject,
            html: resolvedBody,
        });
        console.log("", sendResult);
    } catch (error) {
        console.log(error);
    }
}



