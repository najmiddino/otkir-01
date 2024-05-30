alert ("Hozir sizda tasodifiy son chiqishni boshlaydi")

let random_num = Math.floor(Math.random() * 100 )

alert (
   `Random orqali chiqqan son: ${random_num}`
);

confirm ("Biz randomdan chiqqan sonni 2ga ko`paytirmoqchi va bo`lmoqchimiz")

alert (
    `
    Randomdan chiqqan son: ${random_num}
    Biz randomdan chiqqan sonni 2ga kopaytirganda: ${random_num * 2} chiqardik,
    va shu sonni 2ga bolgansa: ${random_num / 2} chiqardik,
    va yana shu sonni 3ga bolgandagi qoldiqni: ${random_num % 3} chiqardik.
    `
)