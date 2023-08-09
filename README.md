## История на игровите конзоли

_Курсова работа по CITB558 Web-програмиране с HTML и JavaScript_

Моята курсова работа е един развлекателен уеб сайт, който цели да разкаже изненадващо интересната история на домашните игрови конзоли. Предназначен е за хора, любопитни или иначе, които се интересуват от видео игри и електроника и искат да научат малко за историята на устройствата, които седят под телевизорите им. 

Уеб сайта се състои от две страници – главната страница, където е разположена и самата история, и страница – интерактивен тест, с който читателя може да провери знанията си. Всичко е реализирано с HTML, CSS и vanilla JavaScript без използването на библиотеки, със адаптивен дизайн, тествано както на компютър през Firefox и Еdge, така и през личния ми смартфон.

Когато се отвори уебсайта, първото нещо което се вижда е заглавната част. Тя включва лого, заглавие, подзаглавие, два бутона и видео фон, който е оразмерен така, че да е голям колкото самия прозорец. Използван е CSS, така че всички елементи без фона да се появяват с една едносекундна анимация. Когато се цъкне левия бутон, прозореца се плъзга надолу, за да покаже главното съдържание (текстът и изображенията) на страницата. Десният бутон те праща към другата страница. На дъното на страницата, точно преди футъра, има още един бутон с препратка към другата страница, която насърчава четеца да провери знанията си.

Когато се плъзне надолу към съдържателната част, точно 200 пиксела от началото, се появява бутон в долния десен ъгъл, който като се цъкне, те праща отново към заглавната част, където бутона отново ще се скрие. Скриването и показването на бутона, както и автоматичното плъзгане, е осъществено с няколко реда JavaScript код.

Текстовото съдържание е подбрано, обработено и преведено от английски източници. Вероятно можеше текста допълнително да се редактира, за да е по-точен, но смятам, че самото съдържание на текста не е от първа важност за тази курсова работа. Снимковия материал, както и логото, е взето от Интернет, и е обработено и оразмерено допълнително. Всяка секция (глава от историята) е разделена в отделна кутия. След всяка се редува цвета на фона на кутията от бяло към сиво и разположението на изображението от ляво на дясно. 

Другата страница е по-скромна като съдържание и външен вид. Всичко е вкарано в един контейнер с размерите на прозореца. Отгоре и отдолу, отново със CSS анимация, се появяват съответно хедър и футър. Хедърът съдържа логото, което като се цъкне те препраща отново към главната страница. Като се сложи мишката върху логото, цвета на монохромното лого плавно става по-светло, ефект осъществен със CSS като се промени прозрачността на логото при hover. Футъра в тази (и миналата) страница просто съдържа от кого е изработен сайта и годината на изработване.

В средата на страницата, отново с анимация, се появява един бутон. Когато се цъкне този бутон се скрива и започва теста. Теста се състои от 10 задачи с по 4 възможни отговора. На всички въпроси може да се отговори правилно стига читателя да е добре запознат със съдържанието от главната страница. Самите въпроси са поместени в JavaScript файла, като масив от обекти. Всеки обект съдържа въпросът, възможните отговори и кой е верният отговор. Като се цъкне старт бутона, и всеки път като се цъкне бутона напред, в прозореца се помества информацията от следващия поред обект докато не свършат. Когато се избере отговор и се цъкне напред, първо се проверява дали е верен отговора преди да замени данните. Ако е верен се добавя 1 към променлива брой точки. След последния въпрос се изписва колко верни отговора си получил, а при цъкане на бутона се презарежда страницата, което позволява на потребителя отново да направи теста.