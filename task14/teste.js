import { Sandalia } from "./Calcado/Sandalia.js";
import { Tenis } from "./Calcado/Tenis.js";
import { Carrinho } from "./Carrinho/Carrinho.js";
import { CheckOut } from "./CheckOut/CheckOut.js";
import { Pix } from "./CheckOut/Pix.js";
import { Vendedor } from "./Pessoa/Vendedor.js";
import { Cliente } from "./Pessoa/Cliente.js";

const cliente = new Cliente ("12345678910", "Joao");
const vendedor = new Vendedor ("1456869876", "Raquel");

const sandalia = new Sandalia ("Ana Bela", "Nike", "40", "rosa", 152.90);
const tenis = new Tenis ("Ronaldo Total 90", "Nike", "37", "Vermelho", 601);

const carrinho = new Carrinho (vendedor, cliente);
carrinho.adicionarItemaoCarrinho (sandalia);
carrinho.adicionarItemaoCarrinho (tenis);

const checkout = new CheckOut(carrinho);
const pix = new Pix ();
checkout.finalizarPedido(pix);
checkout.imprimirComprovante();
