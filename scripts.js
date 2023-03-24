cliques_op1 = 0 /*variavel global */
cliques_op2 = 0
function MostrarMenu2()
{
cliques_op2 = cliques_op2 + 1;
if(cliques_op2 == 1){
menu2.classList.remove("recolhe");
menu2.classList.add("inicia");
}
else{
menu2.classList.remove("inicia");
menu2.classList.add("recolhe");
}

}


function MostrarMenu1()
{
cliques_op1 = cliques_op1 + 1;
if(cliques_op1 == 1){
    menu1.style.top = "51px";
}
if(cliques_op1 == 2){
    menu1.style.top = "-150px";
    cliques_op1 = 0;
}


}