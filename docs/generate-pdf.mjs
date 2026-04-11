import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { writeFileSync } from 'fs';

const pdf = await PDFDocument.create();
const font = await pdf.embedFont(StandardFonts.Helvetica);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

const blue = rgb(0.1, 0.45, 0.91);
const black = rgb(0.13, 0.13, 0.13);
const gray = rgb(0.4, 0.4, 0.4);

function addPage() {
  const page = pdf.addPage([595, 842]); // A4
  return page;
}

function drawText(page, text, x, y, options = {}) {
  page.drawText(text, {
    x, y,
    size: options.size || 11,
    font: options.bold ? bold : font,
    color: options.color || black,
    maxWidth: options.maxWidth || 500,
    lineHeight: options.lineHeight || 15,
  });
}

function wrapText(text, maxWidth, fontSize, f) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const test = current ? current + ' ' + word : word;
    if (f.widthOfTextAtSize(test, fontSize) > maxWidth) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function drawWrapped(page, text, x, y, options = {}) {
  const f = options.bold ? bold : font;
  const size = options.size || 11;
  const maxW = options.maxWidth || 490;
  const lh = options.lineHeight || 16;
  const lines = wrapText(text, maxW, size, f);
  let cy = y;
  for (const line of lines) {
    drawText(page, line, x, cy, { ...options, size });
    cy -= lh;
  }
  return cy;
}

// ── PAGE 1 ──
let page = addPage();
let y = 790;

// Title
drawText(page, 'Google Ads API - Design Document', 50, y, { size: 20, bold: true, color: blue });
y -= 25;
drawText(page, 'Bosphorus Night - Istanbul Dinner Cruise Booking Platform', 50, y, { size: 11, color: gray });
y -= 35;

// Info box
page.drawRectangle({ x: 45, y: y - 55, width: 505, height: 65, color: rgb(0.91, 0.94, 0.99), borderWidth: 0 });
drawText(page, 'Company: Bosphorus Night', 55, y - 5, { size: 10, bold: true });
drawText(page, 'Website: https://bosphorusnight.com', 300, y - 5, { size: 10 });
drawText(page, 'MCC ID: 950-210-0352', 55, y - 20, { size: 10 });
drawText(page, 'Contact: reservation@bosphorusnight.com', 300, y - 20, { size: 10 });
drawText(page, 'Date: April 2026', 55, y - 35, { size: 10 });
y -= 75;

// Section 1
drawText(page, '1. Company Overview', 50, y, { size: 14, bold: true });
y -= 20;
y = drawWrapped(page, 'Bosphorus Night is a premium dinner cruise booking company based in Istanbul, Turkey. We connect international tourists with curated Bosphorus dinner cruise experiences, offering three packages (Standard EUR 35, Premium EUR 50, VIP EUR 80). Customers can book via WhatsApp or phone call, and all customer communication is in English.', 50, y);
y -= 15;

// Section 2
drawText(page, '2. Purpose of Google Ads API Usage', 50, y, { size: 14, bold: true });
y -= 20;
y = drawWrapped(page, 'We use the Google Ads API exclusively for internal business reporting and campaign monitoring within our private admin dashboard. The API integration serves the following purposes:', 50, y);
y -= 10;

const purposes = [
  'Campaign Performance Monitoring: View impressions, clicks, cost, and conversions for our own Google Ads campaigns',
  'Keyword Performance Tracking: Monitor which keywords drive traffic and bookings',
  'ROI Analysis: Calculate return on ad spend (ROAS) by correlating ad costs with actual reservation revenue',
  'Internal Reporting: Generate performance reports within our admin panel for business decision-making',
];
for (const p of purposes) {
  y = drawWrapped(page, '  *  ' + p, 55, y, { maxWidth: 480 });
  y -= 5;
}
y -= 10;

// Section 3
drawText(page, '3. Technical Architecture', 50, y, { size: 14, bold: true });
y -= 22;
drawText(page, '3.1 System Overview', 50, y, { size: 12, bold: true });
y -= 18;

const techRows = [
  ['Component', 'Technology'],
  ['Frontend', 'Static HTML/JS admin panel (private, password-protected)'],
  ['Backend', 'Vercel Serverless Functions (Node.js)'],
  ['Database', 'Supabase (PostgreSQL)'],
  ['Authentication', 'Custom token-based auth (admin role only)'],
  ['Google Ads API', 'Version 23'],
];
for (let i = 0; i < techRows.length; i++) {
  const [col1, col2] = techRows[i];
  const isHeader = i === 0;
  if (isHeader) {
    page.drawRectangle({ x: 50, y: y - 12, width: 495, height: 18, color: rgb(0.95, 0.95, 0.95) });
  }
  drawText(page, col1, 55, y, { size: 10, bold: isHeader });
  drawText(page, col2, 200, y, { size: 10, bold: isHeader });
  y -= 18;
}
y -= 10;

drawText(page, '3.2 API Endpoints Used', 50, y, { size: 12, bold: true });
y -= 18;
const apiRows = [
  ['Endpoint', 'Purpose', 'Frequency'],
  ['GoogleAdsService.SearchStream', 'Campaign metrics', 'On-demand'],
  ['GoogleAdsService.SearchStream', 'Keyword metrics', 'On-demand'],
];
for (let i = 0; i < apiRows.length; i++) {
  const [c1, c2, c3] = apiRows[i];
  const isHeader = i === 0;
  if (isHeader) page.drawRectangle({ x: 50, y: y - 12, width: 495, height: 18, color: rgb(0.95, 0.95, 0.95) });
  drawText(page, c1, 55, y, { size: 9, bold: isHeader });
  drawText(page, c2, 280, y, { size: 9, bold: isHeader });
  drawText(page, c3, 430, y, { size: 9, bold: isHeader });
  y -= 18;
}
y -= 10;

