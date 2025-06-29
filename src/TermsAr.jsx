import React from "react";
import "./assets/style.css";

function App() {
  return (
    <div className="page " dir="rtl">
      <div className="d-flex align-items-center" dir="rtl">
        <img
          src="https://scontent.fcai20-3.fna.fbcdn.net/v/t1.6435-9/78826883_1587724644701070_9121586126597914624_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=tntbv2BstzYQ7kNvwHsj34P&_nc_oc=AdlceZECZz--pski7EHn9QqvHr3TES00s2R6r-McXrQw4rsWjITs0sgZYKYz2Mastjs&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=67SLe_moVebtof3fnQ_qQQ&oh=00_AfNpA-wrZDhAOJrtDtyJ8_XwKxY8-K9m9MAEZVUhTvTZ6w&oe=687766F4"
          alt="logo"
          className="ms-2"
          style={{ width: "60px", height: "60px" }}
        />
        <h1 className="m-2">الشروط والأحكام</h1>
      </div>
      <ol className="h5 p-2">
        <li className="h4 p-2 text-danger">
          التمهيد
          <ul>
            <li className="h6 p-2 text-dark">
              اهلا بك في تطبيق “الورشة” المملوك لشركة الورشة اوتو سيرفيس والذى
              يهدف إلى تسهيل أعمال انقاذ اعطال السيارات على الطريق وصيانة
              السيارات وتغير واصلاح الاطارات والبطاريات عن طريق منصة إلكترونية
              لحجز خدمات الصيانة والانقاذ والاصلاح وغيره ، تمنح “الورشة” عملائها
              السهولة فى ايجاد اقرب الاوناش لانقاذ السيارات على الطرق وتحديد
              اقرب نقطة لمراكز صيانة السيارات واصلاح الاطارات وتغييرها
              والبطاريات من خلال هذا التطبيق الذكى ومن خلال خدمة (GBS) وتعتبر
              هذه الاحكام والشروط هى الوثيقة المحررة بيننا وبين المستخدم
              وموافقته عليها بمثابة اقرار منه بقبول ما تضمنته من حقوق والتزامات
              .
            </li>
            <li className="h6 p-2 text-dark">
              وسوف يكون للمصطلحات التالية المعاني المحددة لكل منها ما لم يرد
              خلاف ذلك بشكل صريح في النص:
            </li>
            <li className="h6 p-2 text-dark">
              اتفاقية الاستخدام: اتفاقية وشروط استخدام “تطبيق الورشة”.
            </li>
            <li className="h6 p-2 text-dark">
              اتفاقية الاستخدام موقع الورشة/الموقع الالكتروني/ تطبيق الورشة /
              التطبيق: صفحة موقع الورشة او التطبيق وكافة الصفحات والروابط
              والأدوات المتفرعة عنها.
            </li>
            <li className="h6 p-2 text-dark">
              الورشة: تطبيق لاجهزة الموبايل الذكية (SMART PHONE)
            </li>
            <li className="h6 p-2 text-dark">
              أنت صيغة المخاطب: أي شخص يقوم بالدخول إلى “الموقع أو التطبيق” ومن
              ثم تصفح أو تنزيل كامل المعلومات المتاحة أو جزء منها، أو استخدام
              الخدمات التي يوفرها “الموقع” بأية وسيلة.
            </li>
            <li className="h6 p-2 text-dark">
              فيما يلي “اتفاقية الاستخدام” التي تخص إستخدامك ودخولك لصفحات
              “تطبيق الورشة”.
            </li>
            <li className="h6 p-2 text-dark">
              إن إستخدامك ”تطبيق الورشة” هو موافقة منك على القبول ببنود وشروط
              “اتفاقية الاستخدام” والتي تتضمن كافة التفاصيل أدناه وأي تعديلات
              لاحقة عليها ، وتعتبر “اتفاقية الاستخدام” سارية المفعول فور بدء
              استخدام ” التطبيق الالكتروني”.
            </li>
          </ul>
        </li>

        <li className="h4 p-2 text-danger">
          سياسة الخصوصية
          <ul>
            <li className="h6 p-2 text-dark">
              {" "}
              سياسة الخصوصية هذه توفر طريقة جمع البيانات الخاصة بك بالطريقة
              المستخدمة من قبل “تطبيق مهارة” وننصح بقراءة سياسة الخصوصية بعناية.
            </li>
            <li className="h6 p-2 text-dark">
              {" "}
              “أنت” توافق على جمع واستخدام البيانات الخاصة بك عن طريق ” التطبيق
              الالكتروني” وبعض مقدمي الخدمة من أي طرف ثالث بالطريقة المنصوص
              عليها في سياسة الخصوصية هذه.
            </li>
            <li className="h6 p-2 text-dark">
              {" "}
              <strong>حماية الخصوصية الخاصة بك</strong> - نحن نقدر ثقتك بنا وبما
              اننا فريق عمل لديه الخبرة القانونية فى حماية حقوق المستخدم وفى
              حماية الخصوصية الخاصة به وبما لنا من معرفة ودراية بقوانين حماية
              الملكية الفكرية والاتفاقيات الدولية فاننا نؤكد على حماية الخصوصية
              الخاصة بك وببياناتك.
            </li>
            <li className="h6 p-2 text-dark">
              {" "}
              نرجو مواصلة قراءة السياسة التالية لفهم كيف يتم التعامل مع
              المعلومات الشخصية الخاصة بك.
            </li>
            <li className="h6 p-2 text-dark">
              {" "}
              <strong>ضمان الخصوصية</strong> - تعد “الورشة” بعدم بيع أو تأجير أو
              مشاركة معلوماتك الشخصية لأي طرف ثالث (بإستثناء ماهو منصوص عليه في
              سياسة الخصوصية هذه) دون موافقتك او فى حالة ما طلب منها ذلك بموجب
              تصريح قضائى من الجهات القضائية.
            </li>
            <li className="h6 p-2 text-dark">
              {" "}
              <strong>مزودي الخدمة</strong> - تقوم “الورشة” بالتعاقد مع شركات
              اخرى لتزويدها بالخدمات مثل التعاقد مع مراكز الصيانة ومنافذ بيع
              الاطارات والبطاريات المعتمدة وغيرها من شركات أخرى أو أفراد لأداء
              المهام نيابة عنها، وقد يكون لهؤلاء إمكانية الوصول إلى المعلومات
              الشخصية اللازمة لأداء وظائفهم، على ألا تستخدم لأغراض أخرى، ولا يتم
              مشاركة المعلومات التالية المقدمة من قبلكم عند تقديم الطلب مع مزودي
              خدمة أعمال الصيانة أو أعمال الاصلاح إلا لمزود خدمة أعمال الصيانة
              أو أعمال الاصلاح الذي تقبلون عرضه وبعد أن يتم الحجز من قبلكم:
              <ul>
                <li className="h6 p-2 text-dark"> الإسم.</li>
                <li className="h6 p-2 text-dark"> رقم الجوال.</li>
                <li className="h6 p-2 text-dark"> الموقع الجغرافي المفصل.</li>
              </ul>
            </li>
            <li className="h6 p-2 text-dark">
              {" "}
              <strong>المعلومات التي يمكن جمعها منك</strong> - يجمع “التطبيق
              الالكتروني” المعلومات التي قدمت من خلالكم عند التسجيل في ” التطبيق
              الورشة” وتقديم الطلبات في سجل مع المعلومات التي عرفناها عنك من
              خلال استخدامك موقعنا، نحن نراقب أيضاً أنماط حركة المرور للعملاء
              واستخدام " التطبيق" والتي تمكننا من تحسين الخدمة.
            </li>
            <li className="h6 p-2 text-dark">
              {" "}
              إذا كنت لا توافق على سياسة الخصوصية هذه، يرجى عدم قبول سياسة
              الخصوصية أثناء التسجيل.
            </li>
            <li className="h6 p-2 text-dark">
              {" "}
              ومع ذلك يقوم “موقع الورشة” بجمع وحفظ المعلومات التالية وإن لم يتم
              تسجيل الدخول:
              <ul>
                <li className="h6 p-2 text-dark">
                  {" "}
                  الدولة التي يتم استخدام “الموقع” منها؛
                </li>
                <li className="h6 p-2 text-dark"> اللغة الإفتراضية للمتصفح؛</li>
                <li className="h6 p-2 text-dark"> نظام تشغيل المستخدم.</li>
              </ul>
            </li>
            <li className="h6 p-2 text-dark">
              {" "}
              ويمكنك إنهاء حسابك في أي وقت، ومع ذلك قد تبقى معلوماتك المحفوظة في
              الأرشيف حتى بعد حذف أو إنهاء حسابك.
            </li>
            <li className="h6 p-2 text-dark">
              {" "}
              <strong>حالات الإفصاح عن المعلومات الخاصة بك</strong> - لن نستخدم
              معلوماتك الشخصية لأي غرض آخر سوى إتمام الصفقة معك، ولن نكشف عن أي
              معلومات شخصية إلا في الحالات التالية:
              <ul>
                <li className="h6 p-2 text-dark"> أن يكون لدينا إذن منك.</li>
                <li className="h6 p-2 text-dark">
                  {" "}
                  لتوفير المنتجات والخدمات التى طلبتها.
                </li>
                <li className="h6 p-2 text-dark">
                  {" "}
                  للمساعدة في منع الأنشطة غير المشروعة أو للدفاع ضد المطالبات
                  القانونية.
                </li>
                <li className="h6 p-2 text-dark">
                  {" "}
                  ظروف خاصة مثل الامتثال لأوامر المحكمة أو الجهات النظامية.
                </li>
              </ul>
            </li>
            <li className="h6 p-2 text-dark">
              {" "}
              <strong>المسئولية التى نتحملها</strong> - رغم أننا نعمل على الحفاظ
              على سرية معلوماتك الشخصية، فإن الإرسال عبر الإنترنت غير آمن
              تماماً. باستخدامك الموقع فإنك توافق على أننا لا نتحمل أية مسؤولية
              عن الإفصاح بسبب أخطاء في الإرسال أو أعمال غير مصرح بها.
            </li>
            <li className="h6 p-2 text-dark">
              {" "}
              نحن نحتفظ بالحق في تغيير أو تحديث سياستنا في أي وقت، ويكون التغيير
              ساري بمجرد وضعه على الموقع ومن ثم تكون موافقتك المسبقة على تلك
              السياسات بمثابة موافقة على اى سياسات تستحدث.
            </li>
          </ul>
        </li>

        <li className="h4 p-2 text-danger">
          الاتصالات الإلكترونية
          <ul>
            <li className="h6 p-2 text-dark">
              بموافقتك على استخدام ” التطبيق ” وخدماتنا الإلكترونية فإنك بذلك
              توافق أيضا على استقبال تواصلنا الإلكتروني معك بجميع أشكاله من خلال
              البريد الإلكتروني أو النشرات الدورية أو الإشعارات والتنبيهات
              المعلن عنها في الموقع الإلكتروني. بناءاً على ذلك فأنت توافق ضمنياً
              على أن جميع المعاملات الإلكترونية المرسلة لك من قبلنا هي ملزمة
              قانونياً وتعامل معاملة المعاملات الكتابية.
            </li>
          </ul>
        </li>
        <li className="h4 p-2 text-danger">
          معلوماتك الشخصية ومعلومات تفاصيل العمليات
          <ul>
            <li className="h6 p-2 text-dark">
              أنت توافق بأن تمنح “تطبيق الورشة” حقاً غير محدود باستخدام معلوماتك
              الشخصية أو غير ذلك، التي زودتنا بها من خلال ” التطبيق الإلكتروني”
              أو أعلنتها على ” التطبيق” من خلال التسجيل أو الشراء، وذلك عبر
              النماذج المخصصة للتواصل والتسجيل، أو عبر أية رسالة إلكترونية أو أي
              من قنوات الإتصال المتاحة بـ”الموقع” بهدف تشغيل وترويج ” التطبيق ”
              وذلك وفقاً لسياسة الخصوصية الخاصة بـ” التطبيق “.
            </li>
          </ul>
        </li>
        <li className="h4 p-2 text-danger">
          حسابك
          <ul>
            <li className="h6 p-2 text-dark">
              إن المعلومات الي تقدمها خلال عملية التسجيل هي بيانات محمية وفقاً
              لبنود سياسة الخصوصية الموضحة أعلاه.
            </li>
            <li className="h6 p-2 text-dark">
              أنت توافق أن تكون مسؤولاً على المحافظة على سرية معلومات حسابك
              وكلمة المرور السرية وتكون بذلك موافقاً أيضا على إعلام “تطبيق
              الورشة ” حالاً بأي استخدام غير مفوض به لكلمة دخولك أو حسابك أو أي
              اختراق آخر لمعلوماتك السرية، ولن يكون “موقع الورشة” بأي حال من
              الأحوال مسؤولاً عن أي خسارة قد تلحق بك بشكل مباشر أو غير مباشر
              معنوياً أو مادياً نتيجة كشف معلومات إسم المستخدم أو كلمة المرور من
              أي طرف ثالث.
            </li>
            <li className="h6 p-2 text-dark">
              في حالة عدم الإلتزام بأي مما ورد في “اتفاقية الاستخدام” فإن لإدارة
              “الموقع” الحق في إيقاف أو إلغاء عضويتك و حجبك عن “الموقع” ونحتفظ
              كذلك بالحق في إلغاء أي حسابات غير مؤكدة وغير مثبتة أو عمليات أو
              حسابات مر عليها مدة طويلة دون نشاط.
            </li>
          </ul>
        </li>

        <li className="h4 p-2 text-danger">
          حقوق الطبع
          <ul>
            <li className="h6 p-2 text-dark">
              يعتبر المحتوى والتنظيم والرسوم البيانية والتصميم والتجميع والترجمة
              الإلكترونية والتحويل الرقمي، وغير ذلك من الأمور المتعلقة
              بـ”الموقع” ملك ”الورشة” وتخضع جميعها للحماية المقامة لها بموجب
              قوانين حقوق الملكية الفكرية والأسماء التجارية وغير ذلك من الحقوق
              بما فيها حقوق الملكية الفكرية، ويمنع منعاً مطلقاً نسخ وإعادة
              وتوزيع واستخدام أو طبع أي من هذه المواد أو أي جزء منها من “الموقع”
              أو من أية مواقع أخرى، إلا في الحدود التي تسمح بها القوانين السارية
              في جمهورية مصر العربية في هذا الشأن.
            </li>
          </ul>
        </li>

        <li className="h4 p-2 text-danger">
          العلامات التجارية
          <ul>
            <li className="h6 p-2 text-dark">
              جميع الكلمات والشعارات على “الموقع او التطبيق ” هي ملك ”الورشة ”
              سواء كانت علامات تجارية مسجلة أو تصاميم أو عبارات أو شعارات أو
              كلمات غير مسجلة وتخضع للحماية بموجب قوانين الملكية الفكرية
              والاتفاقيات الدولية فى هذا الشأن.
            </li>
            <li className="h6 p-2 text-dark">
              كل العلامات التجارية الأخرى غير المملوكة لـ”الورشة” والتي تظهر على
              الموقع هي ملكية لأصحابها، والذين قد يكونوا أو لا يكونوا تابعين أو
              مرتبطين بـ”الورشة”.
            </li>
          </ul>
        </li>

        <li className="h4 p-2 text-danger">
          شروط الخدمة
          <ul>
            <li className="h6 p-2 text-dark">
              <strong>تقديم الطلب وتفاصيل الأسعار</strong>: يمكنك تقديم طلب خدمة
              أعمال الصيانة أو أعمال الاصلاح عن طريق ” التطبيق الإلكتروني” عند
              تسجيلك لتزويدنا بالمعلومات المطلوبة، بعد ذلك يقوم مزودي الخدمة
              التي تتعاقد معهم “الورشة” بالاطلاع على معلومات طلبك وفقا لسياسة
              الخصوصية أعلاه وتزويدك مباشرة بالعروض لتقديم خدمة أعمال الصيانة أو
              أعمال الاصلاح بناء على طلبك ويمكنك اختيار العرض الأنسب لك من تلك
              العروض، مع العلم أن عروض خدمة أعمال الصيانة أو أعمال الاصلاح تخضع
              لتاريخ صلاحية يحدده مزود الخدمة. وفي حال قبول العرض يتم الحجز و
              دفع كامل مبلغ خدمة أعمال الصيانة أو أعمال الاصلاح عند تقديم
              الخدمة. أنت أيضا توافق على أن السعر النهائي يتم بالتفاوض والاتفاق
              مع مزودي الخدمة التي تتعاقد معهم “الورشة” فيما يخص أتعاب خدمة
              أعمال الصيانة أو أعمال الاصلاح.
            </li>
            <li className="h6 p-2 text-dark">
              يتضمن الطلب بيان بجميع الاعمال المطلوبة (صيانة – انقاذ طريق – تغير
              زيوت وفلاتر – اصلاح اطارات او تغيرها – بطاريات سيارات) التي ترغب
              في إنجازها، نرجو تعبئة البيان بدقة لأن مزود خدمة أعمال الصيانة أو
              أعمال الاصلاح يقدم العرض لك بناء على هذا البيان. مع العلم أنه في
              حالة عدم رغبتكم بإنجاز بعض الأعمال المنصوص عليها في طلب خدمة أعمال
              الصيانة أو أعمال الاصلاح عند قيام مزود خدمة أعمال الصيانة أو أعمال
              الاصلاح يإنجاز الأعمال الواردة في بيان طلب الخدمة؛ فإن ذلك لن يؤثر
              على الأتعاب المتفق عليها بينك وبين مزود الخدمة. وفي حال رغبت
              بإضافة بعض الأعمال على البيان عند قيام مزود خدمة أعمال الصيانة أو
              أعمال البناء يمكنك ذلك ولكن سيقوم مزود خدمة أعمال الصيانة أو أعمال
              البناء بإضافة قيمة أتعاب الأعمال المضافة على الفاتورة النهائية
              المقدمة لك.
            </li>
            <li className="h6 p-2 text-dark">
              - أقر بعلمي أنه حال قيامي، عن قصد أو خلافه، بتقديم أي معلومات
              كاذبة أو غير دقيقة فأكون مسؤولا عما يترتب على ذلك من أي تكاليف أو
              غرامات، بما في ذلك المصاريف القانونية.
            </li>
            <li className="h6 p-2 text-dark">
              <strong>طريقة الدفع</strong>: يكون الدفع حاليا لجميع الطلبات عن
              طريق النقد لمقدم الخدمة ولاحقاً عن طريق الدفع الإلكتروني وذلك من
              خلال: الدفع عن طريقة الكاش، إيداع مبلغ في رصيد حسابك على”الموقع
              الإلكتروني” لاستخدامه عند الحاجة (المحفظة الاليكترونية)، التحويل
              البنكي، ويتم تزويدكم بمعلومات حسابنا البنكي عند تسجيلك على ”
              التطبيق الإلكتروني” لاحقا، قنوات الدفع الإلكتروني ، وتكون جميع
              الاستحقاقات المالية بالجنيه المصري.
            </li>
            <li className="h6 p-2 text-dark">
              <strong>إلغاء الطلبات</strong>: يمكنك إلغاء طلبك المقدم عبر ”
              التطبيق ” في أي وقت قبل تأكيد الحجز ودفع مبلغ خدمة أعمال
              الصيانة(بالنسبة لمتلقي الخدمة). في حالة أول إلغاء للطلب بعدعشرة
              دقائق من تأكيد الحجز مع مقدم الخدمة يتم إحتساب عشرة جم بالسالب من
              قيمة الطلب القادم. وفي حالة إلغاء الطلب للمرة الثانية بعد خمس
              دقائق من تأكيد الحجز مع مقدم الخدمة يتم إحتساب عشرة جم بالسالب من
              قيمة الطلب القادم . وفى حالة تكرار إلغاء الطلب للمرة الثالثة بعد
              خمس دقائق من تأكيد الحجز مع مقدم الخدمة يتم إحتساب عشرة جم بالسالب
              من قيمه الطلب القادم ويتم إيقاف الخدمة لمدة ثلاثون دقيقة مع ظهور
              رساله (يرجى الاتصال بالدعم الفني للتطبيق). يمكنك إلغاءالطلب المقدم
              عبر ” التطبيق ” في أي وقت قبل الموافقة علىطلب متلقي الخدمة(بالنسبة
              لمقدمي الخدمة). في حالة أول إلغاء للطلب بعدعشرة دقائق من قبول طلب
              متلقي الخدمة يتم إحتساب عشرة جم بالسالب من قيمة الطلب القادم. وفي
              حالة إلغاء الطلب للمرة الثانية بعد خمس دقائق من قبول طلب متلقي
              الخدمة يتم إحتساب عشرة جم بالسالب من قيمة الطلب القادم. وفى حالة
              تكرار إلغاء الطلب للمرة الثالثة بعد خمس دقائق من قبول طلب متلقي
              الخدمة يتم إحتساب عشرة جم بالسالب من قيمه الطلب القادم ويتم إيقاف
              الخدمة تلقائياً مع ظهور رساله (يرجى الاتصال بالدعم الفني للتطبيق).
            </li>
            <li className="h6 p-2 text-dark">
              <strong>النطاق الجغرافي للخدمات</strong>: تقوم “ الورشة ” بتوفير
              خدماتها في كافة مناطق جمهورية مصر العربية وذلك حسب توفر مزودي خدمة
              أعمال الصيانة أو أعمال الاصلاح ونعتذر إن لم نتمكن من توفير خدماتنا
              لبعض جمهورية مصر العربية اذا كانت لظروف امنية او لعدم توفير مزود
              الخدمة فى تلك المناطق وسيكون داخل التطبيق جميع الاماكن التى تتيح
              الاستخدام للمستفيد من الخدمة.
            </li>
            <li className="h6 p-2 text-dark">
              <strong>تقييم الخدمة</strong>: نوفر في “ الورشة ” أداة تقييم
              الخدمة المقدمة لكم من قبل مزود خدمة أعمال الصيانة أو أعمال الاصلاح
              عند إنتهاء مزود الخدمة من الأعمال المطلوبة من عملية أعمال الصيانة
              أو أعمال اصلاح، وذلك بهدف تطوير خدماتنا وحل أي شكوى تقدم من قبلكم.
              قد يترتب على تقييمك أو شكواك إذا كنت غير راضى عن الخدمة التي قدمها
              مزود خدمة أعمال الصيانة أو أعمال الاصلاح إيقاع عقوبة فصل حساب مزود
              خدمة أعمال الصيانة أو أعمال الاصلاح مؤقتاً وذلك يعود إلى التقدير
              المنفرد لـ” الورشة ”.
            </li>
          </ul>
        </li>
        <li className="h4 p-2 text-danger">
          إخلاء المسؤولية
          <ul>
            <li className="h6 p-2 text-dark">
              إن الخدمات أو المعلومات التي يتم الحصول عليها من ” التطبيق ” أو من
              خلاله، هي خدمات ومعلومات يتم توفيرها كما هي وحسب توفرها، وبالتالي
              لن يكون “ تطبيق الورشة ” تحت أي ظرف من الظروف مسئولاً عن أية أضرار
              بما في ذلك على سبيل الذكر لا الحصر الأضرار المباشرة أو غير
              المباشرة أو الخاصة أو العرضية أو الناتجة، أو الخسائر أو المصروفات
              المترتبة فيما يتعلق بهذا ” التطبيق ” أو استخدامه أو عدم إمكان
              استخدامه من قبل أي طرف أو فيما يتعلق بأي فشل في الأداء، أو الخطأ
              أو السهو أو الانقطاع أو التعطل أو التأخير في التشغيل أو البث أو
              بسبب فيروسات أو تعطل الخطوط أو الأنظمة أو كان ذلك ناتجاً عن
              الإخلال بـ” اتفاقية الاستخدام” أو الضمانات أو الإهمال أو المسؤولية
              الخاصة بالخدمات أو المعلومات أو غير ذلك حتى ولو يبلغ “موقع الورشة”
              أو من يمثله باحتمال حصول تلك الأضرار أو الخسائر أو المصاريف.
            </li>
            <li className="h6 p-2 text-dark">
              “الورشة” ذاتها لا تقوم بتقديم خدمات أعمال الصيانة أو أعمال الاصلاح
              على ” التطبيق الإلكتروني” وإنما تقوم “الورشة ” بالتعاقد مع مزودي
              خدمة أعمال الصيانة أو أعمال الاصلاح لتقديم هذه الخدمات إلى
              عملائنا، ولذلك لاتتحمل “الورشة” أي خطأ في تقديم الخدمة أو أي أضرار
              تنتج عنها أو تلف ، وتحدد مسؤولية “الورشة” فيما يخص ذلك في سياسة
              تقييم الخدمة المذكورة في “ اتفاقية الاستخدام”.
            </li>
            <li className="h6 p-2 text-dark">
              اختيار المواد المستخدمة في “خدمة الصيانة أو أعمال البناء” هي
              مسئوليتك أنت، وتكون أنت مسئولاً عن هذه المواد من حيث الجودة
              والسلامة، وتكون مسئولاً كذلك عن كل خلل يحدث في “ أعمال الصيانة
              وأعمال الاصلاح” بسبب عدم صلاحية المواد أو عدم جودتها.
            </li>
            <li className="h6 p-2 text-dark">
              عند ضغطك على زر التسجيل في التطبيق كعميل أو مزود خدمة يعني إقرارك
              و موافقتك على هذه الشروط والأحكام ومن ضمنها سياسة الخصوصية (التي
              تعتبر جزء لا يتجزأ من الأحكام و الشروط) وأنظمة الدولة التي يعمل
              بها التطبيق، ويعد وصولك و دخولك إلى التطبيق موافقة دون قيد أو شرط
              على بنود وشروط الاستخدام، سواء أكنت مستخدماً مسجلاً أم لم تكن،
              وتسري هذه الموافقة اعتباراً من تاريخ أول استخدام لك للتطبيق. وفي
              حال عدم موافقتك على هذه الشروط والأحكام يجب عليك عدم استخدام
              التطبيق.
            </li>
            <li className="h6 p-2 text-dark">
              يحق لإدارة " الورشة " باعتبارها مالكة للتطبيق في أي وقت و بدون
              إنذار أو اشعار مسبق، ايقاف تشغيل التطبيق جزئياً أو كلياً، بشكل
              مؤقت أو دائم. و لا يترتب على على ذلك أي نوع من المسؤولية أو عقوبات
              ناجمة عن عقود مبرمة، كما لا تتحمل إدارة تمت أى أضرار تحدث للمستخدم
              نتيجة توقف الخدمة لفترة مهما طالت او قصرت نتيجة أى سبب من الأسباب
              كتطوير التطبيق أو أعمال الصيانة المجدولة أو تحديث بيانات أو خلافه.
            </li>
          </ul>
        </li>

        <li className="h4 p-2 text-danger">
          طبيعة العلاقة
          <ul>
            <li className="h6 p-2 text-dark">
              أنت توافق على أن “اتفاقية الاستخدام” لا تفسر في أي حال من الأحوال
              على أنها عقد عمل أو توظيف أو عقد وكالة أو عقد شراكة، ولا يجوز لك
              تقديم نفسك لأي طرف ثالث على أنك موظف أو وكيل أو ممثل لـ”الورشة”.
            </li>
          </ul>
        </li>

        <li className="h4 p-2 text-danger">
          القانون الواجب التطبيق
          <ul>
            <li className="h6 p-2 text-dark">
              تخضع “اتفاقية الاستخدام” في تفسيرها وتنفيذها وكافة جوانبها لأحكام
              الأنظمة المطبقة في جمهورية مصر العربية والجهات القضائية بها.
            </li>
          </ul>
        </li>

        <li className="h4 p-2 text-danger">
          التعديلات على اتفاقية وشروط الاستخدام
          <ul>
            <li className="h6 p-2 text-dark">
              “ موقع الورشة ” له مطلق الحق بأي وقت بتعديل “ اتفاقية الاستخدام”
              للموقع الإلكتروني بدون إشعار أو تنبيه مسبق ، يمكنك الدخول إلى أحدث
              نسخة من “ اتفاقية الاستخدام” في أي وقت على “الموقع الالكتروني” في
              حالة عدم قبولك للتعديلات على “ اتفاقية الاستخدام” فيجب عليك التوقف
              عن استخدام هذا “ الموقع ” في حال استمرارك باستخدام هذا “الموقع”
              فإنك توافق ضمنيا على الالتزام بالبنود المعدلة على “ اتفاقية
              الاستخدام” عند استخدام هذا “ الموقع”.
            </li>
          </ul>
        </li>
        <li className="h4 p-2 text-danger">
          معلومات التواصل
          <ul>
            <li className="h6 p-2 text-dark">
              شكرا لكم لزيارة “ تطبيق الورشة ” على شبكة الانترنت والذي تملكه
              شركة (الورشة اوتو سيرفيس) وهي شركة مسجلة في جمهورية مصر العربية
              تحت سجل تجاري رقم (132557) بالمقر الادارى الكائن في (4) عمارات
              العبور – صلاح سالم – مصر الجديدة – محافظة القاهرة
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default App;
