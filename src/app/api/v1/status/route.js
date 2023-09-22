import { NextResponse } from "next/server";

/**
 * endpoint /api/status vai retornar a saude do nosso sistema 
 * @param {*} request 
 */
export async function GET(request) {
  //define status code da resposta, é um numero que define se deu tudo certo ou não na requisição, valor 200 sinaliza que deu tudo ok
  return NextResponse.json({message: "Olá, curso.dev."})
}