drawText(page, '3.3 Authentication Flow', 50, y, { size: 12, bold: true });
y -= 18;
const authSteps = [
  '1. Admin clicks "Connect Google Ads" in the private admin panel',
  '2. OAuth 2.0 redirect to Google for consent',
  '3. Callback receives authorization code, exchanges for refresh token',
  '4. Refresh token stored securely in database (Supabase settings table)',
  '5. Subsequent API calls use refresh token to obtain access tokens',
];
for (const s of authSteps) {
  drawText(page, s, 60, y, { size: 10 });
  y -= 16;
}

// ── PAGE 2 ──
page = addPage();
y = 790;

drawText(page, '3.4 Data Flow', 50, y, { size: 12, bold: true });
y -= 22;
const flow = [
  'Admin Panel (Browser)',
  '       |',
  '       v',
  '/api/panel/google-ads  (Vercel Serverless)',
  '       |',
  '       +-- action=status     -> Check OAuth connection',
  '       +-- action=campaigns  -> Fetch campaign metrics',
  '       +-- action=keywords   -> Fetch keyword metrics',
  '       |',
  '       v',
  'Google Ads API v23 (SearchStream GAQL queries)',
];
page.drawRectangle({ x: 50, y: y - (flow.length * 14) - 5, width: 400, height: flow.length * 14 + 15, color: rgb(0.96, 0.96, 0.96) });
for (const line of flow) {
  drawText(page, line, 60, y, { size: 9 });
  y -= 14;
}
y -= 15;

// Section 4
drawText(page, '4. GAQL Queries Used', 50, y, { size: 14, bold: true });
y -= 22;
drawText(page, '4.1 Campaign Performance', 50, y, { size: 12, bold: true });
y -= 18;
const q1 = [
  'SELECT campaign.id, campaign.name, campaign.status,',
  '  metrics.impressions, metrics.clicks,',
  '  metrics.cost_micros, metrics.conversions',
  'FROM campaign',
  'WHERE segments.date DURING LAST_7_DAYS',
];
page.drawRectangle({ x: 50, y: y - (q1.length * 14) - 5, width: 450, height: q1.length * 14 + 15, color: rgb(0.96, 0.96, 0.96) });
for (const line of q1) { drawText(page, line, 60, y, { size: 9 }); y -= 14; }
y -= 15;

drawText(page, '4.2 Keyword Performance', 50, y, { size: 12, bold: true });
y -= 18;
const q2 = [
  'SELECT ad_group_criterion.keyword.text,',
  '  ad_group_criterion.keyword.match_type,',
  '  metrics.impressions, metrics.clicks,',
  '  metrics.cost_micros, metrics.conversions',
  'FROM keyword_view',
  'WHERE segments.date DURING LAST_7_DAYS',
  'ORDER BY metrics.clicks DESC LIMIT 50',
];
page.drawRectangle({ x: 50, y: y - (q2.length * 14) - 5, width: 450, height: q2.length * 14 + 15, color: rgb(0.96, 0.96, 0.96) });
for (const line of q2) { drawText(page, line, 60, y, { size: 9 }); y -= 14; }
y -= 20;

// Section 5
drawText(page, '5. Access & Security', 50, y, { size: 14, bold: true });
y -= 20;
const security = [
  'Users: Internal employees only (1-2 admin users)',
  'Access control: Admin panel requires authentication; only admin role can access Google Ads features',
  'Token storage: OAuth refresh token stored in encrypted database, never exposed to frontend',
  'No third-party access: API is not used for any external service, client, or public-facing feature',
  'No automated bidding: We only read data; no campaign creation or modification via API',
];
for (const s of security) {
  y = drawWrapped(page, '  *  ' + s, 55, y, { maxWidth: 480, size: 10 });
  y -= 6;
}
y -= 10;

// Section 6
drawText(page, '6. Rate Limiting & Compliance', 50, y, { size: 14, bold: true });
y -= 20;
const compliance = [
  'API calls are made on-demand only when an admin views the dashboard (not scheduled/automated)',
  'Estimated usage: 10-30 API calls per day maximum',
  'We comply with all Google Ads API Terms of Service',
  'No data is shared with third parties',
  'No end-user data from Google Ads is stored beyond performance metrics',
];
for (const c of compliance) {
  y = drawWrapped(page, '  *  ' + c, 55, y, { maxWidth: 480, size: 10 });
  y -= 6;
}
y -= 20;

// Footer
page.drawLine({ start: { x: 50, y: y }, end: { x: 545, y: y }, thickness: 0.5, color: rgb(0.8, 0.8, 0.8) });
y -= 15;
drawText(page, 'Bosphorus Night - Google Ads API Design Document - April 2026', 50, y, { size: 9, color: gray });
y -= 14;
drawText(page, 'Contact: reservation@bosphorusnight.com  |  https://bosphorusnight.com', 50, y, { size: 9, color: gray });

// Save
const pdfBytes = await pdf.save();
writeFileSync('c:/Users/DELL/Desktop/bosphorusnight/docs/google-ads-api-design.pdf', pdfBytes);
console.log('PDF saved!');
