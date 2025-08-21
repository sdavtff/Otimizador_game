function atualizarMonitor() {
    const monitor = document.getElementById('monitor');
    const cpu = Math.floor(Math.random() * 60) + 20;
    const ram = Math.floor(Math.random() * 50) + 30;
    const bateria = Math.floor(Math.random() * 30) + 70;
    const temp = Math.floor(Math.random() * 20) + 35;
    monitor.innerText = `CPU: ${cpu}% | RAM: ${ram}% | Bateria: ${bateria}% | Temp: ${temp}°C`;
}

// Atualiza monitor a cada 2 segundos
setInterval(atualizarMonitor, 2000);

function animarProgresso(callback) {
    const progressBar = document.getElementById('progress-bar');
    let width = 0;
    progressBar.style.width = '0%';
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            callback();
        } else {
            width += 5; // velocidade da animação
            progressBar.style.width = width + '%';
        }
    }, 100);
}

function otimizar(funcao) {
    const status = document.getElementById('status');
    status.innerText = `${funcao} em andamento...`;
    animarProgresso(() => {
        status.innerText = `✅ ${funcao} concluído com sucesso!`;
        atualizarMonitor();
        document.getElementById('progress-bar').style.width = '0%';
    });
}

function contribuir() {
    const status = document.getElementById('status');
    status.innerText = "Se quiser contribuir, envie um PIX:";
    alert("💖 Contribua com o app!\nPIX: 157.088.047-69");
}