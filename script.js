//aqui está dizendo que, quando esse código estiver todo carregado e pronto para ser manipulado, a vai ser chamado uma "função" para ele e o código dentro dele será executado.
document.addEventListener("DOMContentLoaded", function () {
    // aqui ele está declarando a avariavel tempo
    const timeElement = document.getElementById("time");
    // declaração a variavel setAlarmButton
    const setAlarmButton = document.getElementById("setAlarmButton");
    // declaração a variavel alarmtime
    const alarmTimeInput = document.getElementById("alarmTime");
    // declaração a variavel alarmSound
    const alarmSound = document.getElementById("alarmSound");
     
    // aqui está sendo criado a variavel alarmTime que será usada para amarzenar a data e a hora definida pelo usuario.
    let alarmTime;
    // aqui vai está criando a variavel, para ver a hora atual e a posteriar, ou melhor quando for a hora do despertador tocar.
    let alarmInterval;

    // atualização do relógio para o horário atual
    function updateTime() {
        // aqui ele está obtendo uma nava data
        const now = new Date();
        // aqui ele está obtendo uma nava hora 
        const hours = now.getHours();
        // aqui ele está obtendo um novo minuto
        const minutes = now.getMinutes();
        // aqui ele sempre vai estar atualizando a hora e os minutos
        const formattedTime = `${padZero(hours)}:${padZero(minutes)}`;
        //No contexto do seu código, essa linha está atualizando o conteúdo de um elemento HTML para exibir a hora e os minutos formatados no formato "HH:MM". 
        timeElement.textContent = formattedTime;
    }

  //Resumindo, a função padZero(number) é usada para garantir que um número tenha pelo menos dois dígitos, adicionando um zero à esquerda se ele for menor que 10.
    function padZero(number) {
        // Essa linha de código é usada para formatar os valores das horas e dos minutos, garantindo que eles tenham pelo menos dois dígitos, com um zero à esquerda, se necessário.
        return (number < 10 ? "0" : "") + number;
    }
       // aqui está sendo criada uma função para começar o alarme 
    function startAlarm() {
        // aqui está sendo configurado um tempo a cada segundo para, para saber a hora de despertar
        alarmInterval = setInterval(checkAlarm, 1000);
    }
      // função checar o alarme 
    function checkAlarm() {
        // aqui ele está obtendo uma nava data
        const now = new Date();
        // aqui está sendo varificado se o tempo ja passou 
        if (now >= alarmTime) {
            // aqui está apagando o tempo de despertar antigo
            clearInterval(alarmInterval);
            // aqui é para quando o a larme despertar tocar a musica que foi escolhida
            playAlarmSound();
        }
    }
      // aqui é para quando o a larme despertar tocar a musica que foi escolhida
    function playAlarmSound() {
        //aqui é o som que foi escolhido
        alarmSound.play();
        // quando der a hora de despertar essa mensagem vai aparecer 
        alert("Alarm! It's time to wake up!");
    }
    //irá detectar quando o botão for clicado e executar uma função em resposta
    setAlarmButton.addEventListener("click", function () {
        //usado para realizar comparações de tempo, como verificar se um tempo definido pelo usuário é no futuro em relação ao tempo atual
        const currentTime = new Date();
      //isso permitira que vc compare o tempo do alarme com o tempo atua para verificar a hora de dispertar
        alarmTime = new Date(alarmTimeInput.value);
        //Portanto, a linha de código está verificando se o tempo definido para o alarme é menor ou igual ao tempo atual
        if (alarmTime <= currentTime) {
                    // quando der a hora de despertar essa mensagem vai aparecer 
            alert("The alarm time must be in the future.");
            return;
        }
       // começar o alarme
        startAlarm();
    });
//Isso garante que o horário seja exibido corretamente desde o início e seja atualizado a cada segundo
    updateTime();
    //atualizando assim a exibição do horário na página a cada segundo.
    setInterval(updateTime, 1000);
});
