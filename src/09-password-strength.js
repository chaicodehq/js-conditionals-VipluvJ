/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if (typeof password !== "string" || password.length === 0) return "weak";

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-= \[\] {}|;:,.<>?]/.test(password);
  let criteriaMet = 0;

  if (password.length >= 8) {
    criteriaMet = criteriaMet + 1;
  }

  if (hasUpperCase) {
    criteriaMet = criteriaMet + 1;
  }

  if (hasLowerCase) {
    criteriaMet = criteriaMet + 1;
  }

  if (hasNumber) {
    criteriaMet = criteriaMet + 1;
  }

  if (hasSpecialChar) {
    criteriaMet = criteriaMet + 1;
  }

  console.log("Password:", password);
  console.log("Length:", password.length);
  console.log("Has Uppercase:", hasUpperCase);
  console.log("Has Lowercase:", hasLowerCase);
  console.log("Has Number:", hasNumber);
  console.log("Has Special Char:", hasSpecialChar);
  console.log("criteriaMet", criteriaMet);

  if (criteriaMet === 0) return "weak";
  if (criteriaMet === 1) return "weak";
  if (criteriaMet === 2) return "medium";
  if (criteriaMet === 3) return "medium";
  if (criteriaMet === 4) return "strong";
  if (criteriaMet === 5) return "very strong";
  console.log(hasSpecialChar);
  return hasSpecialChar;
}

checkPasswordStrength("C0mpl3x#Pwd");
