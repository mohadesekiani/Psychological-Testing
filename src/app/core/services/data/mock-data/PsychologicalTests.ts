import { IPsychological } from '../../../shema/models/Ipsychological';

// rest full fekr kon shalam shorba nakon ke har chi ke farq dare bayad joda bashe
//TODO: seperate these  data to 2 arrays. ok?na alan ok? چرا اخه
export let PsychologicalTests: Array<IPsychological> = [
  {
    id: 1,
    title: 'تست شخصیت شناسی',
    questions: [
      {
        id: 1,
        question: 'معرفی کردن خودتان به دیگران برایتان سخت است.',
        options: [
          { value: '1', label: 'بسیار سخت' },
          { value: '2', label: ' سخت' },
          { value: '3', label: 'بسیار آسان' },
          { value: '4', label: 'آسان ' },
        ],
      },
      {
        id: 2,
        question:
          'اغلب در افکار خود غرق می‌شوید و محیط اطرافتان را فراموش می‌کنید.',
        options: [
          { value: '1', label: 'بسیار ' },
          { value: '2', label: ' اصلا' },
          { value: '3', label: ' گاهی' },
        ],
      },
      {
        id: 3,
        question:
          'سعی می‌کنید در اسرع وقت به ایمیل‌های خود پاسخ بدهید و صندوق ورودی شلوغ را تحمل نمی‌کنید.',
        options: [
          { value: '1', label: 'بسیار ' },
          { value: '2', label: ' اصلا' },
          { value: '3', label: ' گاهی' },
        ],
      },
      {
        id: 4,
        question:
          'به‌راحتی می‌توانید آرام بمانید و تمرکز کنید حتی وقتی فشار زیادی وجود داشته باشد.',
        options: [
          { value: '1', label: 'بسیار ' },
          { value: '2', label: ' اصلا' },
          { value: '3', label: ' گاهی' },
        ],
      },
      {
        id: 5,
        question: 'معمولاً مکالمات را شما شروع نمی‌کنید.',
        options: [
          { value: '1', label: 'بسیار ' },
          { value: '2', label: ' اصلا' },
          { value: '3', label: ' گاهی' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'تست استعداد یابی کودکان ',
    questions: [
      {
        id: 1,
        question: 'وانمود به کتاب خواندن می کند و به داستانها گوش می دهد.',
        options: [
          { value: '1', label: 'بیشتر اوقات' },
          { value: '2', label: ' بعضی اوقات' },
          { value: '3', label: 'اصلا' },
        ],
      },
    ],
  },
];

export const childEstedadYabiTestQuestions: IPsychological = {
  id: 2,
  title: 'تست استعداد یابی کودکان ',
  questions: [
    {
      id: 1,
      question: 'وانمود به کتاب خواندن می کند و به داستانها گوش می دهد.',
      options: [
        { value: '1', label: 'بیشتر اوقات' },
        { value: '2', label: ' بعضی اوقات' },
        { value: '3', label: 'اصلا' },
      ],
    },
  ],
};
