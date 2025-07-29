# Email Setup Guide for Contact Form (SMTP Configuration)

## 🚀 Quick Setup

Your contact form is now configured to use custom SMTP settings! This works with any email provider.

## 📝 Step 1: Create Environment File

Create a file called `.env.local` in your project root and add your SMTP credentials:

```env
# SMTP Configuration
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
```

## 🔧 Step 2: Common SMTP Settings

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-password
```

### Your Own Domain (cPanel, etc.)
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=info@yourdomain.com
EMAIL_PASS=your-password
```

### Custom SMTP Server
```env
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
```

## 🔒 Security Notes

- ✅ `.env.local` is automatically ignored by Git
- ✅ Never commit your email password to version control
- ✅ Use App Passwords for Gmail (more secure)
- ✅ SMTP_SECURE=true for port 465, false for port 587

## 🧪 Testing

1. Start your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your email inbox for the message

## 📧 Email Format

The emails you receive will include:
- Sender's name and email
- Their message
- Timestamp
- Professional HTML formatting
- Reply-to set to the sender's email (so you can reply directly)

## 🛠️ Troubleshooting

### "Email service not configured"
- Make sure `.env.local` exists and has all required SMTP settings
- Restart your development server after creating the file

### "Authentication failed"
- Check your email and password are correct
- For Gmail: Make sure you're using an App Password, not your regular password
- Verify SMTP settings with your email provider

### "Connection timeout"
- Check your internet connection
- Verify SMTP_HOST and SMTP_PORT are correct
- Some networks block SMTP ports (try a different network)

### "SSL/TLS issues"
- Try setting `SMTP_SECURE=false` for port 587
- Try setting `SMTP_SECURE=true` for port 465
- Check if your provider requires specific SSL settings

## 🎯 Next Steps

Once you've set up the SMTP credentials:
1. Test the contact form
2. Deploy to production
3. Add the same environment variables to your hosting platform

Your contact form will now send real emails to your inbox using your custom SMTP settings! 🎉 