import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

import * as sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = functions.config().sendgrid.key;
sgMail.setApiKey(SENDGRID_API_KEY);

export const sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite((change) => {
  const dataAfterChange = change.after.val();
  // Only send email for new messages.
  if (change.before.val() || !dataAfterChange.name) {
    return;
  }

  const val = dataAfterChange;

  const msg = {
    to: 'tomcatbuzz@yahoo.com',
    from: 'firebase@angularFire.com',
    subject: 'You have a new contact request',
    text: `Your message content. \n
          Sender's Name: ${val.name} \n
          Sender's Email ${val.email} \n
          Subject: ${val.subject} \n
          Content: ${val.message}`
  };
  return sgMail.send(msg)
    .then(() => console.log('email sent!'))
    .catch((error: any) => {
      console.log(error)
    });
});