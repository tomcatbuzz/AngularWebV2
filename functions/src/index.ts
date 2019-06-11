import * as admin from 'firebase-admin';
admin.initializeApp();

export { sendContactMessage } from './sendgrid';
