# פרויקט אוטומציה - בונוס לשבית

פרויקט אוטומציה ב-Playwright לאתר SauceDemo

## תיאור הפרויקט
פרויקט זה כולל מערכת בדיקות אוטומטיות לאתר SauceDemo באמצעות Playwright. הפרויקט בנוי עם Page Object Model למבנה נקי וקל לתחזוקה.

## מבנה הפרויקט
```
├── pages/                     # Page Object Model classes
│   ├── CartPage.js           # עמוד עגלת קניות
│   ├── CheckoutPage.js       # עמוד הזמנה
│   ├── LoginPage.js          # עמוד התחברות
│   └── ProductsPage.js       # עמוד מוצרים
├── tests/                     # קבצי בדיקות
│   ├── example.spec.js       # בדיקות דוגמה
│   ├── saucedemo.spec.js     # בדיקות SauceDemo עם POM
│   ├── saucedemo-shopping.spec.js # בדיקת זרימת קניות
│   └── test-1.spec.js        # בדיקות נוספות
├── package.json              # תלויות הפרויקט
└── playwright.config.js      # קונפיגורציה של Playwright
```

## התקנה והפעלה

### דרישות מוקדמות
- Node.js (גרסה 16 ומעלה)
- npm

### שלבי התקנה
1. שכפול הריפוזיטורי:
```bash
git clone https://github.com/AlexKomanov/ShavitAutomationBonus.git
cd ShavitAutomationBonus
```

2. התקנת תלויות:
```bash
npm install
```

3. התקנת דפדפנים:
```bash
npx playwright install
```

### הפעלת הבדיקות
```bash
# הפעלת כל הבדיקות
npx playwright test

# הפעלת בדיקה ספציפית
npx playwright test tests/saucedemo.spec.js

# הפעלה עם דוח HTML
npx playwright test --reporter=html

# הפעלה במצב debug
npx playwright test --debug
```

## בדיקות קיימות

### בדיקות SauceDemo
- **התחברות מלאה**: בדיקת זרימת התחברות, הוספת מוצרים לעגלה והשלמת הזמנה
- **בדיקות שגיאות**: בדיקת משתמש חסום, התחברות ללא פרטים
- **זרימת קניות מתקדמת**: הוספת המוצרים היקרים ביותר לעגלה

### תכונות מיוחדות
- Page Object Model לארגון קוד נקי
- תמיכה במספר דפדפנים (Chrome, Firefox, Safari)
- דוחות HTML מפורטים
- תמיכה בהקלטת וידאו ו-screenshots

## קונפיגורציה
הפרויקט מוגדר לרוץ על:
- Chromium (Chrome)
- Firefox
- WebKit (Safari)

ניתן לשנות את הקונפיגורציה בקובץ `playwright.config.js`.

## תרומה לפרויקט
1. בצע Fork לריפוזיטורי
2. צור branch חדש (`git checkout -b feature/new-feature`)
3. בצע commit לשינויים (`git commit -am 'Add new feature'`)
4. דחף ל-branch (`git push origin feature/new-feature`)
5. פתח Pull Request

## רישיון
פרויקט זה מוגש תחת רישיון ISC.