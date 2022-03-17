
/*Resetando os valores de espaçamento */
 * {
 margin: 0;
 padding: 0;
 }

/*Estilizando a nav da classe menu */
 .menu {
 width: 100%;
 height: 50px;
 background-color: #222;
 font-family: Arial;
 }

/*Estilizando as listas */
 .menu ul {
 list-style: none;
 position: relative;
 }

.menu ul li {
 width: 150px;
 float: left;
 }

.menu a {
 padding: 15px;
 display: block;
 text-decoration: none;
 text-align: center;
 background-color: #222;
 color: #fff;
 }

.menu ul ul {
 position: absolute;
 visibility: hidden;
 }

.menu ul li:hover ul {
 visibility: visible;
 }

.menu a:hover {
 background-color: #f4f4f4;
 color: #555;
 }

.menu ul ul li {
 float: none;
 border-bottom: solid 1px #ccc;
 }

.menu ul ul li a {
 background-color: #069;
 }

/*Criando o label */
 label[for=”bt_menu”]{
 padding: 5px;
 background-color: #222;
 color: #fff;
 font-family: Arial;
 text-align: center;
 font-size: 30px;
 cursor: pointer;
 height: 50px;
 }

#bt_menu {
 display: none;
 }

label[for=”bt_menu”]{
 display: none;
 }

/*Deixando o Menu Responsivo */
@media(max-width: 800px) {
label[for=”bt_menu”] {
 display: block;
 }
  
#bt_menu:checked ~ .menu{
 margin-left: 0;
 }
  
.menu{
 margin-top: 5px;
 margin-left: -100%;
 transition: all .4s;
 }
  
.menu ul li {
 width: 100%;
 float: none;
 }
  
.menu ul ul {
 position: static;
 overflow: hidden;
 max-height: 0;
 transition: all 4s;
 }
  
.menu ul li:hover ul {
 height: auto;
 max-height: 200px;
 }
  
 }