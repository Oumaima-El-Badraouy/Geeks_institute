const express= require('express');
const cors= require('cors');
const app = express();
app.use(cors());
  const questions= [
    {
      "question": "React واش Library ولا Framework؟",
      "choices": ["Library", "Framework", "Language", "Compiler"],
      "correctAnswer": "Library"
    },
    {
      "question": "علاش كنقولو React Library؟",
      "choices": [
        "حيت كيخدم غير بالـ UI",
        "حيت فيه Routing و State Management كاملين",
        "حيت بحال Angular",
        "حيت لغة برمجة جديدة"
      ],
      "correctAnswer": "حيت كيخدم غير بالـ UI"
    },
    {
      "question": "شنو خاصنا نزيدو مع React باش يكون بحال Framework؟",
      "choices": [
        "React Router و Redux",
        "PHP و MySQL",
        "HTML و CSS",
        "Spring Boot"
      ],
      "correctAnswer": "React Router و Redux"
    },
    {
      "question": "علاش بزاف ديال الناس كيسمّيو React Framework؟",
      "choices": [
        "حيت مشهور بزاف وكيتستعمل فمشاريع كبار",
        "حيت مكتوب فالـ documentation ديالو framework",
        "حيت Angular و React نفس الحاجة",
        "حيت React لغة برمجة"
      ],
      "correctAnswer": "حيت مشهور بزاف وكيتستعمل فمشاريع كبار"
    }
  ];






app.get('/questions',(req,res)=>{
    return res.send(questions);
})
app.listen(5000,()=>{
  console.log('server running at http://localhost:5000/');
});
