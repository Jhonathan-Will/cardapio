
        let codigo = [10.00, 11.50, 15.50, 16.50, 5.50];
        let lanche = ["cachorro quente", "Bauru simples", "Bauru c/ovo", "Hambúrguer", "Refrigerante"]
        let num;
        let quant;
        let total;
        let i;
       let o;
        function enviar(){
            num= parseInt(document.getElementById("codigo").value);
            quant = document.getElementById("quantidade").value

            if(num >=100 && num <=104){
                switch(num){
                case 100:
                    i=0;
                    total = quant * codigo[0];
                    break;
                 case 101:
                     i=1;
                    total = quant * codigo[1];
                    break;
                case 102:
                    i=2;
                    total = quant * codigo[2];
                    break;
                case 103:
                    i=3;
                    total = quant * codigo[3];
                    break;
                case 104:
                    i=4;
                    total = quant * codigo[4];
                    break;
            }
                if(o==1){
                    o=0;
                    document.getElementById("h3").innerHTML = `<p> Você comprou ${quant} ${lanche[i]} e vai pagar R$ ${total} </p>`;
                }
                else{
                    document.getElementById("h3").innerHTML += `<p> Você comprou ${quant} ${lanche[i]} e vai pagar R$ ${total} </p>`;
                }
            }
            else{
                o = 1;
                document.getElementById("h3").innerHTML = `<p>codigo do produto invalido</p>`;
            }
        }

       function limpar(){
        document.getElementById("h3").innerHTML = ` `;
       }
