type IFindValidationMessageByType =
  | 'matches'
  | 'file'
  | 'min'
  | 'exact'
  | 'beCorrect'
  | 'password'
  | 'number'
  | 'confirmPassword';

export const findValidationMessageByType = (
  type: IFindValidationMessageByType = 'beCorrect',
  message: string = 'ورودی'
): string => {
  switch (type) {
    case 'matches':
      return `${message} معتبر نیست`;
    case 'file':
      return `باید اندازه فایل کمتر از ${message} کیلوبایت باشد`;
    case 'min':
      return `حداقل ${message} حرف`;
    case 'exact':
      return `باید ${message} حرف باشد`;
    case 'beCorrect':
      return `${message} خود را به درستی وارد کنید`;
    case 'number':
      return `${message} عدد وارد کنید`;
    case 'password':
      return `رمز عبور باید دارای ۸ کاراکتر، یک حرف بزرگ، یک حرف کوچیک، یک عدد و یک کاراکتر باشد`;
    case 'confirmPassword':
      return `پسورد ها مطابقت ندارند`;
    default:
      return 'ضروری';
  }
};

export const validationMessageRequired = (name: string = 'فیلد'): string =>
  `${name} اجباری می باشد`;
