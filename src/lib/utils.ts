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

//  ai generated 🎉
export const getNext5Days = () => {
  const dates = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let i = 0; i < 5; i++) {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return dates;
};

export const getAvailableTimeSlots = () => {
  return [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
};

export const APPOINTMENT_TYPES = [
  { id: "checkup", name: "Regular Checkup", duration: "60 min", price: "$120" },
  { id: "cleaning", name: "Teeth Cleaning", duration: "45 min", price: "$90" },
  { id: "consultation", name: "Consultation", duration: "30 min", price: "$75" },
  { id: "emergency", name: "Emergency Visit", duration: "30 min", price: "$150" },
];
