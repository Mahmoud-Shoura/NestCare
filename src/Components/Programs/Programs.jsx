import { useState } from "react";
import "./Programs.css";

const Programs = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const programDetails = [
    {
      title: "1. الرعاية الطبية",
      description:
        "تُعتبر هذه الخدمة بديلاً مريحًا وفعالاً للمستشفيات والمرافق الطبية، حيث توفر للمرضى الفرصة للحصول على الرعاية الطبية اللازمة في بيئتهم المنزلية المريحة.",
    },
    {
      title: "2. الخدمة المنزلية",
      description:
        "الخدمة المنزلية هي مجموعة من الخدمات المتنوعة التي تُقدم للأسر في منازلهم بهدف تسهيل الحياة اليومية وجعلها أكثر راحة وسلاسة.",
    },
    {
      title: "3. مسؤولو المطبخ",
      description:
        "مسؤولو المطبخ يديرون العمليات اليومية، ويشمل عملهم إعداد الطعام، وتنظيم فريق الطهاة، وضمان معايير النظافة والسلامة. يقومون بالتخطيط للقوائم الغذائية وإدارة المخزون بكفاءة.",
    },
    {
      title: "4. عاملات و عمال مصانع",
      description:
        "عاملات وعمال المصانع يقومون بتشغيل وصيانة الآلات، وتجميع وتعبئة المنتجات، وضمان جودتها مع الالتزام بإجراءات السلامة. يساهمون بمهاراتهم في تحقيق الإنتاجية العالية والجودة الممتازة.",
    },
    {
      title: "5. جميع الجنسيات",
      description:
        "عاملات المنازل من جميع الجنسيات يقمن بتقديم خدمات متنوعة تشمل التنظيف، الطهي، ورعاية الأطفال، مما يساهم في تسهيل الحياة اليومية للأسر وضمان راحتهم. يتميزن بالكفاءة والتفاني في أداء مهامهن.",
    },
    {
      title: "6. عقد قانوني",
      description:
        "يهدف هذا العقد إلى ضمان حقوق وواجبات كلا الطرفين، وضمان بيئة عمل عادلة وآمنة.",
    },
  ];

  return (
    <div className="programs" id="programs">
      {programDetails.map((program, index) => (
        <div
          className="card"
          key={index}
          onClick={() => handleCardClick(index)}
        >
          <h3>{program.title}</h3>
          {activeCard === index && <p>{program.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default Programs;
