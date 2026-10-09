/**
 * ============================================================
 * SRI KRISHNA TRADERS — GOOGLE APPS SCRIPT LEAD NOTIFICATION
 * ============================================================
 * Handles customer inquiries & quote requests from the website.
 * 1. Saves lead details into Google Sheet
 * 2. Sends a professional HTML email notification to the store team
 *
 * HOW TO DEPLOY:
 * 1. Open your Google Sheet (e.g. "Sri Krishna Traders Leads")
 * 2. Click Extensions > Apps Script
 * 3. Replace all code with this file's content
 * 4. Update the RECIPIENT_EMAIL below with your desired email
 * 5. Click Deploy > New deployment > Select type: "Web app"
 * 6. Set "Execute as: Me" and "Who has access: Anyone"
 * 7. Click Deploy, Authorize access, and copy the Web App URL!
 */

// 1. Enter your recipient email address below:
const RECIPIENT_EMAIL = "srikrishnatraders.nkl@gmail.com"; // <-- UPDATE WITH YOUR EMAIL!

function doPost(e) {
  try {
    var sheetName = 'Quote Inquiries'; // Name of sheet tab
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);

    // If sheet is fresh/empty, add professional headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Customer Name",
        "Phone Number",
        "Email Address",
        "Project Type",
        "Material Category",
        "On-Site Delivery Required?",
        "Requirements / Message"
      ]);
      
      // Style header row
      sheet.getRange(1, 1, 1, 8)
        .setBackground("#0B192C")
        .setFontColor("#FFFFFF")
        .setFontWeight("bold");
    }

    // Parse incoming data from the website
    var parsedData = {};
    if (e && e.postData && e.postData.contents) {
      parsedData = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      parsedData = e.parameter;
    }

    // Extract fields with fallbacks
    var name = parsedData.name || (parsedData.firstName ? (parsedData.firstName + " " + (parsedData.lastName || "")).trim() : "Customer");
    var phone = parsedData.phone || parsedData.phoneNumber || "Not Provided";
    var email = parsedData.email || "Not Provided";
    var projectType = parsedData.projectType || parsedData.inquiryType || "General Project";
    var category = parsedData.category || "Electrical & Building Materials";
    var requirement = parsedData.requirement || parsedData.message || "Material Quote Request";
    var deliveryRequired = (parsedData.deliveryRequired === true || parsedData.deliveryRequired === "true" || parsedData.deliveryRequired === "Yes") ? "Yes (On-Site Delivery)" : "Store Pickup";
    
    var timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "Asia/Kolkata", "dd-MMM-yyyy HH:mm:ss");

    // 1. Save data into Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      phone,
      email,
      projectType,
      category,
      deliveryRequired,
      requirement
    ]);

    // 2. Prepare Clean WhatsApp Link for Quick Reply
    var cleanPhone = phone.replace(/[^0-9]/g, '');
    var waLink = cleanPhone ? "https://wa.me/" + (cleanPhone.length === 10 ? "91" + cleanPhone : cleanPhone) : "";

    // 3. Email Subject
    var subject = "🔔 New Quote Request: " + category + " — " + name + " (" + phone + ")";

    // 4. Professional Branded HTML Email Template
    var htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
      
      <!-- Brand Header -->
      <div style="background-color: #0B192C; padding: 24px 20px; text-align: center; border-bottom: 3px solid #EA580C;">
        <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px;">SRI KRISHNA TRADERS</h2>
        <p style="color: #fb923c; margin: 4px 0 0 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">New Website Customer Quote Request</p>
      </div>

      <div style="padding: 24px 20px;">
        <p style="font-size: 15px; line-height: 1.5; margin-top: 0; color: #334155;">Hello Team,</p>
        <p style="font-size: 14px; line-height: 1.5; color: #475569;">You have received a new material quote enquiry through the <strong>Sri Krishna Traders</strong> website.</p>
        
        <!-- Customer Details Table -->
        <table style="width: 100%; border-collapse: collapse; margin-top: 18px; font-size: 13px;">
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569; width: 35%;">Customer Name</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569;">Phone Number</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #0f172a;">
              <a href="tel:${phone}" style="color: #ea580c; font-weight: 700; text-decoration: none;">📞 ${phone}</a>
              ${waLink ? ` &nbsp;|&nbsp; <a href="${waLink}" style="color: #16a34a; font-weight: 600; text-decoration: none;">💬 WhatsApp</a>` : ''}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569;">Email Address</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #0f172a;">
              ${email !== "Not Provided" ? `<a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>` : '<span style="color: #94a3b8;">Not provided</span>'}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569;">Project Type</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #0f172a;">${projectType}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569;">Material Category</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #0f172a; font-weight: 600; color: #ea580c;">${category}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; color: #475569;">Delivery Preference</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #0f172a;">${deliveryRequired}</td>
          </tr>
        </table>

        <!-- Customer Requirement / Material List -->
        <h4 style="margin-top: 24px; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #0B192C;">Materials / Requirement List:</h4>
        <div style="background-color: #f8fafc; padding: 14px 16px; border-left: 4px solid #ea580c; border-radius: 6px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #1e293b; border: 1px solid #e2e8f0; border-left-width: 4px;">
${requirement}
        </div>

        <!-- Action Callout Button -->
        <div style="margin-top: 24px; text-align: center;">
          <a href="tel:${phone}" style="display: inline-block; background-color: #ea580c; color: #ffffff; font-weight: bold; font-size: 13px; padding: 10px 24px; border-radius: 8px; text-decoration: none; box-shadow: 0 2px 4px rgba(234,88,12,0.3);">
            Call Customer Now (${phone})
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background-color: #f1f5f9; padding: 14px 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0;">Sri Krishna Traders — 460/7, Tiruchengode Main Road, Thummankurichi, Namakkal</p>
        <p style="margin: 4px 0 0 0;">Authorized Dealer for Havells, Crompton, Finolex, V-Guard & RR Kābel</p>
      </div>

    </div>
    `;

    // Send Email
    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: subject,
      htmlBody: htmlBody
    });

    // Return JSON Success response
    return ContentService.createTextOutput(JSON.stringify({ "status": "success", "message": "Quote request recorded successfully" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return JSON Error response
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// GET endpoint (for verification or healthcheck)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ "status": "ready", "store": "Sri Krishna Traders" }))
    .setMimeType(ContentService.MimeType.JSON);
}

// CORS preflight handler
function doOptions(e) {
  return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT);
}
