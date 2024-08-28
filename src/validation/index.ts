import { z } from "zod";
import { findValidationMessageByType, validationMessageRequired } from "./findValidationMessageByType";

const validation = {
  email: z.string().email(),
  password: z.string().min(6, { message: "Must be at least 6 characters" }),

  nationalCode: z
    .string()
    .nonempty(validationMessageRequired())
    .length(10, { message: findValidationMessageByType("beCorrect", "کد ملی") })
    .refine((value) => {
      if (!/^\d{10}$/.test(value)) return false;
      const check = +value[9];
      const sum =
        value
          .split("")
          .slice(0, 9)
          .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
      return sum < 2 ? check === sum : check + sum === 11;
    }, findValidationMessageByType("beCorrect", "کد ملی")),

  any: z.string().nonempty(validationMessageRequired()).or(z.any()),
  bankCardNumber: z
    .string()
    .nonempty(validationMessageRequired())
    .length(16, {
      message: findValidationMessageByType("beCorrect", "شماره کارت"),
    })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "شماره کارت")),

  fidaCode: z
    .string()
    .nonempty(validationMessageRequired())
    .min(10, { message: findValidationMessageByType("beCorrect", "کد یکتا") })
    .max(12, { message: findValidationMessageByType("beCorrect", "کد یکتا") })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "کد یکتا")),

  traceCode: z
    .string()
    .nonempty(validationMessageRequired())
    .length(10, {
      message: findValidationMessageByType("beCorrect", "کد پیگیری"),
    })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "کد پیگیری")),
  postalCode: z
    .string()
    .nonempty(validationMessageRequired())
    .length(10, {
      message: findValidationMessageByType("beCorrect", "کد پستی"),
    })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "کد پستی")),
  vin: z
    .string()
    .nonempty(validationMessageRequired())
    .length(17, {
      message: findValidationMessageByType("beCorrect", "vin"),
    }),
  // .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "vin")),
  mobile: z
    .string()
    .nonempty(validationMessageRequired())
    .length(11, {
      message: findValidationMessageByType("beCorrect", "شماره همراه"),
    })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "شماره همراه")),
  taxTrackingCode: z
    .string()
    .nonempty(validationMessageRequired())
    .length(10, {
      message: findValidationMessageByType("beCorrect", "کد رهگیری مالیاتی"),
    })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "کد رهگیری مالیاتی")),
  taxCode: z
    .string()
    .nonempty(validationMessageRequired())
    .length(10, {
      message: findValidationMessageByType("beCorrect", "کد مالیاتی"),
    })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "کد مالیاتی")),

  sheba: z
    .string()
    .nonempty(validationMessageRequired())
    .length(24, {
      message: findValidationMessageByType("beCorrect", "شبا"),
    })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "شبا")),
  shebaNotMelli: z
    .string()
    .nonempty(validationMessageRequired())
    .length(24, {
      message: findValidationMessageByType("beCorrect", "شبا ملی"),
    })
    .refine((value) => {
      if (value.slice(2, 5) === "017") {
        return false;
      }
      return /^\d+$/.test(value);
    }, findValidationMessageByType("matches", "شبا ملی")),
  petition: z
    .string()
    .nonempty(validationMessageRequired())
    .length(16, {
      message: findValidationMessageByType("beCorrect", "دادنامه"),
    })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "دادنامه"))
    .or(
      z
        .string()
        .nonempty(validationMessageRequired())
        .length(18, {
          message: findValidationMessageByType("beCorrect", "دادنامه"),
        })
        .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "دادنامه"))
    ),

  shebaOptional: z
    .string()
    .nonempty(validationMessageRequired())
    .length(24, {
      message: findValidationMessageByType("beCorrect", "شبا"),
    })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "شبا"))
    .optional()
    .or(z.literal("")),
  bankAccountNumber: z
    .string()
    .nonempty(validationMessageRequired())
    .min(6, {
      message: findValidationMessageByType("beCorrect", "شماره حساب"),
    })
    .max(20, {
      message: findValidationMessageByType("beCorrect", "شماره حساب"),
    })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "شماره حساب")),
  amount: z.string().nonempty(validationMessageRequired()),
  operator: z.enum(["mtn", "mci", "rightel"]),
  packageCode: z.string(),
  isCharge: z.boolean(),
  gender: z.string().nonempty(validationMessageRequired()),
  date: z
    .object(
      {
        day: z.number(),
        month: z.number(),
        year: z.number(),
      },
      {
        required_error: validationMessageRequired(),
      }
    )
    .or(z.null()),
  dateString: z.object({
    day: z.string().nonempty(validationMessageRequired()),
    year: z.string().nonempty(validationMessageRequired()),
    month: z.string().nonempty(validationMessageRequired()),
  }),

  requiredString: z.string().nonempty(validationMessageRequired()),
  // requiredNumber: z
  //   .string()
  //   .nonempty(validationMessageRequired())
  //   .refine(
  //     (value) => /^\d+$/.test(value),
  //     findValidationMessageByType(
  //       'beCorrect',
  //       validationMessageRequired('beCorrect')
  //     )
  //   ),
  requiredNumber: z
    .string()
    .nonempty(validationMessageRequired())
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("number")),
  optionalString: z.string().optional(),
  requiredBoolean: z.boolean(),
  optionalBoolean: z.boolean().optional(),
  // optionalNationalCode: z
  //   .string()
  //   .length(10, { message: findValidationMessageByType('beCorrect', 'کد ملی') })
  //   .refine(
  //     (value) => /^\d+$/.test(value),
  //     findValidationMessageByType('beCorrect', 'کد ملی')
  //   )
  //   .optional()
  //   .or(z.literal('')),

  optionalNationalCode: z
    .string()
    .nonempty(validationMessageRequired())
    .length(10, { message: findValidationMessageByType("beCorrect", "کد ملی") })
    .refine(
      // (value) => value === '5892101472064365',
      (value) => {
        if (!/^\d{10}$/.test(value)) return false;
        const check = +value[9];
        const sum =
          value
            .split("")
            .slice(0, 9)
            .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
        return sum < 2 ? check === sum : check + sum === 11;
      },
      findValidationMessageByType("beCorrect", "کد ملی")
    )
    .optional()
    .or(z.literal("")),

  optionalFidaCode: z
    .string()
    .min(10, { message: findValidationMessageByType("beCorrect", "کد یکتا") })
    .max(12, { message: findValidationMessageByType("beCorrect", "کد یکتا") })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "کد یکتا"))
    .optional()
    .or(z.literal("")),

  optionalMobile: z
    .string()
    .length(11, {
      message: findValidationMessageByType("beCorrect", "شماره همراه"),
    })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "شماره همراه"))
    .optional()
    .or(z.literal("")),

  optionalNumber: z
    .string()
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect"))
    .optional()
    .or(z.literal("")),

  optionalDate: z
    .object(
      {
        day: z.number(),
        month: z.number(),
        year: z.number(),
      },
      {
        required_error: validationMessageRequired(),
      }
    )
    .optional()
    .or(z.literal("")),
  optionalDateString: z
    .object(
      {
        day: z.string(),
        month: z.string(),
        year: z.string(),
      },
      {
        required_error: validationMessageRequired(),
      }
    )
    .optional()
    .or(z.literal("")),

  englishString: z.string().refine((value) => /^[A-Za-z]+$/.test(value), {
    message: "فقط حروف انگلیسی مجاز است",
  }),
  farsiString: z.string().refine((value) => /^[\u0600-\u06FF\s]+$/.test(value), {
    message: "فقط حروف فارسی مجاز است",
  }),

  test: z
    .string()
    .nonempty(validationMessageRequired())
    .length(11, {
      message: findValidationMessageByType("beCorrect", "شماره همراه"),
    })
    .refine(
      // (value) => value === '5892101472064365',
      (value) => {
        let cardTotal = 0;
        for (let i = 0; i < 16; i += 1) {
          const c = Number(value[i]);
          if (i % 2 === 0) {
            cardTotal += c * 2 > 9 ? c * 2 - 9 : c * 2;
          } else {
            cardTotal += c;
          }
        }
        return cardTotal % 10 === 0;
      },
      findValidationMessageByType("beCorrect", "شماره همراه")
    ),

  file: z.object({
    data: z.object({}),
  }),
  file2: z.object({
    data: z.object({
      type: z.string().nonempty(validationMessageRequired()),
    }),
  }),
  optionalFile: z
    .object({
      data: z.object({}),
    })
    .optional()
    .or(z.literal("")),
  bankCardNumber2: z.string().refine(
    (value) => {
      // Your custom validation logic for card number
      let cardTotal = 0;
      for (let i = 0; i < 16; i += 1) {
        const c = Number(value[i]);
        if (i % 2 === 0) {
          cardTotal += c * 2 > 9 ? c * 2 - 9 : c * 2;
        } else {
          cardTotal += c;
        }
      }
      return cardTotal % 10 === 0;
    },
    { message: "Invalid card number" }
  ),
  optionalBankCardNumber2: z.string().optional(),

  serialSimcard: z
    .string()
    .nonempty(validationMessageRequired())
    .length(19, {
      message: findValidationMessageByType("beCorrect", "سریال سیم کارت"),
    })
    .refine((value) => /^\d+$/.test(value), findValidationMessageByType("beCorrect", "سریال سیم کارت")),
};
export default validation;
