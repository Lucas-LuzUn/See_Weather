const apikey = "0ad7ad6715bf9fd5469ff3c6a309764b";

function pesquisar(){
    const cityname = document.getElementById("search_city").value;

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityname)}&appid=${apikey}&units=metric&lang=pt_br`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data);// Aqui você pode adicionar código para atualizar a interface com os dados recebidos
            
            if (data.cod === 200){
                cidade = data.name;
                local = data.sys.country;
                temperatura = data.main.temp;
                clima = data.weather[0].description;
                icone = data.weather[0].icon;
                tempMaxima = data.main.temp_max;
                tempMinima = data.main.temp_min;
                humidade = data.main.humidity;
                vento = data.wind.speed;

                    document.getElementById("title").innerHTML = `${cidade} - ${local}`;
                    document.getElementById("temp_value").innerHTML = `${temperatura.toFixed(1)}&deg;C`;
                    document.getElementById("temp_description").innerHTML = clima;
                    document.getElementById("max_temp").innerHTML = `${tempMaxima.toFixed(1)}&deg;C`;
                    document.getElementById("min_temp").innerHTML = `${tempMinima.toFixed(1)}&deg;C`;
                    document.getElementById("humidity").innerHTML = `${humidade}%`;
                    document.getElementById("wind").innerHTML = `${vento} KM/H`;
                    document.getElementById("imagem").setAttribute(`src`, `https://openweathermap.org/img/wn/${icone}@2x.png`)
            }   

            else {
                 document.getElementById("title").innerHTML = "Cidade não encontrada"
                document.getElementById("temp_value").innerHTML = "";
                document.getElementById("temp_description").innerHTML = "";
                document.getElementById("max_temp").innerHTML = "";
                document.getElementById("min_temp").innerHTML = "";
                document.getElementById("humidity").innerHTML = "";
                document.getElementById("wind").innerHTML = "";
                document.getElementById("imagem").setAttribute(`src`, "")
            }
        })
}

// Captura o formulário e adiciona um evento de escuta para o evento de envio
const form = document.getElementById('search');
    form.addEventListener('submit', function(event){
        event.preventDefault(); // Impede o recarregamento da página
        pesquisar(); // Chama a função de pesquisa quando o formulário é enviado
    });