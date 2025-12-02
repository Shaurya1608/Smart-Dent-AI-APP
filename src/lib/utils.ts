import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}

// phone formatting function for US numbers - ai generated 🎉
// export const formatPhoneNumber = (value: string) => {
//   if (!value) return value;

//   const phoneNumber = value.replace(/[^\d]/g, "");
//   const phoneNumberLength = phoneNumber.length;

//   if (phoneNumberLength < 4) return phoneNumber;
//   if (phoneNumberLength < 7) {
//     return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
//   }
//   return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
// };


// phone formatting function for Indian numbers 🇮🇳
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;
  let phone = value.replace(/[^\d]/g, "");
  if (phone.startsWith("91") && phone.length > 10) {
    phone = phone.slice(2);
  }
  if (phone.length > 10) {
    return `+91 ${phone.slice(2, 7)} ${phone.slice(7, 12)}`;
  }
  if (phone.length <= 5) {
    // first part
    return phone;
  }
  if (phone.length <= 10) {
    // format: 98765 43210
    return `${phone.slice(0, 5)} ${phone.slice(5)}`;
  }

  return phone;
};
