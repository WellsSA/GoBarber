export default {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: '778dda32d7d585',
    pass: '24e8e208c0f331',
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

/**
 *
 * Possible SMTPs:
 *  - Amazon SES
 *  - Mailgun
 *  - Sparkpost
 *  - Mandril (mailchimp)
 *  - Mailtrap (DEV)
 */
