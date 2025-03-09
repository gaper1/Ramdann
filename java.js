// دالة لإضافة النجو
  // استدعاء دالة النجوم
  createStars();
  let text =" مسأل الله أن يجعل رمضان هذا العام رمضانًا مباركًا، وأن يعيده علينا وعليكم بالخير والبركاتة!";
  let index = 0;
  let speed = 150; // سرعة الكتابة
  let deleting = false;

  function typeWriter() {
      let element = document.getElementById("typing");
      if (deleting) {
          element.innerText = text.substring(0, index--);
          if (index == 0) {
              deleting = false;
              setTimeout(typeWriter, 50); // وقت الانتظار قبل الكتابة من جديد
          } else {
              setTimeout(typeWriter, speed / 2);
          }
      } else {
          element.innerText = text.substring(0, index++);
          if (index === text.length) {
              deleting = true;
              setTimeout(typeWriter, 1000); // وقت الانتظار قبل المسح
          } else {
              setTimeout(typeWriter, speed);
          }
      }
  }

  typeWriter(); // تشغيل التأثير  