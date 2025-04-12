import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-firstaid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './firstaid.component.html',
  styleUrls: ['./firstaid.component.css']
})
export class FirstaidComponent {
  selectedCategory: string | null = null;
  selectedCase: any = null;
  showAll: boolean = false;

  categories = [
    { key: 'injuries', name: 'الإصابات الجسدية ', icon: 'fa-solid fa-briefcase-medical', description: 'الإصابات الجسدية تشمل الجروح والكدمات والحروق والكسور، وتتطلب العناية الفورية لتجنب حدوث أضرار إضافية' },
    { key: 'emergencies', name: ' الحالات الطبية الحرجة ', icon: 'fa-solid fa-briefcase-medical', description: 'الحالات الطبية الحرجة تتطلب رعاية فورية وعاجلة لتجنب حدوث أضرار كبيرة أو الوفاة، ويجب التدخل الطبي السريع' },
    { key: 'poisoning', name: 'حالات التسمم ', icon: 'fa-solid fa-briefcase-medical', description: 'التسمم يحدث عند تناول مواد سامة أو ضارة، ويستدعي التدخل الطبي العاجل لتجنب الأضرار الجسيمة' },
    { key: 'chronic', name: ' المشاكل الصحية المزمنة', icon: 'fa-solid fa-briefcase-medical', description: 'المشاكل الصحية المزمنة هي حالات طبية طويلة الأمد تتطلب علاجًا مستمرًا وإدارة لتقليل الأعراض وتحسين جودة الحياة' },
    { key: 'bites', name: 'اللدغات واللسعات', icon: 'fa-solid fa-briefcase-medical', description: 'تشير إلى الإصابات الناتجة عن لدغات أو لسعات حشرات أو حيوانات أو نباتات، وغالبًا ما تؤدي إلى الألم أو التورم أو التهيج' },
    { key: 'strokes', name: 'الجلطات والسكتات', icon: 'fa-solid fa-briefcase-medical', description: 'كلاهما حالات طبية طارئة ناتجة عن اضطراب في تدفق الدم، مما يؤدي إلى تلف في الدماغ أو القلب، ويستلزم التدخل الطبي الفوري' }
  ];

  emergencyCases: Record<string, { title: string; icon: string; steps: string[] }[]> = {
    injuries: [
      { title: 'جروح', icon: 'https://img.icons8.com/color/48/cut.png', steps: [
        'اضغط على الجرح بقطعة قماش نظيفة.',
        'ارفع الجزء المصاب لتقليل النزيف.',
        'لو النزيف مستمر، اتصل بالطوارئ فورًا.'
      ]},
      { title: 'حروق', icon: 'https://img.icons8.com/color/48/fire-element.png', steps: [
        'برد مكان الحرق بماء جاري فاتر لمدة 10 دقائق.',
        'لا تضع أي كريم أو معجون أسنان.',
        'غطّ الحرق بضمادة نظيفة وجافة.'
      ]},
      { title: 'الكسور', icon: 'https://img.icons8.com/color/48/broken-bone.png', steps: [
        'ثبّت الجزء المصاب وتجنب تحريكه.',
        'ضع ثلج لتقليل التورم.',
        'لا تحاول تعديل شكل العظمة.'
      ]},
      { title: 'النزيف الحاد', icon: 'https://img.icons8.com/color/48/blood-drop.png', steps: [
        'اضغط بقوة على الجرح باستخدام قطعة قماش نظيفة أو شاش.',
        'رفع الجزء المصاب إذا كان ممكنًا.',
        'اطلب المساعدة الطبية فورًا.'
      ]},
    ],
    emergencies: [
      { title: 'أزمة قلبية', icon: 'https://img.icons8.com/color/48/heart.png', steps: [
        'اطلب المساعدة الطبية فورًا.',
        'إذا كان المصاب فاقد الوعي، ابدأ في الإنعاش القلبي الرئوي.',
        'استمر في الإنعاش حتى وصول الإسعاف.'
      ]},
      { title: 'الصرع', icon: 'https://img.icons8.com/color/48/epilepsy.png', steps: [
        'أبعد أي أشياء حادة أو خطرة حول الشخص.',
        'لا تحاول الإمساك به أو منع حركاته.',
        'راقب الوقت وإذا استمرت النوبة لأكثر من 5 دقائق، اتصل بالطوارئ.'
      ]},
      { title: 'الاختناق', icon: 'https://img.icons8.com/color/48/choking.png', steps: [
        'اطلب من المصاب السعال إن أمكن.',
        ' إذا لم يستطع المصاب التنفس أو السعال — اضغط بقبضتك أسفل القفص الصدري وادفع بقوة لأعلى.',
        'اتصل بالطوارئ فورًا لو الحالة ما تحسنتش.'
      ]},
      { title: 'التشنجات', icon: 'https://img.icons8.com/color/48/brain.png', steps: [
        'أبعد الأشياء الخطرة من حوالي المصاب.',
        'ما تحاولش تمسكه أو تمنع التشنج.',
        'اتصل بالإسعاف لو استمرت لأكثر من 5 دقائق.'
      ]},
      { title: 'فقدان الوعي', icon: 'https://img.icons8.com/color/48/fainting.png', steps: [
        'تأكد من وجود تنفس.',
        'لو مفيش، ابدأ الإنعاش القلبي.',
        'اتصل بالطوارئ فورًا.'
      ]},
    ],
    poisoning: [
      { title: 'التسمم بالأدوية', icon: 'https://img.icons8.com/color/48/smoke.png', steps: [
        'الاتصال الفوري بالطوارئ وذكر نوع الدواء وكمية الجرعة المتناولة',
        'عدم تحفيز التقيؤ إلا بتوجيه من مختص طبي',
        'التأكد من سلامة التنفس ومراقبة مستوى الوعي',
        'الاحتفاظ بعبوة الدواء لتقديمها للطاقم الطبي عند الوصول',
        'عدم إعطاء المصاب أي طعام أو شراب دون تعليمات طبية'
      ]},
      { title: 'التسمم بالدخان', icon: 'https://img.icons8.com/color/48/smoke.png', steps: [
        'ابتعد عن مكان الدخان فورًا.',
        'حاول تهوية المكان وجعل الشخص يتنفس هواءً نقيًا.',
        'اتصل بالإسعاف فورًا إذا استمرت الأعراض.'
      ]},
      { title: 'التسمم الكيميائي', icon: 'https://img.icons8.com/color/48/toxic.png', steps: [
        'ابتعد عن المكان الذي يحتوي على المواد السامة.',
        'افحص المصاب إذا كان يتنفس أو فاقدًا للوعي.',
        'اتصل بالطوارئ وأخبرهم بنوع المادة السامة.'
      ]},
      { title: 'التسمم بالغذاء', icon: 'https://img.icons8.com/color/48/food-poisoning.png', steps: [
        'اتصل بالطوارئ فورًا.',
        'اعطه ماء أو محلول معالج للجفاف إذا كان قادرًا على شربه.',
        'لا تعطيه أي دواء إلا إذا كانت الحالة واضحة.'
      ]},
      { title: 'التسمم بالكهرباء', icon: 'https://img.icons8.com/color/48/lightning.png', steps: [
        'افصل مصدر الكهرباء فورًا (إذا كان ممكنًا).',
        'افحص المصاب وتأكد من وجود تنفس أو نبض.',
        'إذا كان فاقد الوعي، أبدأ بالإنعاش القلبي الرئوي واطلب المساعدة.'
      ]},
    ],
    chronic: [
      { title: 'الإغماء', icon: 'https://img.icons8.com/color/48/fainting.png', steps: [
        'ضع المصاب في وضعية أفقية وأرفع ساقيه قليلاً.',
        'اتصل بالطوارئ إذا استمر الإغماء لأكثر من دقائق.',
        'حاول إعطاء المصاب ماء إذا كان واعيًا.'
      ]},
      { title: 'هبوط/ارتفاع السكر', icon: 'https://img.icons8.com/color/48/glucose-meter.png', steps: [
        'في حالة الهبوط: أعطه مشروب سكري سريع (عصير أو سكر).',
        'في حالة الارتفاع: راقبه واطلب مساعدة طبية.',
        'اتصل بالطوارئ لو فقد وعيه.'
      ]},
      { title: 'هبوط/ارتفاع الضغط', icon: 'https://img.icons8.com/color/48/heart-health.png', steps: [
        'في حالة الهبوط: مدد المصاب وارفع رجليه.',
        'في حالة الارتفاع: خليه يسترخي وتابع الضغط لو ممكن.',
        'اتصل بالإسعاف لو في صداع شديد أو فقد وعي.'
      ]},
    ],
    bites: [
      { title: 'لدغات ولسعات', icon: 'https://img.icons8.com/color/48/dog-bite.png', steps: [
        'نظف الجرح بالماء والصابون.',
        'غطِ الجرح بضمادة نظيفة.',
        'اتصل بالطوارئ خاصة إذا كانت العضة من حيوان غير معروف أو مفترس.'
      ]},
    ],
    strokes: [
      { title: 'الجلطة الدماغية', icon: 'https://img.icons8.com/color/48/stroke.png', steps: [
        'تحقق من أعراض الجلطة: صعوبة في الكلام، ضعف في أحد الأطراف.',
        'اطلب المساعدة الطبية فورًا.',
        'حاول تهدئة الشخص المصاب، ولا تتركه وحده.'
      ]},
      { title: 'جلطات القلب', icon: 'https://img.icons8.com/color/48/heart-health.png', steps: [
        'اطلب المساعدة الطبية فورًا.',
        'إذا كان المصاب فاقد الوعي، ابدأ في الإنعاش القلبي الرئوي.',
        'استمر في الإنعاش حتى وصول الإسعاف.'
      ]},
    ],
  };

  selectCategory(categoryKey: string) {
    this.selectedCategory = categoryKey;
    this.selectedCase = null;
  }

  selectCase(item: any) {
    this.selectedCase = item;
  }

  goBackToCategories() {
    this.selectedCategory = null;
    this.selectedCase = null;
  }

  goBackToCases() {
    this.selectedCase = null;
  }

  get selectedCategoryName(): string {
    return this.categories.find(c => c.key === this.selectedCategory)?.name || '';
  }

  showAlert() {
    alert('يرجى استخدام هاتفك للاتصال بالإسعاف.');
  }

  toggleViewMoreAndLess() {
    this.showAll = !this.showAll;
  }
}